const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
    // Set the mode to development or production
    mode: 'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8090,
    },

    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
})