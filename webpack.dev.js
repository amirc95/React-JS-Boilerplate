const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  devServer: {
    contentBase: `${__dirname}/public/`,
    port: 8080,
    inline: true,
    open: true,
  },
});
