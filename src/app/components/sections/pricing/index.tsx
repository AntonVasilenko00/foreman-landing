import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import PriceItem from './item'

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

				<ul className='grid gap-8 md:gap-12 md:grid-cols-2 lg:gap-16 lg:py-16'>
					<PriceItem
						name='Косметический'
						price='от 8 тыс.р./м2'
						type='Косметический ремонт'
						features={[
							'Полы: ламинат, пластиковый плинтус.',
							'Стены: обои.',
							'Санузел: стандартная плитка.',
							'Потолки: натяжные.',
							'Стандартный монтаж: розеток, выключателй.',
						]}
					/>
					<PriceItem
						name='ЭКОНОМ'
						price='от 12 тыс.р./м2'
						type='Бюджетный ремонт'
						features={[
							'Полы: стяжка, ламинат, пластиковый плинтус.',
							'Стены: шпатлевка, обои.',
							'Санузел: стандартная плитка.',
							'Потолки: натяжные.',
							'Стандартный монтаж: электрики, водопровода, канализации.',
						]}
					/>
					<PriceItem
						name='СТАНДАРТ'
						price='от 15 тыс.р./м2'
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
						price='от 25 тыс.р./м2'
						type='Дизайнерский ремонт'
						features={[
							'Полы: стяжка, наливной пол, фанера, паркетная доска, МДФ плинтус, скрытый плинтус.',
							'Стены: штукатурка, шпатлевка, покраска.',
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

export default PricingSection
