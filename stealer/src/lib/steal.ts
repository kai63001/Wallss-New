import colors from "colors";
const cheerio = require("cheerio");
import axios from "axios";
import WallpapersDesktop from "../model/Desktop/wallpaper";
import Category from "../model/Category";
import fs from "fs";
import { setInterval } from "timers";

class Steal {
  public userID = [
    "60a43e07a0af5b1e041d971f",
    "60d1eedf93bc9a2684682c49",
    "60d1eeed93bc9a2684682c4a",
  ];
  constructor() {}

  private updateLazy(now: number, type: string) {
    let rawdata: string = fs.readFileSync("./data/lazy.json").toString();
    let wall = JSON.parse(rawdata);
    wall[type == "0" ? "wallpaper" : "mobile"] = now;
    const data = JSON.stringify(wall);
    fs.writeFileSync("./data/lazy.json", data);
    // console.log(wall)
  }

  public async stealWallpaperSetUp(start: string, end: string) {
    const startN = parseInt(start);
    const endN = parseInt(end);
    return this.letStealWallpaper(startN, endN);
  }

  private letStealWallpaper(start: number, end: number) {
    let dataWallpaper: any = [];
    return new Promise(async (resolve, reject) => {
      for (let i = start; i <= end; i++) {
        const data = await axios
          .get(`https://wall.alphacoders.com/big.php?i=${i}`)
          .catch(() => {});
        const raw = await data?.data;
        // console.log(data.request.res.responseUrl)
        const $ = cheerio.load(raw);
        if (
          $("title").text() ==
            "Wallpaper Abyss - HD Wallpapers, Background Images" ||
          data?.request?.res?.responseUrl !=
            `https://wall.alphacoders.com/big.php?i=${i}`
        ) {
          console.log(colors.bold.red(`id: ${i} : not found`));
        } else {
          let listWallpaper: any = {};
          // title
          listWallpaper["name"] =
            $("title")
              .text()
              ?.split("|")[0]
              ?.replace(" HD Wallpaper", "")
              ?.trim() || "title not found";
          // resolution
          listWallpaper["resolution"] =
            $("title")
              .text()
              ?.split("|")[2]
              ?.replace(" - Wallpaper Abyss ", "")
              ?.replace("x", "X")
              ?.trim() || "1920X1080";
          // tags
          const tags: any[] = [];
          $(".tag-element").each((i: any, elem: any) => {
            tags[i] = $(elem).children().text();
          });
          listWallpaper["tags"] = tags;
          // category
          const category: any[] = [];
          const $category = cheerio.load(
            $("#after_wallpaper_container").html()
          );
          $category("a").each((i: any, elem: any) => {
            category[i] = $(elem).children().text();
          });
          listWallpaper["categoly"] = category;

          // image
          listWallpaper["image"] =
            $('meta[name="twitter:image:src"]').attr("content") ||
            "image not found";

          // author
          listWallpaper["author"] = "";
          listWallpaper["authorLink"] = "";
          if ($("#author_container").text()) {
            listWallpaper["author"] = $("#author_container")
              .text()
              .replace(/Author:/g, "")
              .trim();
            const link = $("#author_container").children().attr("href");
            // console.log($('#author_container').children().attr('href'))
            if (link.indexOf("unregistered") >= 0) {
              // console.log("next axios");
              const auhorData = await (
                await axios.get(`https://wall.alphacoders.com/${link}`)
              ).data;
              const $author = cheerio.load(auhorData);
              // console.log();
              listWallpaper["authorLink"] =
                $author(".alert-link").attr("href") || "/";
            } else {
              listWallpaper[
                "authorLink"
              ] = `https://wall.alphacoders.com/${link}`;
            }
          }
          listWallpaper["type"] = 0;
          listWallpaper["date"] = new Date();
          listWallpaper["user"] =
            this.userID[Math.floor(Math.random() * this.userID.length)];
          // console.log(listWallpaper);
          console.log(colors.bold.blue(`${i} success`));
          dataWallpaper.push(listWallpaper);
          this.updateLazy(i, listWallpaper["type"]);
        }

        if (i == end) resolve(dataWallpaper);
      }
    });
  }

  public async stealWallpaperSetUpAll(start: string, end: string) {
    const startN = parseInt(start);
    const endN = parseInt(end);
    return this.letStealWallpaperAll(startN, endN);
  }

