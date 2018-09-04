/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react'
import { css } from 'emotion'

const styles = {
	page: css(tw`flex justify-center items-center absolute pin bg-grey-light`),
	container: css(
		tw`bg-white container my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`
	),
	wrapper: css(tw`sm:flex sm:items-center px-6 py-4`),
	avatar: css(
		tw`block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0`
	),
	textContainer: css(tw`text-center sm:text-left sm:flex-grow`),
	textSpacing: css(tw`mb-4`),
	company: css(tw`my-0 text-sm leading-tight text-grey-dark`),
	name: css(tw`my-0 text-xl leading-tight`),
	button: css(
		tw`bg-white border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-1 rounded-full text-purple text-xs`
	)
}

export default () => (
	<div className={styles.page}>
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<img
					className={styles.avatar}
					src="https://lengstorf.com/images/jason-lengstorf.jpg"
					alt="Jason Lengstorf"
				/>
				<div className={styles.textContainer}>
					<div className={styles.textSpacing}>
						<h1 className={styles.name}>Jason Lengstorf</h1>
						<p className={styles.company}>Developer at Gatsby</p>
					</div>
					<button className={styles.button}>High Five</button>
				</div>
			</div>
		</div>
	</div>
)
