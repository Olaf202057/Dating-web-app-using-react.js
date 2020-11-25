var HtmlWbPackPlugin = require('html-webpack-plugin');
var path = require('path');

var HtmlWbPackPluginConfig = new HtmlWbPackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/,  loader: "babel-loader", exclude: path.resolve(__dirname, './node_modules/')},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")},
      {test: /\.(jpg|png|gif)$/, loader: "url-loader?name=img/img-[hash:6].[ext]", include: path.resolve(__dirname, './app')},
      {test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|ico)$/, loader: 'url?limit=10000' },
      {test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file' }
    ]
  },
  plugins: [HtmlWbPackPluginConfig],
  
  devServer: {
    port: 3333,
    historyApiFallback: true
  }
}
