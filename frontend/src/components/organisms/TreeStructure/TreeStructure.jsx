import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../../../store/treeStructureStore";
import { useEffect } from "react";
import { TreeNode } from "../../molecules/TreeNode/TreeNode";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { FileContextMenu } from "../../molecules/ContextMenu/FileContextMenu";

export const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();
  const {
    file ,
    isOpen : isFileContextOpen , 
    x : FileContextX,
    y : FileContextY
  } = useFileContextMenuStore();

  useEffect(() => {
    if (treeStructure) {
      console.log("Tree Structure is", treeStructure);
    } else {
      setTreeStructure();
    }
  }, [setTreeStructure, treeStructure]);

  return (
    <>
     {isFileContextOpen && FileContextX && FileContextY && (
       <FileContextMenu
         x={FileContextX}
         y={FileContextY}
         path={file}
       />
     )}
      <TreeNode fileFolderData={treeStructure} />
    </>
  );
};
