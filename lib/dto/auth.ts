export interface AuthResponse {
    success?: {
        code: number
        data?: any
    }
    error?: {
        code: number
        msg?: string
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
