var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src'),
        vendor: ['reflect-metadata']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'ng-metadata/core': path.join(__dirname, 'node_modules/ng-metadata/core'),
            'reflect-metadata': path.join(__dirname, 'node_modules/reflect-metadata/Reflect')
        }
    },
    module: {
        rules: [
            { test: "\.html$", loader: "html-tpl" }
        ]
    }
}
