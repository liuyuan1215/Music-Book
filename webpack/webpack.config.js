const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./entry');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, 'postcss-loader']
                })
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: '/images'
                    }
                }]
            }, {
                test: /\.(html|htm)/i,
                use: ['html-withimg-loader']
            }, {
                // test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },{
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([{
            from:'./src/public',
            to:'public'
        }]),
        new webpack.BannerPlugin('哈哈'),
        new ExtractTextPlugin("index.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, './src/index.html')),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8081
    }
}