export type ACCOUNT_TYPE = "" | "admin" | "manager" | "sales-rep" | "owner" 

export type APISTATUS = "fulfilled" | "pending" | "rejected"

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