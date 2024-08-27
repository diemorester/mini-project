type User = {
    id: number
    isOrganizer: boolean
    referral: string
    email: string
}

declare namespace Express {
    export interface Request {
        user?: User
    }
}