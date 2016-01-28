var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        'app': [ // For hot style updates
            'webpack/hot/dev-server',
            // The script refreshing the browser on none hot updates
            'webpack-dev-server/client?http://localhost:8001',
            './src/boot.ts'
        ],
        'vendor': './src/vendor.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ],
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.ts/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ],
        include: path.join(__dirname, 'src')
    }
};
