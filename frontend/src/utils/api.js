import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "/user-api";

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;
