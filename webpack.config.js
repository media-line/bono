"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        search: __dirname + '/dev/components/search/search',
        topMenu: __dirname + '/dev/components/top-menu/top-menu',
        slider: __dirname + '/dev/components/slider/slider',
        services: __dirname + '/dev/components/services/services',
        newsSlider: __dirname + '/dev/components/news-slider/news-slider',
        serviceDetail: __dirname + '/dev/components/service-detail/service-detail',
        listProducts: __dirname + '/dev/components/list-products/list-products',
        listClients: __dirname + '/dev/components/list-clients/list-clients',
        listNews: __dirname + '/dev/components/list-news/list-news',
        detailNews: __dirname + '/dev/components/detail-news/detail-news',
        listPortfolio: __dirname + '/dev/components/list-portfolio/list-portfolio',
        detailPortfolio: __dirname + '/dev/components/detail-portfolio/detail-portfolio',
        pagination: __dirname + '/dev/components/pagination/pagination',
        detailContact: __dirname + '/dev/components/detail-contact/detail-contact',
        listPersonal: __dirname + '/dev/components/list-personal/list-personal',
        detailPersonal: __dirname + '/dev/components/detail-personal/detail-personal',
        breadcrumbs: __dirname + '/dev/components/breadcrumbs/breadcrumbs',
        
        mainpage: __dirname + '/dev/mainpage',
        delivery: __dirname + '/dev/delivery',
        catering: __dirname + '/dev/catering',
        leaseCategory: __dirname + '/dev/lease-category',
        cafeService: __dirname + '/dev/cafe-service',
        clients: __dirname + '/dev/clients',
        news: __dirname + '/dev/news',
        newsDetail: __dirname + '/dev/news-detail',
        portfolio: __dirname + '/dev/portfolio',
        text: __dirname + '/dev/text',
        lease: __dirname + '/dev/lease',
        contactsPage: __dirname + '/dev/contacts-page',
        personalList: __dirname + '/dev/personal-list',
        personalDetail: __dirname + '/dev/personal-detail',
        portfolioDetail: __dirname + '/dev/portfolio-detail',
        
        pageInner: __dirname + '/dev/modules/page-inner/page-inner',
    }, 
    output: {
        path: __dirname + '/public',
        publicPath: NODE_ENV == 'development' ? '/' : '',
        filename: 'js/[name].js'
    },
    
    watch: NODE_ENV == 'development',
    
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //minimize: true
                            }
                        }, 
                        "postcss-loader", 
                        "sass-loader",
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                // Or array of paths
                                resources: ['./dev/sass/mixins.scss', './dev/sass/_grid.scss', './dev/sass/variables.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: NODE_ENV == 'development' ? "raw-loader" : 'file-loader?name=[name].[ext]'
            },
        ],
    },
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }),*/
        new ExtractTextPlugin({filename: "css/[name].css", allChunks: true, disable: NODE_ENV == 'development'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    
    resolve: {
        alias: {
            'jquery': require.resolve('jquery'),
        },
    },
    
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dev'
    }
};