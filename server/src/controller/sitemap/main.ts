import express, { Router, Request, Response, NextFunction } from "express";
import { Category, WallpaperDesktop } from "../../model";
import mongoose from "mongoose";
var fs = require("fs");
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const wallpaperCount = await WallpaperDesktop.countDocuments({});
  const categoryCount = await Category.countDocuments({});
  const body = {
    wallpaper: Math.ceil(wallpaperCount / 10000),
    category: Math.ceil(categoryCount / 10000),
  };
  console.log(wallpaperCount);
  res.json(body);
});

export default router;
