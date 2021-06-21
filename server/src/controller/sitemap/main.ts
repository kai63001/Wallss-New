import express, { Router, Request, Response, NextFunction } from "express";
import { Category } from "../../model";
import mongoose from "mongoose";
var fs = require("fs");
const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  
  res.send("fuck");
});

export default router;
