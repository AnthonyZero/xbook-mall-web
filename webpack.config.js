/*
* @Author: Anthony_One
* @Date:   2019-05-15 21:55:01
* @Last Modified by:   Anthony_One
* @Last Modified time: 2019-05-15 23:37:14
*/
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
    	'app': ['./src/page/index/app.js'],
    	'cats': ['./src/page/index/cats.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    //模块：例如解读CSS,图片如何转换，压缩 【改动】：图片文件的加载方式变化，并和字体文件分开处理 图片小于2kb的按base64打包
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        ]
    },
    //【新增】：webpack4里面移除了commonChunksPulgin插件，放在了config.optimization里面
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                common: {
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    //插件，用于生产模版和各项功能
    plugins: [
        // 把css单独打包到css文件下
        new ExtractTextPlugin("css/[name].css"),
    ]
    
}

module.exports = config;
