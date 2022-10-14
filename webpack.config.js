const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const HtmlWebpackLiveReload = require('html-webpack-live-reload-plugin')

module.exports = {

    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/i, 
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './assets/[name].[ext]'
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackLiveReload(),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]

}