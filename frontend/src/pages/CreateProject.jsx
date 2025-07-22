import { useCreateProject } from "../hooks/apis/mutations/useCreateProject.js";

export const CreateProject = () => {
  const { createProjectMutation  , isPending} = useCreateProject();
  async function handleCreateProject() {
    console.log("going to trigger the api");
    try {
      await createProjectMutation();
      console.log("Now we should redirect to the Editor");
      
    } catch (error) {
      console.log("Creating Project Error");
    }
  }
  return (
    <div>
      <h1> Create Project </h1>
      <button onClick={handleCreateProject}> Create Project </button>
      {isPending && <p>Creating a new Project for You ......</p>}
    </div>
  );
};
