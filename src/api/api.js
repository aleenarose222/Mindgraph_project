import axios from "axios";

const PORT = 8000;

export const uploadDocument = async (data, config) => {
  try {
    const response = await axios.post(
      `http://localhost:${PORT}/document`,
      data,
      config
    ); // replace with your backend endpoint
    console.log(data, config); // Use response data in your component
    return { res:response,status: true };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getPrompt = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:${PORT}/prompt`,
      data
    ); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
    return { res:response,status: true };
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export const buildKgGraph = async () => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/build_knowledge_graph`); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
    return { res:response,status: true };
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export const init = async () => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/`); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
    return { res:response,status: true };
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
