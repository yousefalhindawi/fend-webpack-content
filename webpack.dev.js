const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    libraryTarget: "var",
    library: "Client",
  },
  devtool: "source-map",
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //   {
      //     test: /\.less$/,
      //     use: ["style-loader", "css-loader", "less-loader"],
      //   },
      //   {
      //     test: /\.html$/,
      //     use: "html-loader",
      //   },
      //   {
      //     test: /\.xml$/,
      //     use: "xml-loader",
      //   },
      //   {
      //     test: /\.csv$/,
      //     use: "csv-loader",
      //   },
      {
        test: /\.json$/,
        use: "json-loader",
      },
      // rule for typescript.
      //   {
      //     test: /\.tsx?$/,
      //     exclude: /node_modules/,
      //     use: "ts-loader",
      //   },
      // rule for stl files.
      {
        test: /\.stl$/,
        use: "file-loader",
      },
      // rule for image files.
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          // minimize: true,
          // context: 'src/client',
          // publicPath: '../',
          // outputPath: '../',
          // useRelativePath: true,
          // esModule: false,
          // emitFile: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
