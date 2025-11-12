import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 30000,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});

export default axiosInstance;
