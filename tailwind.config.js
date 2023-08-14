/** @type {import('tailwindcss').Config} */
const url1 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747786_15-phonoteka-org-p-belii-fon-dlya-saita-15.jpg'
const url2 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747821_21-phonoteka-org-p-belii-fon-dlya-saita-21.jpg'
const url3 =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747770_22-phonoteka-org-p-belii-fon-dlya-saita-22.jpg'

module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{ts,tsx}',
		'./src/components/**/*.{ts,tsx}',
		'./src/app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				hero: 'url("https://thumb.tildacdn.com/tild6432-6631-4632-b130-633064633732/-/format/webp/image.png")',
				'white-bricks': `url("${url2}")`,
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
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
