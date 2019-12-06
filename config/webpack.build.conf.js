const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { publicPath } = require('./constans/core');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        publicPath,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
