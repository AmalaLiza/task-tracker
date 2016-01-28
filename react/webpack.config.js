var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.ts(x?)/,
                exclude: /node_modules/,
                loader: 'react-hot'
            },
            {
                test: /\.ts(x?)/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ],
        include: path.join(__dirname, 'src')
    }
};
