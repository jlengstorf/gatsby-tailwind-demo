exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
	setBabelPlugin({
		name: 'babel-plugin-tailwind-components',
		options: {
			config: './tailwind.config.js',
			format: 'auto'
		}
	})
}
