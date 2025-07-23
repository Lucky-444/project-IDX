import { CreateProject } from "./pages/CreateProject";
import { Route, Routes } from "react-router-dom";
import { ProjectPlayground } from "./pages/ProjectPlayground";

export const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateProject />} />
      <Route path="/project/:projectId" element={<ProjectPlayground/>} />
    </Routes>
  );
};
