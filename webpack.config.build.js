const path = require('path')
const { fileURLToPath } = require('url')

const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')

// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const __dirname = path.dirname(fileURLToPath(import.meta.url))

module.exports = merge(config, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'public'),
    },

    // plugins: [
    //     new CleanWebpackPlugin()
    // ]
})