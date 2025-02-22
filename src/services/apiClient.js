import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default apiClient;
