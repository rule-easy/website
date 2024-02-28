export interface CreateStreamRequest {
    name: string
    schema: string
}

export interface UpdateStreamRequest {
    stream_id: string
    rule_id: string
    status: number
}