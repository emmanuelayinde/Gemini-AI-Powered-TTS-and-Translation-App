import axios from "axios";

// > npx ngrok http --domain=probably-chief-clam.ngrok-free.app 8000
const LOCAL_SERVER_BASE_URL =
  "https://probably-chief-clam.ngrok-free.app/api/v1";
const PRODUCTION_SERVER_BASE_URL = "https://sptransapp.onrender.com/api/v1";

export const axiosInstance = axios.create({
  baseURL: PRODUCTION_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});
