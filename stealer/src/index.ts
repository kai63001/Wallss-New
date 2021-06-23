import Steal from "./lib/steal";
const Stealer = new Steal();
var myArgs = process.argv.slice(2);
import db from "./db/connect";
import colors from "colors";
import WallpapersDesktop from './model/Desktop/wallpaper'

db("mongodb://localhost:27017/wallss");

const main = async () => {
  if (myArgs.length < 3) {
    console.log(colors.bold.red('ts-node ./src/index.ts ["wallpaper[all]","mobile[all]","categoryall"] start end'));
    return process.exit(1);
  } else {
    if (myArgs[0] == "wallpaper") {
      const data = await Stealer.stealWallpaperSetUp(myArgs[1],myArgs[2])
      const insert = await WallpapersDesktop.create(data)
      if(insert) console.log(colors.bgMagenta('All Done Wallpaper'))
    } else if (myArgs[0] == "mobile") {
      const data = await Stealer.stealMobileSetUp(myArgs[1],myArgs[2])
      // console.log(data)
      const insert = await WallpapersDesktop.create(data)
      if(insert) console.log(colors.bgMagenta('All Done Mobile'))
    } else if(myArgs[0] == "wallpaperall"){
      const data = await Stealer.stealWallpaperSetUpAll(myArgs[1],myArgs[2])
      if(data) console.log(colors.bgMagenta('All Done Wallpaper All'))
    }else if(myArgs[0] == "mobileall"){
      const data = await Stealer.stealMobileSetUpAll(myArgs[1],myArgs[2])
      if(data) console.log(colors.bgMagenta('All Done Mobile All'))
    }else if(myArgs[0] == "categoryall"){
      const data = await Stealer.stealCategory(myArgs[1],myArgs[2])
      if(data) console.log(colors.bgMagenta('All Done Category All'))
    } else if(myArgs[0] == "lazydesktop"){
      const data = await Stealer.lazyDesktop()
    } else if(myArgs[0] == "lazymobile"){
      const data = await Stealer.lazyMobile()
    }else {
      console.log(colors.bold.red("only wallpaper and mobile"));
      return process.exit(1);
    }
  }
};

main();
