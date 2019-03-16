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
  //   publicRuntimeConfig: () => {
  //     return { PROCESS: JSON.stringify(process) };
  //   }
  publicRuntimeConfig: {
    PROCESS: JSON.stringify(process.env.REACT_APP_ENV)
  },
  exportPathMap: function() {
    return {
      "/": { page: "/hello" },
      "/hello": { page: "/hello" }
    };
  }
};
