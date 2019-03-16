require("dotenv").config();
const webpack = require("webpack");
module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_ENV: JSON.stringify(process.env.REACT_APP_ENV)
      }
    });
    config.devtool = "source-map";
    for (const options of config.plugins) {
      if (options["constructor"]["name"] === "UglifyJsPlugin") {
        options.options.sourceMap = true;
        break;
      }
    }
    return config;
  }
};
