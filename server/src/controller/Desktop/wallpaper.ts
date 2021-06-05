import express, { Router, Request, Response, NextFunction } from "express";
import { WallpaperDesktop } from "../../model";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const fetch = require("node-fetch");
var fs = require("fs");
const router: Router = express.Router();
var path = require("path");
const stream = require("stream");

router.get("/index", async (req: Request, res: Response) => {
  const wall = await WallpaperDesktop.find({})
    .select({ image: 1, name: 1 })
    .sort({ _id: -1 })
    .limit(12)
    .lean();
  return res.send(wall);
});

router.get("/wall/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const wall: any = await WallpaperDesktop.findOne(
    { _id: id }
  )
    .populate("user", "name profile")
    .lean();
  return res.send(wall);
});

router.post("/more/random", async (req: Request, res: Response) => {
  const { category } = req.body;
  const data = [...category];
  // const wall:any = await WallpaperDesktop.find(
  //   { categoly: {$in: data} }
  // ).lean();
  let wall: any = [];
  wall = await WallpaperDesktop.aggregate([
    { $match: { categoly: { $in: data } } },
    { $sample: { size: 6 } },
  ]);
  return res.send(wall);
});

router.get("/more/by/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  // const wall:any = await WallpaperDesktop.find(
  //   { categoly: {$in: data} }
  // ).lean();
  const wall: any = await WallpaperDesktop.aggregate([
    { $match: { user: ObjectId(id) } },
    { $sample: { size: 3 } },
  ]);
  return res.send(wall);
});

var mime: any = {
  html: "text/html",
  txt: "text/plain",
  css: "text/css",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  js: "application/javascript",
};

router.get("/test/test", async (req: Request, res: Response) => {
  const url = req.query.url?.toString() || "https://getwallpapers.com/wallpaper/full/1/c/e/6459.jpg"
  const type = mime[url.slice(-3)]
  console.log(url.slice(-3))
  const data = await fetch(
    url
  );
  const r = await data.body;
  const ps = new stream.PassThrough();
  stream.pipeline(
    r,
    ps,
    (err: any) => {
      if (err) {
        console.log(err); // No such file or any other kind of error
        return res.sendStatus(400);
      }
    }
  );
  res.setHeader('Content-Type', type);
  ps.pipe(res);
});

export default router;
