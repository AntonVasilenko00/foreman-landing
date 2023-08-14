import Section from '@/shared/components/layout/section'
import Link from 'next/link'
import { HTMLProps } from 'react'

interface PricingSectionProps extends HTMLProps<HTMLDivElement> {}

const PricingSection: React.FC<PricingSectionProps> = ({ ...props }) => {
	return (
		<Section id='pricing' useWhiteBackgroundImage>
			<div className='section-container flex flex-col'>
				<h2 data-reveal className='uppercase text-3xl sm:text-5xl py-12'>
					СТОИМОСТЬ РЕМОНТА
				</h2>
				<p
					data-reveal
					className='text-xs sm:text-sm md:text-md lg:text-normal lg:w-1/2 text-orange-500'>
					Указаны цены только на работу, без материалов. Итоговая стоимость
					ремонта зависит от сложности проекта и рассчитывается индивидуально.
					Оставьте заявку, мы перезвоним и ответим на все Ваши вопросы.
				</p>

				<ul className='flex flex-col lg:items-center'>
					<PriceItem
						name='ЭКОНОМ'
						price='от 25 т.р./м2'
						type='Бюджетный ремонт'
						features={[
							'Полы: стяжка, ламинат, пластиковый плинтус.',
							'Стены: штукатурка, шпатлевка, обои.',
							'Санузел: стандартная плитка.',
							'Потолки: натяжные.',
							'Стандартный монтаж: электрики, водопровода, канализации.',
						]}
					/>
					<PriceItem
						name='СТАНДАРТ'
						price='от 40 т.р./м2'
						type='Классический ремонт'
						features={[
							'Полы: стяжка, ламинат, инженерная доска, пластиковый плинтус.',
							'Стены: штукатурка, шпатлевка, обои.',
							'Санузел: плитка размером до 1 метра.',
							'Потолки: натяжные, гипсокартон.',
							'Улучшенный монтаж: электрики, водопровода, канализации.',
						]}
					/>
					<PriceItem
						name='ПРЕМИУМ'
						price='от 60 т.р./м2'
						type='Дизайнерский ремонт'
						features={[
							'Полы: стяжка, наливной пол, фанера, паркетная доска, МДФ плинтус, скрытый плинтус.',
							'Стены: штукатурка, шпатлевка, покраска под проявочный свет.',
							'Окна: откосы под покраску, подготовка основания под деревянный или каменный подоконник.',
							'Санузел: плитка нестандартная.',
							'Потолки: гипсокартон под покраску.',
							'Премиум-монтаж: электрики, водопровода, канализации и отопления.',
						]}
					/>
				</ul>
			</div>
		</Section>
	)
}

interface PriceItemProps extends HTMLProps<HTMLLIElement> {
	name: string
	price: string
	type: string
	features: string[]
}

export const PriceItem: React.FC<PriceItemProps> = ({
	name,
	price,
	features,
	type,
	...props
}) => {
	return (
		<li className='my-12 w-full'>
			<hr data-reveal className='border-orange-500 border-b-2 my-24' />
			<h3 data-reveal className='text-3xl md:text-4xl my-4'>
				{name}
			</h3>
			<h3
				data-reveal
				className='text-3xl md:text-4xl font-bold text-orange-500'>
				{price}
			</h3>
			<h4
				data-reveal
				className='text-xl md:text-2xl my-8 border-b-orange-500 border-b-2 w-fit'>
				{type}
			</h4>
			<ul className='list-disc flex flex-col gap-2 marker:text-orange-500 pl-6 font-thin'>
				{features.map((feature, i) => (
					<li data-reveal key={i} className='drop-shadow-sm md:text-lg'>
						{feature}
					</li>
				))}
			</ul>
			<a
				data-reveal
				href='#contacts'
				className='block mt-8 ml-6 uppercase text-orange-500 drop-shadow animate-pulse animate-bounce hover:scale-110 hover:animate-none duration-300 md:text-xl'>
				Оставить заявку
			</a>
		</li>
	)
}

export default PricingSection
