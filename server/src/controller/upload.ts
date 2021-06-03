import express, { Router, Request, Response, NextFunction } from "express";
import { Category, WallpaperDesktop } from "../model/";
import { checkAuth } from "../lib/auth";
import { uploadDrive } from "../upload/upload.middleware.js";
import { v4 as uuidv4 } from "uuid";
// import mongoose from "mongoose";

const router: Router = express.Router();

router.get("/category", async (req: Request, res: Response) => {
  // console.log(req.headers.authorization)
  const { name } = req.query;
  if (!checkAuth(req.headers ? req.headers.authorization : undefined))
    return res.json({ status: "auth" });
  if (!name) return res.json({ status: "name request" });
  const finded = await Category.find({ name: { $regex: name, $options: "i" } })
    .select({ name: 1, _id: 0 })
    .lean();
  res.send(finded);
});

router.post("/category", async (req: Request, res: Response) => {
  const { name } = req.body;
  const findCat = await Category.findOne({
    name: { $regex: "^" + name + "$", $options: "i" },
  }).lean();
  // console.log(await findCat)
  if (findCat) {
    //   console.log('return findCat')
    return res.send(findCat);
  }
  const addCat = await Category.create({ name });

  res.json({ name: name, __v: 0 });
});

router.post("/", async (req: Request, res: Response) => {
  let auth:any = await checkAuth(
    req.headers ? req.headers.authorization : undefined
  );
  if (!auth) return res.json({ status: "auth" });
  const { title, image, author,authorLink, type, categories, tags, resolution } = req.body;
  const date = new Date();
  const random = uuidv4();
  const upload = await uploadDrive(image, random.toString());
  const wallpaperDeskData = await WallpaperDesktop.create({
    name: title,
    tags: tags,
    categoly: categories,
    author,
    authorLink,
    resolution,
    date,
    image: `https://drive.google.com/thumbnail?id=${upload}&sz=w0-h0`,
    user: auth.userId,
    uuid: random,
  });
// console.log(auth.name)      
  res.send(wallpaperDeskData);
});

export default router;
