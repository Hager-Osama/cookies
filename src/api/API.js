import axios from "axios";
import AuthLocalUtils from "../pages/local_utils";

const axiosInstance = axios.create({
  baseURL: "https://restaurant-project-drab.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = AuthLocalUtils.getToken();
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export default axiosInstance;
