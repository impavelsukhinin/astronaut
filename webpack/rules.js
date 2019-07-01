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
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
			require.resolve('react-docgen-typescript-loader'),
		],
		exclude: /node_modules/,
	},
	{
		test: /\.(css|pcss)$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: IS_PROD ? '[hash:base64:5]' : '[name]--[local]--[hash:base64:5]',
					},
					sourceMap: true,
					importLoaders: 1,
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						require('postcss-preset-env')({
							stage: 0,
							browsers: ['last 2 versions'],
						}),
						require('cssnano')(),
					],
				},
			},
		],
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
