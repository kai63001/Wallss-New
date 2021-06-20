import express, { Router, Request, Response, NextFunction } from "express";
import { Category } from "../../model";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
const fetch = require("node-fetch");
var fs = require("fs");
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const { page } = req.query;
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
    limit: 10000,
    sort: { _id: -1 },
    customLabels: myCustomLabels,
    lean: true,
  };
  const data = await Category.paginate(
    {},
    options,
    async function (err: any, result: any) {
      // console.log(result);
      return result;
    }
  );
  res.send(data);
});

export default router;
