const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATH_SOURCE = path.join(__dirname, '../src');
const PATH_DIST = path.join(__dirname, '../dist');
module.exports = env => {
    const environment = env.environment;
    // const isProduction = environment === 'production';
    // const isDevelopment = environment === 'development';
  
    return {
        mode: environment,
        devServer: {
            contentBase: PATH_DIST,
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        entry: [
            path.join(PATH_SOURCE, './index.js'),
        ],
        output: {
            path: PATH_DIST,
            filename: './js/[name].[hash].js',
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                debug: true,
                                useBuiltIns: 'usage',
                                corejs: 3,
                            }],
                            '@babel/preset-react',
                        ],
                    },
                }
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `config/postcss.config.js` } }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `config/postcss.config.js` } }
                    }
                ]
            }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(PATH_SOURCE, './index.html'),
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: './css/[name].[hash].css'
            })
        ],
    };
};