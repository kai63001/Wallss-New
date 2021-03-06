import React from "react";
export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
    res.write(
      `User-agent: *
Disallow: /api
Disallow: /search

${sitemap(req)}`.trim()
    );
    res.end();
  }
}

function sitemap(req) {
  let sitemap = `Sitemap: https://${req.headers.host}/sitemap.xml`;
  return sitemap.trim();
}
