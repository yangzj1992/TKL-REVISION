var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'prod';
var RootDir = process.cwd();

var config = {
  entry: {
    bundle: './source/js/scripts.js'
  },
  output: {
    path: __dirname + (debug?'/source/build/dev':'/source/build/public'),  // 指定某些loader 的输出路径（js/img）
    filename: debug?'js/[name].js':'js/[name].[chunkhash:8].min.js',
    publicPath: debug?'build/dev/':'build/public/',  // generate URL
    chunkFilename: 'chunks/[name].chunk[chunkhash:8].js'
  },
  resolve: {
    alias: {
      'jquery': RootDir + './source/js/jquery-1.11.1.min.js',
    },
    // 自动扩展的文件名后缀
    extensions: ['.js', '.css', '.scss', '.png', '.jpg']
  },
  module: {
    rules: [
      { // use bable-loader for *.js files
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          compact: false,
          plugins: ['syntax-dynamic-import','transform-runtime','transform-object-rest-spread'],
          presets: ['es2015']
        },
        exclude: /node_modules/      // regex
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          'url?limit=10000&name=img/[hash:8].[name].[ext]'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          // use style-loader in development
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.ejs$/,
        loader: ['ejs-loader?variable=data']
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ],
  },
  externals: {
    jquery: 'jQuery',
    partial: "partial"
  },
  plugins: debug ? [
    new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    // new HtmlWebpackPlugin({
    //   title: '',
    //   template: 'ejs-render!./layout/casper/bundle.ejs',
    //   filename: 'ejs!./../../../layout/bundle.ejs',
    //   chunks: ['bundle']
    // })
    //避免重复的模块
  ] : [
    new ExtractTextPlugin({filename: 'css/[name].[contenthash:8].min.css', allChunks: true}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    // new HtmlWebpackPlugin({
    //   title: '',
    //   hash: true,
    //   template: 'raw!./layout/casper/bundle.ejs',
    //   partial: '<%- partial("casper/header") %>',
    //   filename: 'raw!./../../../../layout/bundle.ejs',
    //   chunks: ['bundle']
    // }),
  ]
}
if (!debug) {
  //生产模式标识
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );
  //压缩
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
  );
  //清空文件夹
  config.plugins.push(
    new CleanWebpackPlugin(['public'], {
      root: RootDir + '/source/build', // 根路径（绝对路径）
      verbose: true, // 控制台打印日志
      dry: false // 不清空任何文件，用于测试
    })
  );
  config.output.sourceMapFilename = '[file].map';
  config.devtool = 'source-map';
}

module.exports = config;
