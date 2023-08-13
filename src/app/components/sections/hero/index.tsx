import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'

interface HeroSectionProps extends HTMLProps<HTMLDivElement> {}

const HeroSection: React.FC<HeroSectionProps> = ({ ...props }) => {
	return (
		<Section useDarkBackgroundImage>
			<div
				data-reveal
				className='opacity-0 section-container mt-36 z-10 text-slate-200 font-thin text-lg shadow-sm'>
				<p className='sm:w-3/4 text-sm'>Москва. Московская область.</p>
				<h1
					data-reveal
					className='opacity-0 sm:w-3/4 text-4xl font-bold tracking-wider leading-snug'>
					РЕМОНТ И ДИЗАЙН КВАРТИР И ДОМОВ
				</h1>
				<ul className='flex flex-col gap-4 sm:w-3/5 list-disc marker:text-orange-500 pl-6 my-24'>
					<li>Фиксированная стоимость на ремонт</li>
					<li>Поэтапная оплата</li>
					<li>Гарантия 5 лет</li>
				</ul>
			</div>
		</Section>
	)
}

export default HeroSection
