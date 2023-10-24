"use client";

import { ServerResponse } from "@/types/auth";
import axios from "../axios"
import { signIn, useSession } from "next-auth/react";
import { AxiosResponse } from "axios";
import { error } from "console";

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        axios.post("/v1/refresh", {
            refreshToken: session?.user.refreshToken,
        }).then((resp: AxiosResponse) => {
            if (session) session.user.accessToken = resp.data.success?.data?.accessToken;
        }).catch((error) => {
            // Clear the token
            signIn();
        })
    };
    return refreshToken;
};