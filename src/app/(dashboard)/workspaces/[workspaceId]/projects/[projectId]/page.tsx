import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdClient } from "./client";

const ProjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  // const { projectId } = await params;
  // const initialValues = await getProject({
  //   projectId,
  // });

  // if (!initialValues) {
  //   throw new Error("Project not found");
  // }

  return <ProjectIdClient />;
};

export default ProjectIdPage;
