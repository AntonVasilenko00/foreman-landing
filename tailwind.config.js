/** @type {import('tailwindcss').Config} */
const url1 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747786_15-phonoteka-org-p-belii-fon-dlya-saita-15.jpg'
const url2 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747821_21-phonoteka-org-p-belii-fon-dlya-saita-21.jpg'
const url3 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747770_22-phonoteka-org-p-belii-fon-dlya-saita-22.jpg'
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-background': '#f2efe7',
			},
			backgroundImage: {
				hero: 'url("https://thumb.tildacdn.com/tild6432-6631-4632-b130-633064633732/-/format/webp/image.png")',
				'white-bricks': `url("${url2}")`,
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				'.section-container': {
					'@apply container mx-auto px-10 sm:px-16 py-8 z-10 duration-300': {},
				},
				'.reveal': {
					'@apply opacity-0 duration-1000': {},
				},
			})
		},
	],
}
