import { create } from "zustand";
import { useActiveFileTabStore } from "./activeFileTabStore.js";
import { useTreeStructureStore } from "./treeStructureStore.js";

export const useEditorSocketStore = create((set) => ({
  editorSocket: null,

  setEditorSocket: (incomingSocket) => {
    const activeFileTabSetter =
      useActiveFileTabStore.getState().setActiveFileTab;

    const projectTreeStructureSetter =
      useTreeStructureStore.getState().setTreeStructure;
    //without called the hook we use the setter from the store by using this method

    incomingSocket.on("readFileSuccess", (data) => {
      console.log("ReadFile Data", data);
      //return the back to the active file tab store
      const fileExtension = data.path.split('.').pop();
      activeFileTabSetter(data.path, data.value , fileExtension);
    });

    incomingSocket?.on("writeFileSuccess", (data) => {
      console.log("WriteFile Data", data);
      incomingSocket.emit("readFile", {
        pathToFileOrFolder: data.path,
      });
    });

    incomingSocket?.on("deleteFileSuccess", () => {
      projectTreeStructureSetter();
    });

    incomingSocket?.on("getPortSuccess", ({ port }) => {
      console.log("port data", port);
      // portSetter(port);
    });

    set({
      editorSocket: incomingSocket,
    });
  },
}));
