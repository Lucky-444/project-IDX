import { getProjectTree } from "../../../apis/project";

export const useProjectTree = () => {
  const { data : projectTree, error, isLoading, isError } = useQuery({
    queryFn: () => getProjectTree({ projectId }),
    
  });

  return {
    projectTree,
    error,
    isLoading,
    isError,
  };
};
