// next.config.js
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const { PHASE_DEVELOPMENT_SERVER } = require("next-server/constants");

const nextConfiguration = {
  //target: "serverless",
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(__dirname, "pages"),
      "@components": path.resolve(__dirname, "components"),
      "@hoc": path.resolve(__dirname, "hoc"),
      "@lib": path.resolve(__dirname, "lib")
    };
    return config;
  },
  [PHASE_DEVELOPMENT_SERVER]: {
    publicRuntimeConfig: {}
  }
};

module.exports = withPlugins([withCss, withSass], nextConfiguration);
