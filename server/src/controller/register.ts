import express, { Router, Request, Response,NextFunction } from 'express'
import {User} from '../model/'

const router:Router = express.Router()

router.get('/',(req: Request, res: Response)=>{
   res.send('register') 
})

const checkValidate = (req: Request, res: Response, next:NextFunction) => {
    if(!req.body.username) return res.json({status:"username require"})
    if(!req.body.name) return res.json({status:"name require"})
    if(!req.body.email) return res.json({status:"email require"})
    if(!req.body.password) return res.json({status:"password require"})
    next()
}

const checkUser = async (req: Request, res: Response, next:NextFunction) => {
    const data = await User.findOne({username:req.body.username}).select({_id: 1}).lean().count() //check if have username + opti
    if(data)
        return res.json({status:"username already exit!!"})
    next()
}

router.post('/', [checkValidate ,checkUser] , async (req: Request, res: Response) => {
    await User.create(req.body)
    res.json({status:"success"})
})

export default router