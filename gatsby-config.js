module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [require('tailwindcss')('./tailwind.config.js')]
			}
		},
		'gatsby-plugin-emotion'
	]
}
