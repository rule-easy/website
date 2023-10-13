import axios from "axios";
import { Config, GetEnvConfig } from "../config/config";

// GetEnvConfig().then((config) => {
//     const env: Config = config
//     const BASE_URL = env.backendHost
// })
const BASE_URL = "http://localhost:8080";
export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});