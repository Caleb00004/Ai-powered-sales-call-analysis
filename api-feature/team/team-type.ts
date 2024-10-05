export interface teamType {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    roles: string[]
}

export interface createTeambodyType {
    email: string;
    firstName: string;
    lastName: string;
    position: string;
    roleIds: string[]
}