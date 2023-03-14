const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: 'development',
    entry:{
        bundle: './src/scripts/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plan Day',
            template: './src/templates/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname,'./dist'),
        },
        port: 3000,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true,

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel-preset-env', {targets: "defaults"}]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ],
    },
    devtool: 'inline-source-map',

}