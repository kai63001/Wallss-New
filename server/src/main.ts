import express, { Application, Request, Response } from "express";
import colors from "colors";
import { Register } from "./controller";
import db from "./db/connect";
import cors from 'cors'

const app: Application = express();
db("mongodb://localhost:27017/wallss");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
  console.log("asd");
});

app.use("/register", Register);

app.listen(3001, () => {
  console.log(colors.green("SERVER START ON PORT :"), colors.bgGreen(" 3000 "));
});
