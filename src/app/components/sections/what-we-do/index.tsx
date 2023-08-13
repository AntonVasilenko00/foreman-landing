import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'

interface WhatWeDoSectionProps extends HTMLProps<HTMLDivElement> {}

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ ...props }) => {
	return (
		<Section id='what-we-do' useWhiteBackgroundImage>
			<div className='z-10 container mx-auto px-10 pt-20 text-slate-800 py-16 flex flex-col md:items-center'>
				<h2
					data-reveal
					className='text-5xl md:text-6xl font-semibold uppercase w-1/2 md:text-center'>
					Что мы делаем:
				</h2>
				<ul className='flex flex-col gap-24 my-16 w-3/4 md:w-full'>
					<WhatWeDoContent
						title='РЕМОНТ ПОД КЛЮЧ'
						num='01'
						text='Ремонт вашей квартиры любого объёма и сложности, от новостроек до старого фонда, от косметического ремонта
          до индивидуальных проектов капитального ремонта'
					/>
					<WhatWeDoContent
						title='Дизайн Проект'
						num='02'
						text='Индивидуальный дизайн-проект будет создан исключительно под все ваши требования, пожелания и запросы.'
					/>
					<WhatWeDoContent
						title='Строительство Домов'
						num='03'
						text='Для постройки своего уютного гнездышка требуется много сил, времени, энергии и ресурсов.

          Поэтому важно доверять все процессы настоящим профессионалам!'
					/>
				</ul>
			</div>
		</Section>
	)
}

const WhatWeDoContent = ({
	title,
	num,
	text,
	link = '#contacts',
}: {
	title: string
	num: string
	text: string
	link?: string
}) => (
	<li className='flex flex-col gap-4 md:gap-8 md:items-center'>
		<p
			data-reveal
			className='font-semibold text-4xl md:text-7xl text-orange-500 md:py-8'>
			{num}
		</p>
		<p data-reveal className='font-semibold text-2xl md:text-3xl uppercase'>
			{title}
		</p>
		<p data-reveal className='md:text-2xl font-thin'>
			{text}
		</p>
		<a
			data-reveal
			className='border-b-2 w-fit border-b-orange-500 text-orange-500 md:text-xl'
			href={link}>
			Подробнее
		</a>
	</li>
)

export default WhatWeDoSection
