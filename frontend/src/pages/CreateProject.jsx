import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject.js";
import { Button, Col, Flex, Row } from "antd";
export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();
  const navigate = useNavigate();
  async function handleCreateProject() {
    console.log("going to trigger the api");
    try {
      const response = await createProjectMutation();

      console.log("Now we should redirect to the Editor");
      navigate(`/project/${response.data}`);
    } catch (error) {
      console.log("Creating Project Error");
    }
  }
  return (
    <Row>
      <Col span={24}>
        <Flex justify="center" align="center">
          <Button type="primary" onClick={handleCreateProject}>
            Create Playground
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};
