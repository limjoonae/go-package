var path = require('webpack');
var path = require('path');
var helpers = require('./config/helpers');

module.exports = {

  entry: {
  // 'vendor': './src/go-module/vendor.ts',
  'libmodule': './src/go-module/lib.module.index.ts',
  'gomodule': './src/go-module/go.module.index.ts'
},
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].umd.js',
    // path: path.resolve(__dirname, './src/dist'),
    libraryTarget: "umd"
  },
  externals: {
    "@angular/core": "@angular/core",
    "@angular/common": "@angular/common",
    "@angular/forms": "@angular/forms",
    "@angular/router": "@angular/router",
    "@angular/http": "@angular/http",
    "rxjs/add/operator/map": "rxjs/add/operator/map",
    "@angular/platform-browser": "@angular/platform-browser",
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src/go-module', 'tsconfig.webpack.json') }
          }, 
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      /* Embed files. */
      { 
        test: /\.(html|css)$/, 
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      /* Async loading. */
      {
        test: /\.async\.(html|css)$/, 
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      }
    ]
  }
};