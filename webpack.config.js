module.exports = {
  devServer: {
    hot: true,
  },
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  mode: "development",
  // other configurations
  module: {
    loaders: [{ test: /\.css$/, loader: "ignore-loader" }],
  },
};
