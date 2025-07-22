import { useCreateProject } from "../hooks/apis/mutations/useCreateProject.js";
import { Button, Col, Flex, Row } from "antd";
export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();
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
