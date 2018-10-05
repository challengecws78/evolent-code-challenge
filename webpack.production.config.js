const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'babel-runtime/regenerator',
            './src/index.js'
        ]
    },
    mode: 'production',
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
		new ExtractTextPlugin('[name].css'),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {
					removeAll: true,
				},
			},
			canPrint: true,
		}),
		new UglifyJSPlugin(),
		new CompressionPlugin({
			algorithm: 'gzip',
		}),
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
	],
}