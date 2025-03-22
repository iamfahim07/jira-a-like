import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";

interface UseNotificationModalProps {
  title?: string;
  description?: string;
}

export const useNotificationModal = ({
  title: modalTitle = "",
  description: modalDescription = "",
}: UseNotificationModalProps = {}) => {
  const [isOpen, setIsOpen] = useQueryState(
    "notification",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  const [title, setTitle] = useQueryState(
    "title",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );

  const [description, setDescription] = useQueryState(
    "description",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );

  const open = () => {
    setIsOpen(true);
    setTitle(modalTitle);
    setDescription(modalDescription);
  };
  const close = () => {
    setIsOpen(false);
    setTitle("");
    setDescription("");
  };

  return {
    isOpen,
    open,
    close,
    setIsOpen,
    title,
    description,
  };
};
