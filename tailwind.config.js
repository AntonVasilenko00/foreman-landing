/** @type {import('tailwindcss').Config} */
const whiteBricksUrl =
	'https://phonoteka.org/uploads/posts/2022-01/thumbs/1642747821_21-phonoteka-org-p-belii-fon-dlya-saita-21.jpg'

const heroUrl =
	'https://images.ctfassets.net/exhgc4ofdrwe/2Sg3l03KLeww7XJ70nCCXJ/672cffa94e088322439d47bd7c270d12/hero-bg.png'

const heroUrl2 =
	'https://images.ctfassets.net/exhgc4ofdrwe/5dhJypAmvRr2Xq1ZGE0YXU/c5c4a75c7fe00a43515fc818315f5797/hero-bg-2.png'

const heroUrl3 =
	'https://images.ctfassets.net/exhgc4ofdrwe/d2ZAEtCOqTlN4lKrhAUUC/9fdc963572c9b4488c705d5fb4acba39/hero-bg-3.png'

const heroUrl4 =
	'https://images.ctfassets.net/exhgc4ofdrwe/mDstrQqbP3xoxOLTDYbJf/ee3a368b7ff979b6a87845a03b53a469/hero-bg-4.png	'

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
				fadeIn: 'fadeIn 0.35s ease-in forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				hero: `url("${heroUrl}")`,
				'white-bricks': `url("${whiteBricksUrl}")`,
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
