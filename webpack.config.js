const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.module\.css$/, // Обрабатываем CSS-модули
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/, // Обрабатываем обычные CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/, // Поддержка .js и .jsx файлов
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // Поддержка обработки файлов
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Учитываем файлы .js и .jsx
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },
};
