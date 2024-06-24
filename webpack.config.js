const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
            },
        {
        test: /\.coffee$/,
        loader: "coffee-loader",
      },
    ],
    
    },
    devServer: {
        port:3000,
    }
  
};