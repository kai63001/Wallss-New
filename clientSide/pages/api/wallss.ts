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
  if(!url) return res.send('id request')
  let newUrl = (new Buffer(url, "base64")).toString();

  const type = mime[newUrl.slice(-3)];
  console.log(newUrl.slice(-3));
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
