import express, { Router, Request, Response, NextFunction } from "express";
import { Report } from "../../model";
import mongoose from "mongoose";
const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const reported = await Report.create(req.body);
  res.send(reported);
});

export default router;
