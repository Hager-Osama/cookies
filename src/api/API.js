import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://restaurant-project-drab.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});


export default axiosInstance;