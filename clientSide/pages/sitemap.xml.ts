import axios from "axios";
import React from "react";

const Sitemap = () => {};

export const getServerSideProps = async ({ res, req }) => {
  const data = await (await axios.get(`${process.env.HOST}/sitemap`)).data;
  // console.log(data);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...Array(data?.wallpaper)].map(
  (data, i) =>
    `<sitemap>
<loc>https://${req.headers.host}/wallpaper_sitemap.xml?page=${i + 1}</loc>
</sitemap>`
)}
${[...Array(data?.category)].map(
  (data, i) =>
    `<sitemap>
<loc>https://${req.headers.host}/category_sitemap.xml?page=${i + 1}</loc>
</sitemap>`
)}
  
</sitemapindex>
`.trim();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
