const path = require("path");

module.exports = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    HOST: process.env.DB_HOST,
  },
  images: {
    domains: [
      "images.alphacoders.com", 
      "images1.alphacoders.com",
      "images2.alphacoders.com",
      "images3.alphacoders.com",
      "images4.alphacoders.com",
      "images5.alphacoders.com",
      "images6.alphacoders.com",
      "images7.alphacoders.com",
      "images8.alphacoders.com",
      "images9.alphacoders.com",
      "mfiles.alphacoders.com",
      "avatarfiles.alphacoders.com",
      "drive.google.com",
      "lh3.googleusercontent.com"
    ],
  },
};