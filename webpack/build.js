const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const rules = require('./rules')

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/index.tsx'),
	},
	resolve: {
		modules: [path.resolve(__dirname, '../src'), 'node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	externals: [nodeExternals()],
	plugins: [
		new CompressionPlugin({
			test: /\.js(\?.*)?$/i
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new UglifyJsPlugin({
			uglifyOptions: {
				warnings: false,
				output: {
					// comments: false,
				},
			},
			cache: true,
			parallel: true,
		})],
	},
	module: { rules },
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../dist'),
		library: 'austronaut',
		libraryTarget: 'umd',
	},
	mode: 'production',
}
