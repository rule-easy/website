"use client";

import { ServerResponse } from "@/types/auth";
import axios from "../axios"
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res: ServerResponse = await axios.post("/v1/refresh", {
            refresh: session?.user.refreshToken,
        });

        if (session) session.user.accessToken = res.success?.data?.accessToken;
        else signIn();
    };
    return refreshToken;
};