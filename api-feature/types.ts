export type ACCOUNT_TYPE = "" | "admin" | "manager" | "sales-rep" | "owner" 

export type APISTATUS = "fulfilled" | "pending" | "rejected" | "uninitialized"

export const TOKEN_NAME = "durket-token"

export interface AuthResponseType {
    success: boolean,
    data: {
        accessToken: string
    }
}

export interface ApiType {
  status: APISTATUS,
  error: unknown
}

export interface SkillsType {
    id: number,
    name: string,
    symbol: string
}

export interface successResponseType {
    success: boolean;
    message: string
}

type paginatedDataType = {
    totalDeal: number,
    totalPages: number,
    currentPage: number
}

export interface profileType {
    firstName: string;
    lastName: string;
    email: string;
    company: {
        id: number;
        name: string;
        position: string;
        role: ACCOUNT_TYPE
    }
}

export interface subscriptionType {
    id: number;
    name: string;
    price: number;
    billingCycle: string;
    maxAgents: number;
    maxTeam: number;
    features: string[];
    currency: {
        name: string;
        symbol: string;
    }
}

export interface insightsType {
    potentialRating: string;
    skills: {skill: string; grade: number; skillSymbol: string}[]
    pagination: paginatedDataType
}

export interface platformType {
    id: number;
    name: string;
    status: boolean;
    logo: string
}