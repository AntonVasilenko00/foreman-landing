import '../shared/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/shared/components/layout/header'
import { Open_Sans } from 'next/font/google'
import Footer from '@/shared/components/layout/footer'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { GoogleTagManagerScript, NoScriptGTM } from './components/analytics/google-tag-manager'
import { GoogleAnalyticsScript } from './components/analytics/google-analytics'
import { NoScriptYandexMetrics, YandexMetricsScript } from './components/analytics/yandex-metrics'

const GTM_ID = 'GTM-WT54474L';

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Ремонт Квартир | Москва',
	description: 'Ремонт Квартир в Москве и Московской области.',
	keywords: [
		'ремонт',
		'ремонт квартир',
		'москва',
		'московская область',
		'ЖК',
		'качественный ремонт',
		'квартира',
		'дом',
		'смета',
		'дизайн',
		'интерьер',
	],
	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.mskremont.pro"),
  alternates: {
    canonical: '/',
	},
	openGraph: {
		title: 'Ремонт Квартир | Москва',
		description: 'Ремонт Квартир в Москве и Московской области.',
		url: 'process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.mskremont.pro"',
		siteName: 'Ремонт Квартир | Москва',
		locale: 'ru_RU',
		type: 'website',
		category: 'ремонт',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<GoogleTagManagerScript />
			<GoogleAnalyticsScript />
			<YandexMetricsScript />
			<body className={font.className}>
				<div className='relative bg-slate-50 min-h-screen flex flex-col'>
					<Header />
					<main className='flex-grow scroll-smooth'>{children}</main>
					<Footer />
				</div>
				<Analytics />
				<ToastContainer />
				<NoScriptGTM />
				<NoScriptYandexMetrics />
			</body>
		</html>
	)
}
