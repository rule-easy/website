export interface RuleDetails {
    name: string;
    total_events: number;
    total_violations: number;
}

export interface Operator {
    id: string;
    name: string
    displayName: string;
}

export interface Rule {
    id: string;
    order: number;
    operand1: string;
    operand2: string;
    operator: Operator;
    condition: Operator;
}
