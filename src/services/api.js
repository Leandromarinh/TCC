import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3200/" : null;

const api = axios.create({
  baseURL,
});

export default api;
