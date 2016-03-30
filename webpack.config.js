/**
 * Created by olivier on 2016-03-26.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, './src/Main.jsx')
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                exclude : path.join(__dirname, './node_modules/')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets : ['es2015', 'react', 'stage-0']
                },
                exclude : path.join(__dirname, './node_modules/')
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?modules', 'sass'],
                include: path.resolve(__dirname, './node_modules/react-flexbox-grid')
            },
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.less$/, loader: 'style!css!less'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};