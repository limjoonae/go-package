#How to pack component

##Prerequisite

- npm install webpack --save-dev
- npm install angular2-template-loader --save-dev
- npm install awesome-typescript-loader --save-dev
- npm install raw-loader --save-dev

##Config file
**_remark: removw moduleId line for all component because webpack not support moduleId as a string_**.
- config/helpers.js
```javascript
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
```
var path = require('webpack');
var path = require('path');
var helpers = require('./config/helpers');

module.exports = {

  entry: './src/app/go-framework.ts', //example file
  output: {
    filename: 'gomodule.bundle.js', //example output file name
    path: path.resolve(__dirname, './src/app'), //example out path
    libraryTarget: "umd"
  },
  externals: { //example number of library for use
    "@angular/core": "@angular/core",
    "@angular/common": "@angular/common",
    "numeral": "numeral",
    "ng2-bootstrap": "ng2-bootstrap"
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