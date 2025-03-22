"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { ResponsiveModal } from "@/components/responsive-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useNotificationModal } from "@/hooks/use-notification-modal";

import { Button } from "./ui/button";

export const NotificationModal = () => {
  const {
    isOpen,
    title = "Title",
    description = "Description",
    close,
  } = useNotificationModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={close}>
      <Card className="w-full h-full border-none shadow-none">
        <CardHeader className="flex p-7 pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="w-full p-7 pt-2">
          <div>
            <p>{description}</p>
          </div>
          <DottedSeparator className="py-7" />
          <div className="w-fit ml-auto">
            <Button size="lg" onClick={close}>
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </ResponsiveModal>
  );
};
