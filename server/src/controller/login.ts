import express, { Router, Request, Response,NextFunction } from 'express'
import {User} from '../model/'

const router:Router = express.Router()

router.post('/',(req: Request, res: Response)=>{
    res.send('login') 
 })

export default router