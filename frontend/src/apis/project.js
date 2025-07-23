import axios from '../config/axiosConfig.js';

export const createProjectApi = async () => {
  try {
    const response = await axios.post('/api/v1/projects');
    console.log("response is" , response);
    return response.data;
    
  } catch (error) {
    console.log("CreateProjectApi Error", error);
    throw error;
  }
};


export const getProjectTree = async ({projectId}) => {
    try {
    const response = await axios.get(`/api/v1/projects/${projectId}/tree`);
    console.log("response is" , response);
    return response?.data?.data;
    
  } catch (error) {
    console.log("GetProjectTreeApi Error", error);
    throw error;
  }
}