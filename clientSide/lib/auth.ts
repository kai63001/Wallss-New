import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || 'shadow';

export const isAuth =  (token:string) => {
    if(token) {
        return jwt.verify(token, SECRET);
    }
    return null
};
