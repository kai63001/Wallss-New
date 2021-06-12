import express, { Router, Request, Response, NextFunction } from "express";
import { Report } from "../../model";
import mongoose from "mongoose";
const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  res.send('romeoo')
});

export default router;
