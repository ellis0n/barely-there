const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
				mono: ["Geist Mono", ...defaultTheme.fontFamily.serif],
			},
			gridColumn: {
				full: 'full',
				wide: 'wide',
				content: 'content',
				'left-col': 'left-col',
				'left-gap': 'left-gap',
				'right-gap': 'right-gap',
				'right-col': 'right-col',
			},
			gridColumnEnd: {
				full: 'full',
				wide: 'wide',
				content: 'content',
				'left-col': 'left-col',
				'left-gap': 'left-gap',
				'right-gap': 'right-gap',
				'right-col': 'right-col',
			},
			gridColumnStart: {
				full: 'full',
				wide: 'wide',
				content: 'content',
				'left-col': 'left-col',
				'left-gap': 'left-gap',
				'right-gap': 'right-gap',
				'right-col': 'right-col',
			},
			gridTemplateColumns: {
				0: 'repeat(1,minmax(0, 0fr))',
				'5e-5e-1f': 'minmax(0, 5em) minmax(0, 5em) minmax(0, 1fr)',
				'header': '6vw 1fr 1fr 6vw',
			},
			gridTemplateRows: {
				0: 'repeat(1,minmax(0, 0fr))',
				footer: '3vw 1fr 1fr 3vw',
			},
			transitionProperty: {
				grid: 'grid-template-rows, grid-template-columns',
			},
			width: {
				content: 'min(100vw - 1.5rem, 72rem)',
				narrow: 'min(100vw - 1.5rem, 50rem)',
			},
			fontSize: {
			100: '0.7025rem',
			200: '0.79rem',
			300: '0.88875rem',
			400: '1rem',
			500: '1.125rem',
			600: '1.265625rem',
			700: '1.42375rem',
			800: '1.601875rem',
			900: '1.801875rem',
			1000: '2.0275rem',
			1100: '2.280625rem',
			1200: '2.565625rem',
			1300: '2.8875rem',
			1400: '3.25rem',
		},
		},
	},
	plugins:
		[
			plugin(function ({ addVariant }) {
				addVariant('scroll', ':merge(.scroll) &');
				addVariant('is-checked', ':merge(:checked +) &');
			}), 
		]
};
