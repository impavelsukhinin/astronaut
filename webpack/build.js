const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const rules = require('./rules')
const libName = 'austronaut'

module.exports = {
	entry: {
		[`${libName}.min`]: path.resolve(__dirname, '../src/index.tsx'),
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
		minimizer: [new UglifyJsPlugin()],
	},
	module: { rules },
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../bundles'),
		library: libName,
		libraryTarget: 'umd',
	},
	mode: 'production',
}
