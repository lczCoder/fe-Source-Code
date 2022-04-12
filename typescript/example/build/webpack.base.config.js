const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: { filename: "app.js" },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./template/index.html",
    }),
  ],
};
