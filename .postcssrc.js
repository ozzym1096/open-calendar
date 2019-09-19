module.exports = {
	plugins: [
		require('postcss-font-magician')({
			'display': 'fallback',
			'foundries': 'google hosted',
			'protocol': 'https:'
		}),
		require('autoprefixer'),
	],
};
