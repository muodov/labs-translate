var ManifestPlugin = require('webpack-manifest-plugin');
var webpack = require('webpack');
var path = require('path');

let config = {
    entry: './client/app.js',
    devtool: 'cheap-module-source-map',
    output: {
        // filename: '[name].[chunkhash].js',
        filename: 'app.js',
        path: path.resolve(__dirname, 'root/build'),
        pathinfo: true
    },
    plugins: [
        new ManifestPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [{
            test: /\.scss$|\.sass$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    }
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }]
    }
};

module.exports = config;
