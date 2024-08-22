import axios from "axios";

const SERVER_BASE_URL = "https://probably-chief-clam.ngrok-free.app/api/v1";

export const axiosInstance = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});
