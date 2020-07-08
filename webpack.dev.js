const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        open: true
    }
})