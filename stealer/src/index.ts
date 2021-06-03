import Steal from "./lib/steal";
const Stealer = new Steal();
var myArgs = process.argv.slice(2);
import db from "./db/connect";
import colors from "colors";

db("mongodb://localhost:27017/wallss");

const main = async () => {
  if (myArgs.length < 3) {
    console.log(colors.bold.red('ts-node ./src/index.ts ["wallpaper","mobile"] start end'));
    return process.exit(1);
  } else {
    if (myArgs[0] == "wallpaper") {
      const data = await Stealer.stealWallpaperSetUp(myArgs[1],myArgs[2])
      console.log("data:",data)
    } else if (myArgs[0] == "mobile") {
    } else {
      console.log(colors.bold.red("only wallpaper and mobile"));
      return process.exit(1);
    }
  }
};

main();
