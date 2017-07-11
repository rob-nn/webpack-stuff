var webpack = require('webpack')
var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, 'app')
var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: DIST_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test:/\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config
