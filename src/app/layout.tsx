import '../shared/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/shared/components/layout/header'
import { Open_Sans } from 'next/font/google'
import Footer from '@/shared/components/layout/footer'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/react'

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
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className=''>
			<body className={font.className}>
				<div className='relative bg-slate-50 min-h-screen flex flex-col'>
					<Header />
					<main className='flex-grow scroll-smooth'>{children}</main>
					<Footer />
				</div>
				<Analytics />
				<ToastContainer />
			</body>
		</html>
	)
}
