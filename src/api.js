import axios from "axios";

const API_URL = "http://localhost:5000";

export const login = async (body) => {
  try {
    const response = await axios.post(API_URL + "/login", body);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const signup = async () => {
  try {
    const response = await axios.get(API_URL + "/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
