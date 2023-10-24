import getConfig from 'next/config';

export interface Config {
    backendHost: string;
}

export async function GetEnvConfig() {
    // const { publicRuntimeConfig } = getConfig();
    // const backendHost = publicRuntimeConfig.backendHost || 'http://localhost:8080';
    var config: Config = { backendHost: 'http://localhost:8080' }
    return config;
}