const path = require('path');
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
 "module": {
    "rules": [
      {
        "test": /\\.css$/,
         "use": [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  }
}