const path = require('path')
var webpack = require('webpack')
var Ex = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"demo.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'vue demo',
            template: 'index.html'      
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
        ]
    },
    resolve: {
        alias: {
           'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
     }
}

