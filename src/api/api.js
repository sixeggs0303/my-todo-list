import axios from "axios";

const api = axios.create({
  baseURL: "https://5fd06b921f23740016631887.mockapi.io/api",
});

export default api;
