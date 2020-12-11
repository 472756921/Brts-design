const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
	return webpackMerge.merge(baseConfig(env, argv), {
		mode: 'production',
		entry: {
			main: './src/components/index.ts'
		},
		output: {
			publicPath: './',
			filename: '[name]-lib.js',
			path: path.resolve(__dirname, '../lib'),
			libraryTarget: 'umd'
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].chunk.css'
			}),
			new CleanWebpackPlugin()
		],
		optimization: {
			usedExports: true //清除无用JS
		}
	});
};
