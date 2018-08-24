const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		'js/dist': './js/main.js',
		'css/style': './sass/main.sass'
	},
	watch: true,
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: ['es2015'] }
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};
