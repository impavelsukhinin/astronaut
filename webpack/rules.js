const IS_PROD = process.env.NODE_ENV === 'production'
const tsxUse = [
	{
		loader: 'ts-loader',
		options: {
			transpileOnly: true,
		},
	},
]

if (!IS_PROD) {
	tsxUse.push(require.resolve('react-docgen-typescript-loader'))
}

module.exports = [
	{
		test: /\.tsx?$/,
		use: tsxUse,
		exclude: /node_modules/,
	},
	{
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: 'url-loader',
	},
	{
		test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|mp3|wav|aac|ogg)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'assets/[name].[sha1:hash].[ext]',
				},
			},
		],
	},
]
