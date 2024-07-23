const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dirSrc = path.resolve(__dirname, 'src')
const dirNode = 'node_modules'

module.exports = {
    entry: [
        path.resolve(dirSrc, 'script.js')
    ],

    resolve: {
        modules: [
            dirSrc,
            dirNode
        ]
    },

    // output: {
    //     hashFunction: 'xxhash64',
    //     filename: 'bundle.[contenthash].js',
    //     path: path.resolve(__dirname, 'public')
    // },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './shared'),
                    noErrorOnMissing: true
                }
            ]
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(dirSrc, 'index.html'),
            minify: true
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    'html-loader'
                ]    
            },

            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },

            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            },

            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(glsl|vert|frag)$/,
                loader: 'glslify-loader',
                exclude: /node_modules/
            }
        ]
    }
}