import { NextApiRequest, NextApiResponse } from "next";
const stream = require("stream");

var mime: any = {
  html: "text/html",
  txt: "text/plain",
  css: "text/css",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  js: "application/javascript",
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.query.id?.toString();
  if (!url) return res.send("id request");
  //   decode str rot13 to base64
  let newUrl = url.replace(/[a-zA-Z]/g, function (c: any) {
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    );
  });
  //   console.log('rot',newUrl)
  //   decode base64
  newUrl = Buffer.from(newUrl, "base64").toString();
  //   console.log('base64',newUrl)

  const type = mime[newUrl.slice(-3)];
  //   console.log(newUrl.slice(-3));
  const data = await fetch(newUrl);
  const r = await data.body;
  const ps = new stream.PassThrough();
  stream.pipeline(r, ps, (err: any) => {
    if (err) {
      console.log(err); // No such file or any other kind of error
      return res.send(400);
    }
  });
  res.setHeader("Content-Type", type);
  ps.pipe(res);
};

export default handler;
