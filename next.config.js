require("dotenv").config();
const webpack = require("webpack");
module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      })
    );
    return config;
  },
  publicRuntimeConfig: () => {
    return { PROCESS: JSON.stringify(process) };
  }
};
