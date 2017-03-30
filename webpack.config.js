const ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './resources/js',
        filename: 'bundle.js',
        publicPath: '/resources/js'
    },
     module: {
        rules: [
            // ...
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.
                extract({
                    fallback: "style-loader",
                     use: ['css-loader', 'sass-loader']
                })
            }
        ],
},
plugins:[
    new ExtractTextPlugin('../../dist/style.css'),
    new BrowserSyncPlugin({
	      // browse to http://localhost:8080/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 8080,
          files: ['*.php']
	   
})
],
watch: true,
}