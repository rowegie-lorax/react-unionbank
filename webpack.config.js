const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


const hotloaderPlugin = new webpack.HotModuleReplacementPlugin();
const nameModulesPlugin = new webpack.NamedModulesPlugin();

module.exports = {
    entry: [
        'react-hot-loader/patch',
        //activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        //bundle the client for webpack dev server
        //and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        //bundle the client for hot reloading
        //only- means to only hot reload for successful updates
        SRC_PATH + '/index.js',
    ],
    output: {
        filename: 'main.js',
        path: DIST_PATH
    },

    devServer: {
        hot: true,
        //activate hot reloading
        contentBase: '/dist',
        //match the output path
        publicPath: '/'
        //match the outaput publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        hotloaderPlugin,
        nameModulesPlugin
    ]

};