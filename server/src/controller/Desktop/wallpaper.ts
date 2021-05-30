import express, { Router, Request, Response, NextFunction } from "express";
import { WallpaperDesktop } from "../../model";

const router: Router = express.Router();

router.get("/index", async (req: Request, res: Response) => {
  const wall = await WallpaperDesktop.find({}).select({image:1,name:1}).sort({_id: 1}).limit(12).lean();
  return res.send(wall);
});

export default router;
