const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

let config = process.env.NODE_EN == "development" ? devConfig : proConfig;

module.exports = webpackMerge.merge(baseConfig, config);
