var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
