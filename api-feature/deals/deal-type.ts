export type dealStage = "Prospecting" | "Negotiating" | "Closing" | "Abadoned" | "Hanging"

export interface dealsType {
    id: number
    client: string
    name: string
    status: string
    stage: {name: string}
    _count: {
        salesReps: string
    }
}

export interface dealStagesType {
    id: number;
    name: dealStage
}

export interface dealsDetailsType {
    id: number;
    name: string;
    client: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    stage: {
        name: dealStage
    }
    report?: string;
    overall_deal_health: number
}

export interface dealSalesrepPerformanceType {
    user: {
        firstName: string;
        lastName: string;
        id: number;
        companyUser: []
    }
    role: string;
    overall: number;
    skills: {}
}