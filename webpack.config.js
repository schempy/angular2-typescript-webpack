var webpack = require("webpack"),
  path = require('path');

const ccpOptions = {
  name: 'vendor',

  filename: './dist/vendor.bundle.js'
};

function root(__path) {
  return path.join(__dirname, __path);
}

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(ccpOptions),

    // Takes care of warnings described at https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src'), // location of your src
      { }
    )
  ]
}
