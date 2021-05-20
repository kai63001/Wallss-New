import express, { Router, Request, Response,NextFunction } from 'express'
import {User} from '../model/'

const router:Router = express.Router()

router.get('/category',  async (req: Request, res: Response) => {
    res.json({status:"success"})
})

export default router