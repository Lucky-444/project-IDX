import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../../apis/project";

export const useCreateProject = () => {
  const {
    mutateAsync: createProjectMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log("successFully created a project", data);
    },
    onError: (error) => {
      console.log("Error in created a project", error);
    },
  });
  return {
    createProjectMutation,
    isPending,
    isError,
  };
};
