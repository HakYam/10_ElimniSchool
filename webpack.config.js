const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].js'
    },
    mode: 'development', // Set mode to 'development'
    module: {
        rules: [
            {
                test: /\.js$/, // Regex for JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use babel-loader
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', // Add postcss-loader here
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ],
                            },
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/i, // Add this rule for CSS files
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Rule for image files
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]' // Custom output path for images
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // Regex for font files
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]' // Output path for fonts
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        // Autoprefixer is configured in postcss-loader options, not here
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8081,
        open: true,
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        },
    }
};
