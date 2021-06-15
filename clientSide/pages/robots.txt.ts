import React from "react";
export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
    res.write(
      `User-agent: *
Allow: /*
${sitemap(req)}
${sitemap_topic(req)}`.trim()
    );
    res.end();
  }
}

function sitemap(req) {
  let sitemap = ``;
  for (let i = 1; i <= 100; i++) {
    sitemap += `Sitemap: https://${req.headers.host}/api/sitemap.xml?page=${i}
`;
  }
  return sitemap.trim();
}

function sitemap_topic(req) {
  let sitemap = ``;
  for (let i = 1; i <= 100; i++) {
    sitemap += `Sitemap: https://${req.headers.host}/api/sitemap_topic.xml?page=${i}
`;
  }
  return sitemap.trim();
}
