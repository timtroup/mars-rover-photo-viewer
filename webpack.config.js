var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './src/index.js'],
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mars Rover Photo Viewer',
            template: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // https://github.com/webpack/webpack/issues/1496
            },
            sourceMap: true
        })
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000',
            }
        ]
    }
};