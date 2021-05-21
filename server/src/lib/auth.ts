import jwt from "jsonwebtoken";


export const checkAuth = (token: string | undefined) => {
    if(token) {
        try {
            return jwt.verify(token, process.env.SECRET || "shadow");
        } catch (error) {
            return null
        }
    }
    return null
}