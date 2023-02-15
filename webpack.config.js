const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
devServer: {
    static: path.join(__dirname, 'dist')
 },
 plugins: [new MiniCssExtractPlugin()],
 module: {
  rules: [
    {
      test: /\.css$/i,
      use: [
        // The `injectType`  option can be avoided because it is default behaviour
        { loader: "style-loader", options: { injectType: "styleTag" } },
        "css-loader",
      ],
    },
  ],
},
}