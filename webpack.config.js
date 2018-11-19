const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'type-is.js',
        path: path.resolve(__dirname, 'bin'),
        library: 'typeIs',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    plugins: [new CleanWebpackPlugin(['dist'])],
    module: {
        rules: [
            { test: /\.m?js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
            { test: /\.m?js$/, exclude: /(node_modules|bower_components)/, loader: 'eslint-loader' },
        ],
    },
};
