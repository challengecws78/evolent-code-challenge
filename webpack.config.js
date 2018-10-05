const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        main: [
            '@babel/runtime/regenerator',
            './src/index.js'
        ]
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader!sass-loader',
                  publicPath: '/'
                })
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'css-loader'
                  },
                  { 
                    loader: 'style-loader'
                  }
                ]     
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('[name].css')
    ]
}