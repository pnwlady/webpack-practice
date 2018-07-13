const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/app/index.js",
    output:  {
        path: __dirname + '/dist', //Folder to store bundle generated
        filename: 'bundle.js', //generated budle filename
        publicPath: '/' //public URL of the output directory when referenced in a browser
    },
    module: {
      rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          }
      ]
  },
    plugins: [ // array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ],
    devServer: { //config webpack-dev-server
        contentBase: './src/public', //sorce of static assets
        port: 1111, //port running dev-server
    }
};
