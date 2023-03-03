const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"), // setup entry point
  resolve: { // leave off file extension when importing
    extensions: [".tsx", ".ts", ".js"], // try .tsx -> try.ts -> try .js
  },
  module: {
    rules: [
      { // use babel-loader for all .js .ts .jsx .tsx files (exclude in node_modules folder)
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: { 
    path: path.resolve(__dirname, "..", "./build"), 
    filename: "bundle.js", // bundled code placed inside bundle.js
  },
  mode: 'development', // set "process.env.node_env" to "development"
  plugins: [
    new HtmlWebpackPlugin({ // inject bundle.js into index.html; place index.html in build folder
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  stats: "errors-only",
};
