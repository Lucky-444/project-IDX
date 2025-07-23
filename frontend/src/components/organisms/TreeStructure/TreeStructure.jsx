import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../../../store/treeStructureStore";
import { useEffect } from "react";

export const TreeStructure = () => {
  const { treeStructure, setTreeStructure } = useTreeStructureStore();
  const { projectId } = useParams();

  useEffect(() => {
    if (treeStructure) {
      console.log("Tree Structure is", treeStructure);
    } else {
      setTreeStructure(projectId);
    }
  }, [projectId, setTreeStructure, treeStructure]);

  return (
    <div>
      hello Tree Structure
      <div>hello Tree Structure</div>
    </div>
  );
};
