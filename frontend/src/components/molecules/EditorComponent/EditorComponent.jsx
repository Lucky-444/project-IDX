import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useEditorSocketStore } from "../../../store/editorSocketStore.js";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  let timerId = null;


  const {editorSocket} = useEditorSocketStore();
  const { activeFileTab } = useActiveFileTabStore();

  async function downloadTheme() {
    const response = await fetch("/Dracula.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }
  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", editorState.theme);
    monaco.editor.setTheme("dracula");
  }

  function handleChange(value){

    // implementation of debouncing
    //example sanket -> when user type s new timer start
    // when user type 'a' -> clear all old timer for that the timer of 's' is cleared
    // when user type 'n' -> clear all old timer for that the timer of 's
    // and 'a' is cleared
    // when user type 'k' -> clear all old timer for that the timer of 's
    // and 'a' and 'n' is cleared
    if(timerId != null){
      clearTimeout(timerId);
    }
    //set the new timer 
    timerId =  setTimeout(() => {
          const editorContent = value;
          editorSocket.emit("writeFile",{
         data : editorContent,
         pathToFileOrFolder : activeFileTab.path,
    })
     }, 2000);
    
  }

  useEffect(() => {
    downloadTheme();
  }, []);

  //monaco Editor implementattion
  return (
    <>
      {editorState.theme && 
        <Editor
          height="100vh"
          width={"100%"}
          defaultLanguage={undefined}
          defaultValue="// Welcome to the playground"
          options={{
            fontSize: 18,
            fontFamily: "monospace",
          }}
          // language={extensionToFileType(activeFileTab?.extension)}
          onChange={handleChange}
          value={
            activeFileTab?.value
              ? activeFileTab.value
              : "// Welcome to the playground"
          }
          onMount={handleEditorTheme}
        />
      }
    </>
  );
};
