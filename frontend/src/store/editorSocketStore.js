import { create } from "zustand";
import { useActiveFileTabStore } from "./activeFileTabStore.js";

export const useEditorSocketStore = create((set) => ({
  editorSocket: null,

  setEditorSocket: (incomingSocket) => {

    const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
    
    //without called the hook we use the setter from the store by using this method

    incomingSocket.on("readFileSuccess", (data) => {
      console.log("ReadFile Data", data);
      activeFileTabSetter(data.path, data.value);
    });

    incomingSocket?.on("writeFileSuccess" , (data) => {
      console.log("WriteFile Data", data);
      incomingSocket.emit("readFile",{
         pathToFileOrFolder : data.path
      })
    });

    set({
      editorSocket: incomingSocket,
    });
  },
}));
