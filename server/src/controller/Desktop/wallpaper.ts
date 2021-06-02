import express, { Router, Request, Response, NextFunction } from "express";
import { WallpaperDesktop } from "../../model";

const router: Router = express.Router();

router.get("/index", async (req: Request, res: Response) => {
  const wall = await WallpaperDesktop.find({})
    .select({ image: 1, name: 1 })
    .sort({ _id: -1 })
    .limit(12)
    .lean();
  return res.send(wall);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const wall:any = await WallpaperDesktop.findOneAndUpdate(
    { _id: id },
    { $inc: { 'views': 1 } }
  )
    .populate("user", "name profile")
    .lean();
  return res.send(wall);
});

router.post("/more/random", async (req: Request, res: Response) => {
  const { category } = req.body;
  const data = [...category]
  const wall:any = await WallpaperDesktop.find(
    { categoly: {$in: data} }
  ).lean();
  return res.send(wall);
});

export default router;
