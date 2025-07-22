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
