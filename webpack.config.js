var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack/hot/dev-server', './dev/js/index.js'],
    // entry: ['./js/main.js'], --> entry: ['webpack/hot/dev-server' , './js/main.js']
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $               : 'jquery',
            jQuery          : 'jquery',
            'window.jQuery' : 'jquery',
            Popper          : ['popper.js', 'default'],
            Alert           : 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button          : 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel        : 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse        : 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown        : 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal           : 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover         : 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy       : 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab             : 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip         : "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util            : 'exports-loader?Util!bootstrap/js/dist/util',
        })
    ]
};
