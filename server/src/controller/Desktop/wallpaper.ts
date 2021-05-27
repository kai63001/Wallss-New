import express, { Router, Request, Response, NextFunction } from "express";
import { WallpaperDesktop } from "../../model";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const wall = await WallpaperDesktop.find({}).lean();
  return res.send(wall);
});

export default router;