  private letStealWallpaperAll(start: number, end: number) {
    let dataWallpaper: any = ["123"];
    return new Promise(async (resolve, reject) => {
      for (let i = start; i <= end; i++) {
        let cont = true;
        const data = await axios
          .get(`https://wall.alphacoders.com/big.php?i=${i}`)
          .catch(() => {
            cont = false;
          });
        if (cont) {
          const raw = await data?.data;
          // console.log(data.request.res.responseUrl)
          const $ = cheerio.load(raw);
          if (
            $("title").text() ==
              "Wallpaper Abyss - HD Wallpapers, Background Images" ||
            data?.request?.res?.responseUrl !=
              `https://wall.alphacoders.com/big.php?i=${i}`
          ) {
            console.log(colors.bold.red(`id: ${i} : not found`));
          } else {
            let listWallpaper: any = {};
            // title
            listWallpaper["name"] =
              $("title")
                .text()
                ?.split("|")[0]
                ?.replace(" HD Wallpaper", "")
                ?.trim() || "title not found";
            // resolution
            listWallpaper["resolution"] =
              $("title")
                .text()
                ?.split("|")[2]
                ?.replace(" - Wallpaper Abyss ", "")
                ?.replace("x", "X")
                ?.trim() || "1920X1080";
            // tags
            const tags: any[] = [];
            $(".tag-element").each((i: any, elem: any) => {
              tags[i] = $(elem).children().text();
            });
            listWallpaper["tags"] = tags;
            // category
            const category: any[] = [];
            const $category = cheerio.load(
              $("#after_wallpaper_container").html()
            );
            $category("a").each((i: any, elem: any) => {
              category[i] = $(elem).children().text();
            });
            listWallpaper["categoly"] = category;

            // image
            listWallpaper["image"] =
              $('meta[name="twitter:image:src"]').attr("content") ||
              "image not found";

            // author
            listWallpaper["author"] = "";
            listWallpaper["authorLink"] = "";
            if ($("#author_container").text()) {
              listWallpaper["author"] = $("#author_container")
                .text()
                .replace(/Author:/g, "")
                .trim();
              const link = $("#author_container").children().attr("href");
              // console.log($('#author_container').children().attr('href'))
              if (link.indexOf("unregistered") >= 0) {
                // console.log("next axios");
                const auhorData = await (
                  await axios.get(`https://wall.alphacoders.com/${link}`)
                ).data;
                const $author = cheerio.load(auhorData);
                // console.log();
                listWallpaper["authorLink"] =
                  $author(".alert-link").attr("href") || "/";
              } else {
                listWallpaper[
                  "authorLink"
                ] = `https://wall.alphacoders.com/${link}`;
              }
            }
            listWallpaper["type"] = 0;
            listWallpaper["date"] = new Date();
            listWallpaper["user"] =
              this.userID[Math.floor(Math.random() * this.userID.length)];
            // console.log(listWallpaper);
            console.log(colors.bold.blue(`${i} success`));
            // insert
            const insert = await WallpapersDesktop.create(listWallpaper);
            this.updateLazy(i, listWallpaper["type"]);
            if (insert) console.log(colors.bgMagenta(`insert ${i} success`));
          }
        }

        if (i == end) resolve(dataWallpaper);
      }
    });
  }

  public async stealMobileSetUp(start: string, end: string) {
    const startN = parseInt(start);
    const endN = parseInt(end);
    return this.letStealMobile(startN, endN);
  }

  private letStealMobile(start: number, end: number) {
    let dataWallpaper: any = [];
    return new Promise(async (resolve, reject) => {
      for (let i = start; i <= end; i++) {
        const data = await axios.get(
          `https://mobile.alphacoders.com/wallpapers/view/${i}`
        );
        const raw = await data.data;
        // console.log(raw)
        const $ = cheerio.load(raw);
        if (
          $("title").text() ==
            "Wallpaper Abyss - HD Wallpapers, Background Images" ||
          data?.request?.res?.responseUrl !=
            `https://mobile.alphacoders.com/wallpapers/view/${i}`
        ) {
          console.log(colors.bold.red(`id: ${i} : not found`));
        } else {
          let listWallpaper: any = {};
          // title
          listWallpaper["name"] =
            $("title")
              .text()
              ?.split("(")[0]
              ?.replace(" HD Wallpaper", "")
              ?.replace("/", " ")
              ?.trim() || "title not found";
          // resolution
          listWallpaper["resolution"] = $("title")
            .text()
            ?.split("(")[1]
            ?.slice(0, $("title").text()?.split("(")[1]?.indexOf(")"))
            ?.trim();
          // tags
          const tags: any[] = [];
          $(".well").each((i: any, elem: any) => {
            tags[i] = $(elem).children().text();
          });
          listWallpaper["tags"] = tags;
          // category
          listWallpaper["categoly"] =
            $("title")
              .text()
              ?.split("(")[0]
              ?.replace(" HD Wallpaper", "")
              ?.trim()
              .split("/") || "title not found";

          // image
          listWallpaper["image"] =
            $('meta[name="twitter:image:src"]').attr("content") ||
            "image not found";

          // author
          listWallpaper["author"] = $("#author_container")
            .children()
            .text()
            .trim();
          listWallpaper["authorLink"] = "";

          listWallpaper["type"] = 1;
          listWallpaper["date"] = new Date();
          listWallpaper["user"] =
            this.userID[Math.floor(Math.random() * this.userID.length)];
          // console.log(listWallpaper);
          console.log(colors.bold.blue(`${i} success`));
          this.updateLazy(i, listWallpaper["type"]);
          dataWallpaper.push(listWallpaper);
        }

        if (i == end) resolve(dataWallpaper);
      }
    });
  }

