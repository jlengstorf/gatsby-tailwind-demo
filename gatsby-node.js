exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
	setBabelPlugin({
		name: 'babel-plugin-macros'
	})
}
