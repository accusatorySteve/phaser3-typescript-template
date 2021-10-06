const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // Typescript
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Phaser3 Template', // the name that goes in the document's title.
            template: path.resolve(__dirname, './src/template.html'), // template file.
            filename: 'index.html', // output file.
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        }),
        new CleanWebpackPlugin(),
    ],
}