  public async stealMobileSetUpAll(start: string, end: string) {
    const startN = parseInt(start);
    const endN = parseInt(end);
    return this.letStealMobileAll(startN, endN);
  }

  private letStealMobileAll(start: number, end: number) {
    let dataWallpaper: any = ["123"];
    return new Promise(async (resolve, reject) => {
      for (let i = start; i <= end; i++) {
        let count = true;
        const data = await axios
          .get(`https://mobile.alphacoders.com/wallpapers/view/${i}`)
          .catch(() => {
            count = false;
          });
        if (count) {
          const raw = await data?.data;
          // console.log(raw)
          const $ = cheerio.load(raw);
          if (
            $("title").text() ==
              "Wallpaper Abyss - HD Wallpapers, Background Images" ||
            data?.request?.res?.responseUrl !=
              `https://mobile.alphacoders.com/wallpapers/view/${i}`
          ) {
            console.log(colors.bold.red(`id: ${i} : not found`));
          } else {
            let listWallpaper: any = {};
            // title
            listWallpaper["name"] =
              $("title")
                .text()
                ?.split("(")[0]
                ?.replace(" HD Wallpaper", "")
                ?.replace("/", " ")
                ?.trim() || "title not found";
            // resolution
            listWallpaper["resolution"] = $("title")
              .text()
              ?.split("(")[1]
              ?.slice(0, $("title").text()?.split("(")[1]?.indexOf(")"))
              ?.trim();
            // tags
            const tags: any[] = [];
            $(".well").each((i: any, elem: any) => {
              tags[i] = $(elem).children().text();
            });
            listWallpaper["tags"] = tags;
            // category
            listWallpaper["categoly"] =
              $("title")
                .text()
                ?.split("(")[0]
                ?.replace(" HD Wallpaper", "")
                ?.trim()
                .split("/") || "title not found";

            // image
            listWallpaper["image"] =
              $('meta[name="twitter:image:src"]').attr("content") ||
              "image not found";

            // author
            listWallpaper["author"] = $("#author_container")
              .children()
              .text()
              .trim();
            listWallpaper["authorLink"] = "";

            listWallpaper["type"] = 1;
            listWallpaper["date"] = new Date();
            listWallpaper["user"] =
              this.userID[Math.floor(Math.random() * this.userID.length)];
            // console.log(listWallpaper);
            console.log(colors.bold.blue(`${i} success`));
            const insert = await WallpapersDesktop.create(listWallpaper);
            this.updateLazy(i, listWallpaper["type"]);
            if (insert) console.log(colors.bgMagenta(`insert ${i} success`));
          }
        }

        if (i == end) resolve(dataWallpaper);
      }
    });
  }

  public async stealCategory(start: string, end: string) {
    const id = [
      1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 13, 16, 17, 18, 19, 20, 22, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 34, 33,
    ];
    const letter = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    return new Promise(async (resolve, reject) => {
      id?.map(async (idata, i) => {
        letter?.map(async (ldata, li) => {
          const data = await (
            await axios.get(
              `https://wall.alphacoders.com/sub_categories.php?id=${idata}&letter=${ldata}`
            )
          ).data;
          const $ = cheerio.load(data);
          let listCategory: any = [];
          $(".sub_category_container").each((i: any, elem: any) => {
            let catData: any = {};
            catData["name"] = $(elem)
              .children("a")
              .text()
              .replace(/\»/g, "")
              .trim();
            listCategory[i] = catData;
          });
          const insert = await Category.insertMany(listCategory);
          if (insert) console.log("success");
          console.log(listCategory);
        });
      });
    });
  }

  public async lazyDesktop() {
    let rawdata: string = fs.readFileSync("./data/lazy.json").toString();
    let wall = JSON.parse(rawdata);
    let count = wall["wallpaper"];
    setInterval(() => {
      // console.log(wall)
      count += 1;
      if (count < wall["wallpaperEnd"]) {
        this.letStealWallpaperAll(count, count);
        this.updateLazy(count + 1, "0");
      } else {
        console.log("fuck it end lazy desktop");
        return;
      }
    }, 60000);
  }

  public async lazyMobile() {
    let rawdata: string = fs.readFileSync("./data/lazy.json").toString();
    let wall = JSON.parse(rawdata);
    let count = wall["mobile"];
    setInterval(() => {
      // console.log(wall)
      count += 1;
      if (count < wall["mobileEnd"]) {
        this.stealMobileSetUpAll(count, count);
        this.updateLazy(count + 1, "1");
      } else {
        console.log("fuck it end lazy desktop");
        return;
      }
    }, 60000);
  }
}

export default Steal;
