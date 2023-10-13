
import { SignupRequest, AuthResponse, SigninRequest } from "../dto/auth";
import axios from "axios";
import { AxiosRequestConfig } from "axios";
import { Config, GetEnvConfig } from "../config/config";
import { saveToStorage } from "../localstorage/localstorage";


export async function SignUp(signUpReq: SignupRequest) {
    const env: Config = await GetEnvConfig()
    try {
        console.log("Trying signup now with info - ", signUpReq);
        var axiosRequestConfig: AxiosRequestConfig = {
            baseURL: env.backendHost,
            headers: { 'Content-Type': 'application/json' },
        }
        const auth: AuthResponse = (await axios.post("v1/signup", signUpReq, axiosRequestConfig)).data;
        const jwt = auth.data?.jwt || ""
        saveToStorage("access_token", jwt)
        return auth
    } catch (error) {
        console.error(error)
        const auth: AuthResponse = { code: 500 }
        return auth
    }
}

export async function SignIn(signinReq: SigninRequest) {
    const env: Config = await GetEnvConfig()
    try {
        console.log("Trying signup now with info - ", signinReq);
        var axiosRequestConfig: AxiosRequestConfig = {
            baseURL: env.backendHost,
            headers: { 'Content-Type': 'application/json' },
        }
        const auth: AuthResponse = (await axios.post("v1/login", signinReq, axiosRequestConfig)).data;
        const jwt = auth.data?.jwt || ""
        saveToStorage("access_token", jwt)
        return auth
    } catch (error) {
        console.error(error)
        const auth: AuthResponse = { code: 500 }
        return auth
    }
}