import express, { Router, Request, Response, NextFunction } from "express";
import { User } from "../model/";
import jwt from "jsonwebtoken";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  let jwter = null;
  const data = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.username }],
    password: req.body.password,
  })
    .select({ _id: 1, name: 1,profile:1 })
    .lean();
  if (data) {
    jwter = jwt.sign(
      { userId: data._id, name: data.name,profile: data.profile },
      process.env.SECRET || "shadow"
    );
  }
  console.log(data);
  res.json({ jwt: jwter });
});

export default router;
