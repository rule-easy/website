
import { ServerResponse, SigninRequest, SignupRequest } from '../../types/auth';
import axios from '../interceptors/axios';

export async function SignUp(signUpReq: SignupRequest) {
    try {
        console.log("Trying signup now with info - ", signUpReq);
        const auth: ServerResponse = (await axios.post("v1/signup", signUpReq)).data;
        return auth
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function SignIn(signinReq: SigninRequest) {
    console.log("Trying login with info - ", signinReq);
    const auth: ServerResponse = (await axios.post("v1/login", signinReq)).data;
    return auth
}