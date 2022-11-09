const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist/js')
	},
	mode: 'development',
	devServer: {
		open: true,
		port: 8080,
		hot: true,
		devMiddleware: {
			writeToDisk: true
		},
		static: {
			directory: path.join(__dirname, 'dist')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env']
					},
				},
				exclude: /node_modules/
			}
		]
	}
};