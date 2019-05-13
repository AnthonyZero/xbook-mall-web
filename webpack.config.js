var path = require("path");

module.exports = {
    entry: './src/page/index/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js'
    }
}