import express, { Application, Request, Response } from "express";
import colors from "colors";
import { Register,Login, Upload ,WallpaperDesktop } from "./controller";
import db from "./db/connect";
import cors from 'cors'

const app: Application = express();
db("mongodb://localhost:27017/wallss");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
    limit: "15mb",
  })
);

app.use(express.json({
  limit: "15mb",
}));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
  console.log("asd");
});

app.use("/register", Register);
app.use("/login", Login);
app.use("/upload", Upload);
app.use("/desktop", WallpaperDesktop);

app.listen(3001, () => {
  console.log(colors.green("SERVER START ON PORT :"), colors.bgGreen(" 3001 "));
});
