import axios from "axios";
import LocalStorage from "../utils/LocalStorage";
import { GLobalError, UnauthorizedError } from "../utils/AppError";

const client = axios.create({
  baseURL: "http://localhost:8888/api/v1",
});

client.interceptors.request.use(async (config) => {
  if (config.url === "/auth/login") {
    const token = await LocalStorage().getData("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config
});

const apiClient = async ({ url, method, param = null }) => {
  try {    
    const result = await client[method](url, param);        
    return result;
  } catch (error) {
    if (error.response) {
      if (error.response === 401) {
        throw new UnauthorizedError("Unauthorized");
      }
    } else {
      throw new GLobalError(`Error GLobal ${error}`);
    }
  }
};

export default apiClient;
