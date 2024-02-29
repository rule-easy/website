import axios from 'axios';

import { Config, GetEnvConfig } from '../config/config';

const BASE_URL = "http://api.ruleeasy.in";
export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});