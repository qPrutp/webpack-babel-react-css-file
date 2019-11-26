const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV config
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: devWebpackConfig.externals.path.dist,
        host: 'localhost',
        port: 3000,
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})