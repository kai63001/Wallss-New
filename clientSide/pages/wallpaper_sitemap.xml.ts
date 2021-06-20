import axios from "axios";
import React from "react";

const Sitemap = () => {};

export const getServerSideProps = async ({ res, req }) => {
  const data = await (
    await axios.get("http://localhost:3001/sitemap/wallpaper")
  ).data;
  // console.log(data);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"> 
  ${data?.itemsList
    ?.map(
      (data, i) => `<url>
    <loc>https://${req.headers.host}/${
        data?.type == 1 ? "mobile" : "desktop"
      }/wall/${data?._id}</loc>
  </url>
  `
    )
    .join("")}
</urlset>
`.trim();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
