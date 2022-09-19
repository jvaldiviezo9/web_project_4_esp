
const path = require('path') // path library is used to resolve paths

const HtmlWebpackPlugin = require('html-webpack-plugin') // read html files
const {CleanWebpackPlugin} = require("clean-webpack-plugin") // clean the dist folder every time a new build is made
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // plugin to extract css and minify

module.exports = {

    devtool: 'inline-source-map', // A full SourceMap is emitted as a separate file. It adds a reference comment to the bundle so development tools know where to find it
    entry: {
        main: './src/index.js'  // where to start
    },
    output: {
        path: path.resolve(__dirname, 'dist'),  // name of the output folder
        filename: 'main.js',  // name of the output filename
        publicPath: '' // public path for the assets
    },
    target: ['web', 'es5'],
    stats: {children: true},
    mode: 'development',

    devServer: {
        static: path.resolve(__dirname, './dist'), // where to serve the files
        compress: true,
        port: 8080,
        open: true, // open browser automatically
        // stats: 'errors-only', // only show errors
        watchFiles: ["src/*.html"], // reload at change
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },

            {
                test: /\.(png|svg|jpg|gif|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ["style-loader", { loader: 'css-loader', options: { url: false } }, "sass-loader"],
            },
            // review:
            {
                test: /\.woff2\?v=3\.19$/,
                use: [{loader: 'url-loader', options: { url: false } }]
            },
            {
                test: /\.(html)$/i,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
                inject: true,
                template: "./src/index.html",
                filename: `index.html`,
                chunks: ['main']
            } // config for html files
        ),
        new CleanWebpackPlugin(), // use the plugin
        new MiniCssExtractPlugin() // use the plugin
    ],
}