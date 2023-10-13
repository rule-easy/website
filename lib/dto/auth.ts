export interface AuthResponse {
    code: number;
    error?: string;
    data?: {
        jwt: string
    }
}

export interface SignupRequest {
    email: string;
    company: string;
    name: string;
    password: string;
}

export interface SigninRequest {
    email: string;
    password: string;
}
