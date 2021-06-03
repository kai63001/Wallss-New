import colors from "colors";
const cheerio = require("cheerio");
import axios from "axios";

class Steal {
  constructor() {}

  public async stealWallpaperSetUp(start: string, end: string) {
    const startN = parseInt(start);
    const endN = parseInt(end);
    return this.letStealWallpaper(startN, endN);
  }

  private letStealWallpaper(start: number, end: number) {
    let dataWallpaper: any = [];
    return new Promise(async (resolve, reject) => {
      for (let i = start; i <= end; i++) {
        const data = await axios.get(
          `https://wall.alphacoders.com/big.php?i=${i}`
        );
        const raw = await data.data;
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
          listWallpaper["title"] =
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
              ?.trim() || "resolution not found";
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
          listWallpaper["category"] = category;

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
              console.log("next axios");
              const auhorData = await (
                await axios.get(`https://wall.alphacoders.com/${link}`)
              ).data;
              const $author = cheerio.load(auhorData);
              // console.log();
              listWallpaper[
                "authorLink"
              ] = $author(".alert-link").attr("href") || '/';
            } else {
              listWallpaper[
                "authorLink"
              ] = `https://wall.alphacoders.com/${link}`;
            }
          }
          console.log(listWallpaper);
          dataWallpaper.push(listWallpaper);
        }

        if (i == end) resolve(dataWallpaper);
      }
    });
  }
}

export default Steal;
