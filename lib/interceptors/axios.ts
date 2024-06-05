import axios from 'axios';

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://api.ruleeasy.in";
export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});