import express, { Router, Request, Response, NextFunction } from "express";
import { WallpaperDesktop } from "../../model";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const fetch = require("node-fetch");
var fs = require("fs");
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { name, page } = req.query;
  if (!name) return res.send("name request query");
  let type = req.query.type || 0;
  type = parseInt(type.toString());
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
    limit: 24,
    sort: { _id: -1 },
    customLabels: myCustomLabels,
    lean: true,
  };
  const data = await WallpaperDesktop.paginate(
    {$and: [{ tags: { $in: name } },{type: {$eq: type}}]},
    options,
    async function (err: any, result: any) {
      // console.log(result);
      return result;
    }
  );
  res.send(data);
});

export default router;
