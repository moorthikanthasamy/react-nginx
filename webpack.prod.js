const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require("./webpack.config");

module.exports = merge(baseConfig, {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});