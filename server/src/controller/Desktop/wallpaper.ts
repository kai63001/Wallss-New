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
  let type = req.query.type || 0;
  type = parseInt(type.toString());
  const wall = await WallpaperDesktop.find({type})
    .select({ image: 1, name: 1, type: 1 })
    .sort({ _id: -1 })
    .limit(12)
    .lean();
  return res.send(wall);
});

router.get("/all", async (req: Request, res: Response) => {
  const { page } = req.query;
  let type = req.query.type || 0;
  type = parseInt(type.toString());
  // if (!name) return res.send("name request query");
  //   console.log(name);
  const pageNow = page || 1;

  const myCustomLabels = {
    totalDocs: "itemCount",
    docs: "itemsList",
    limit: "perPage",
    page: "currentPage",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pageCount",
    pagingCounter: "slNo",
    meta: "paginator",
  };

  const options: any = {
    page: pageNow,
    limit: 21,
    sort: { _id: -1 },
    customLabels: myCustomLabels,
    lean: true,
  };
  const data = await WallpaperDesktop.paginate(
    { type: type },
    options,
    async function (err: any, result: any) {
      // console.log(result);
      return result;
    }
  );
  res.send(data);
});

router.get("/wall/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(mongoose.Types.ObjectId.isValid(id));
  if (!mongoose.Types.ObjectId.isValid(id)) return res.json({});
  const wall: any = await WallpaperDesktop.findOne({ _id: id })
    .populate("user", "name profile")
    .lean();
  return res.send(wall);
});

router.post("/more/random", async (req: Request, res: Response) => {
  const { category } = req.body;
  const data = [...category];
  let type = req.query.type || 0;
  type = parseInt(type.toString());
  // const wall:any = await WallpaperDesktop.find(
  //   { categoly: {$in: data} }
  // ).lean();
  let wall: any = [];
  wall = await WallpaperDesktop.aggregate([
    {
      $match: { $and: [{ categoly: { $in: data } }, { type: { $eq: type } }] },
    },
    { $sample: { size: 6 } },
  ]);
  return res.send(wall);
});

router.get("/more/by/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  let type = req.query.type || 0;
  type = parseInt(type.toString());
  // const wall:any = await WallpaperDesktop.find(
  //   { categoly: {$in: data} }
  // ).lean();
  const wall: any = await WallpaperDesktop.aggregate([
    { $match: { $and: [{ user: ObjectId(id) }, { type: { $eq: type } }] } },
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
  const url =
    req.query.url?.toString() ||
    "https://getwallpapers.com/wallpaper/full/1/c/e/6459.jpg";
  const type = mime[url.slice(-3)];
  console.log(url.slice(-3));
  const data = await fetch(url);
  const r = await data.body;
  const ps = new stream.PassThrough();
  stream.pipeline(r, ps, (err: any) => {
    if (err) {
      console.log(err); // No such file or any other kind of error
      return res.sendStatus(400);
    }
  });
  res.setHeader("Content-Type", type);
  ps.pipe(res);
});

export default router;
