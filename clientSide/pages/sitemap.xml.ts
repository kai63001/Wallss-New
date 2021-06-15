import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res, req }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc> https://${req.headers.host}/sitemap.xml?page=1</loc>
  </sitemap>
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
