import Section from '@/shared/components/layout/section'
import { WARRANTY_WORD, YEARS_OF_WARRANTY } from '@/shared/constants'
import { HTMLProps } from 'react'

interface HeroSectionProps extends HTMLProps<HTMLDivElement> {}

const HeroSection: React.FC<HeroSectionProps> = ({ ...props }) => {
	return (
		<Section useDarkBackgroundImage className='flex flex-col justify-center'>
			<div
				data-reveal
				className=' section-container mt-36 z-10 text-slate-200 font-thin text-lg shadow-sm flex flex-col justify-center min-h-full w-full h-full'>
				<p className='sm:w-3/4 text-sm'>Москва. Московская область.</p>
				<h1
					data-reveal
					className=' sm:w-3/4 text-4xl font-bold tracking-wider leading-snug'>
					РЕМОНТ И ДИЗАЙН КВАРТИР И ДОМОВ
				</h1>
				<ul className='flex flex-col gap-4 sm:w-3/5 list-disc marker:text-orange-500 pl-6 my-24'>
					<li>Фиксированная стоимость на ремонт</li>
					<li>Поэтапная оплата</li>
					<li>
						Гарантия {YEARS_OF_WARRANTY} {WARRANTY_WORD}
					</li>
				</ul>
			</div>
		</Section>
	)
}

export default HeroSection
