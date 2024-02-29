import getConfig from 'next/config';

export interface Config {
    backendHost: string;
}

export async function GetEnvConfig() {
    // var config: Config = { backendHost: 'http://localhost:8080' }
    var config: Config = { backendHost: 'http://api.ruleeasy.in' }
    return config;
}