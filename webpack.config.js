const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    
    mode: 'development',
    entry: './src/js/entry.js',
    
  
    performance: {
      hints: false  // Disable performance hints
    },
    output: {
        
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        liveReload: true,
        devMiddleware: {
        writeToDisk: true
        }
      },
    
    module: {
        rules: [
            {
                test: /\.js$/, // Add Babel loader for JS files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
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
            
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
                new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'firstgrade.html',
            template: './src/firstgrade.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'secondgrade.html',
            template: './src/secondgrade.html',
        }),


        // Autoprefixer is configured in postcss-loader options, not here
    ],
    
};
