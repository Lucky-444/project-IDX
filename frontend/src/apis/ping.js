import axios from "../config/axiosConfig";

export const pingApi = async () => {
  try {
    const response = await axios.get("/api/v1/ping");
    console.log("Api Response", response);
    return response.data;
  } catch (error) {
    console.log("PingAPi Eroor", error);
    throw error;
  }
};
