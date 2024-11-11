import axios from "axios";

const PORT = 8000;

export const uploadDocument = async (data, config) => {
  try {
    // const response = await axios.post(
    //   `http://localhost:${PORT}/api/data`,
    //   data,
    //   config
    // ); // replace with your backend endpoint
    console.log(data, config); // Use response data in your component
    return { status: true };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getPrompt = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:${PORT}/api/data`,
      data
    ); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export const buildKgGraph = async () => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/api/data`); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

export const init = async () => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/api/data`); // replace with your backend endpoint
    console.log(response.data); // Handle response from backend
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
