import { create } from "zustand";
import { useProjectTree } from "../hooks/apis/queries/useProjectTree.js";
import { QueryClient } from "@tanstack/react-query";
import { getProjectTree } from "../apis/project";
export const useTreeStructureStore = create((set) => {
  //call using query client
  // because we are using a query client to fetch data from the server

  //we cant use useProjectTree inside the return function
  //so we use query client to fetch the data

  const queryClient = new QueryClient();

  return {
    treeStructure: null,
    setTreeStructure: async (projectId) => {
      //fetch data from server using query client
      const data = await queryClient.fetchQuery({
        queryFn: () => getProjectTree({ projectId }),
        queryKey : [`projecttree-${projectId}`],
      });
      console.log("Tree Data is" , data);
      set({
        treeStructure: data,
      })
    },
  };
});
