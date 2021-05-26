import express, { Router, Request, Response,NextFunction } from 'express'
import {Category} from '../model/'
import { checkAuth } from '../lib/auth'

const router:Router = express.Router()

router.get('/category',  async (req: Request, res: Response) => {
    // console.log(req.headers.authorization)
    const {name} =req.query
    if(!checkAuth(req.headers ? req.headers.authorization : undefined)) return res.json({status:"auth"})
    if(!name)
        return res.json({status:"name request"})
    const finded = await Category.find({name: {$regex: name, $options: 'i'}}).select({name:1,_id:0}).lean();
    res.send(finded)
})

router.post('/category', async (req: Request, res: Response)=> {
    const { name } = req.body
    const findCat = await Category.findOne({name: {$regex: "^"+name+"$", $options: 'i'}}).lean()
    // console.log(await findCat)
    if(findCat){
    //   console.log('return findCat')
      return  res.send(findCat)
    }
    const addCat = await Category.create({ name });
  
    res.json({ name: name, __v: 0 });
})

router.post('/', async (req: Request, res: Response)=> {
    
})

export default router