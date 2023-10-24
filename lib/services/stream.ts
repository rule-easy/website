import { ServerResponse } from "../../types/auth";
import { Config, GetEnvConfig } from "../config/config";
import { CreateStreamRequest } from "../../types/stream";
import useAxiosAuth from "../interceptors/hooks/useAxiosAuth";


export async function CreateStream(createStreamReq: CreateStreamRequest) {
    const env: Config = await GetEnvConfig()
    const axiosAuth = useAxiosAuth()
    try {
        console.log("Creating stream - ", createStreamReq);
        const data: ServerResponse = (await axiosAuth.put("/v1/stream", createStreamReq)).data;
        return data
    } catch (error: any) {
        if (error.response.data) {
            return error.response.data
        } else {
            return { error: { code: -1, msg: "Internal error" } }
        }
    }
}