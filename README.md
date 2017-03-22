# How to pack component

## Prerequisite

- npm install webpack --save-dev
- npm install angular2-template-loader --save-dev
- npm install awesome-typescript-loader --save-dev
- npm install raw-loader --save-dev

## Config file
**_remark: remove moduleId line for all component because webpack convert moduleId to number_**.
- config/helpers.js

```js
var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
exports.root = root;
```
- package.json - insert command for call webpack ex. `"webpack": "webpack --colors"`
- tsconfig.json - add `"types": [ "node" ]` in compilerOptions for remove error cannot file require on compile time
- webpack.config.js

```js
var path = require('webpack');
var path = require('path');
var helpers = require('./config/helpers');

module.exports = {

  entry: {
    'libmodule': './src/go-module/lib.module.index.ts', //example file
    'gomodule': './src/go-module/go.module.index.ts' //example file
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].umd.js', //example output file name
    libraryTarget: "umd"
  },
  externals: { //example number of library for use
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
            options: { configFileName: helpers.root('src', 'tsconfig.json') } //point to your tsconfig.json file
          }, 
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/] //important!! (unnecesessary to compile when pack)
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
```