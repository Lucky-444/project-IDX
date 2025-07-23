import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";
import { getProjectTree } from "../apis/project.js";

const queryClient = new QueryClient();
export const useTreeStructureStore = create((set, get) => {

  return {
    projectId: null,
    treeStructure: null,
    setTreeStructure: async () => {
      const id = get().projectId;
      const data = await queryClient.fetchQuery({
        queryKey: [`projecttree-${id}`],
        queryFn: () => getProjectTree({ projectId: id }),
      });

      console.log(data);

      set({
        treeStructure: data,
      });
    },
    setProjectId: (projectId) => {
      set({
        projectId: projectId,
      });
    },
  };
});
