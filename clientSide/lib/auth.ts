import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || 'shadow';

export const isAuth =  (token:string) => {
    if(token) {
        try {
            return jwt.verify(token, SECRET);
        } catch (error) {
            return null
        }
    }
    return null
};
