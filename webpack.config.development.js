const path = require('path')
const { merge } = require('webpack-merge')

const config = require('./webpack.config.js')

module.exports = merge(config, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        port: 8000,
        devMiddleware: {
            writeToDisk: true
        },
    },

    output: {
        path: path.resolve(__dirname, 'public'),
    }
})