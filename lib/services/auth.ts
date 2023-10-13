
import { SignupRequest, AuthResponse, SigninRequest } from "../dto/auth";
import axios from "../interceptors/axios";
import { AxiosRequestConfig } from "axios";
import { Config, GetEnvConfig } from "../config/config";
import { saveToStorage } from "../localstorage/localstorage";


export async function SignUp(signUpReq: SignupRequest) {
    const env: Config = await GetEnvConfig()
    try {
        console.log("Trying signup now with info - ", signUpReq);
        const auth: AuthResponse = (await axios.post("v1/signup", signUpReq)).data;
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
        const auth: AuthResponse = (await axios.post("v1/login", signinReq)).data;
        const jwt = auth.data?.jwt || ""
        saveToStorage("access_token", jwt)
        return auth
    } catch (error) {
        console.error(error)
        const auth: AuthResponse = { code: 500 }
        return auth
    }
}