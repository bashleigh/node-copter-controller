const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');

const BUILD_DIRECTORY = path.resolve(__dirname, 'public', 'build');
const LIBRARY_NAME = 'electron-test';
const ENTRY_POINTS = {
    'index.js': ['babel-polyfill', './app/js/index.js'],
    'index.css': ['./app/scss/index.scss'],
};
const EXTERNALS = {
};

module.exports = function (env) {
    return {
        entry: ENTRY_POINTS,
        output: {
            path: BUILD_DIRECTORY,
            filename: env === 'production' ? '[chunkhash].[name]' : '[name]',
            chunkFilename: env === 'production' ? '[chunkhash].[name]' : '[name]',
            library: LIBRARY_NAME,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        externals: EXTERNALS,
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /.(png|jpg|gif|woff(2)?|eot|ttf|svg|jpg|jpeg)(\?[a-z0-9=\.]+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000
                            }
                        }
                    ],
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'resolve-url-loader'
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'resolve-url-loader'
                            },
                        ]
                    })
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin(),
            new ExtractTextPlugin({filename: env === 'production' ? '[contenthash].[name]' : '[name]', allChunks: true}),
            new WebpackMd5Hash(),
            new ManifestPlugin({
                stripSrc: new RegExp('(.css|.js)'),
            }),
            new CleanWebpackPlugin([BUILD_DIRECTORY], {
                root: __dirname,
                verbose: true,
                dry: false,
                exclude: ['manifest.json']
            }),
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(env),
                'process.env.NODE_ENV': JSON.stringify(env),
                __CLIENT__: true,
                __DEVELOPMENT__: env !== 'production',
                __DEVTOOLS__: env !== 'production'
            }),
        ]
    }
};