export interface Operator {
    id: string;
    name: string
    displayName: string;
}

export interface Rule {
    id: string
    order: number
    condition_data: string
    action_data: string
}

export interface CreateRuleRequest {
    name: string
    data: Rule[]
}