/*
* @Author: Anthony_One
* @Date:   2019-05-15 21:55:01
* @Last Modified by:   Anthony_One
* @Last Modified time: 2019-05-15 22:20:01
*/
var path = require("path");

var config = {
    entry: {
    	'index': ['./src/page/index/app.js'],
    	'cats': ['./src/page/index/cats.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    }
}

module.exports = config;
