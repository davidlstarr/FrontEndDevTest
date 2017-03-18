var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
     module: {
        loaders: [
            // ...
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
         plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
    }
}