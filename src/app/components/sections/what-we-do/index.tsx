import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import Image from 'next/image'
import maxSitting from '@/shared/assets/IMG_1700.png'
interface WhatWeDoSectionProps extends HTMLProps<HTMLDivElement> {}

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ ...props }) => {
	return (
		<Section id='what-we-do' useWhiteBackgroundImage>
			<div className='z-10 container mx-auto px-10 md:px-16 pt-20 text-slate-800 py-16 flex flex-col relative'>
				<div className='absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] h-full max-h-[80%] bg-gradient-to-r from-white via-white opacity-70 z-20 md:right-16' />

				<Image
					className='z-0 blur-[1px] hidden sm:block -scale-x-100 rounded-se-full rounded-es-full rounded--full absolute right-0 top-1/2 -translate-y-1/2'
					src={maxSitting}
					alt='Max Standing'
					width={600}
					height={900}
				/>
				<h2
					data-reveal
					className='z-30 text-5xl md:text-6xl font-semibold uppercase w-1/2'>
					Что мы делаем:
				</h2>
				<ul className='z-30 flex flex-col gap-24 my-16 w-3/4 md:w-1/2'>
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
						title='Ремонт частных домов'
						num='03'
						text='Ремонт вашего дома любой площади и сложности'
					/>
					<WhatWeDoContent
						title='Натяжные потолки'
						num='04'
						text='Натяжные потолки любого вида и помощь в подборе освещения'
					/>
					<WhatWeDoContent
						title='Системы кондиционирования'
						num='05'
						text='Выполним монтаж в 1 или 2 этапа. Поможем в подборе кондиционеров'
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
	<li className='flex flex-col gap-4 md:gap-8'>
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
			className='hover:scale-110 duration-300 border-b-2 w-fit border-b-orange-500 text-orange-500 md:text-xl'
			href={link}>
			Подробнее
		</a>
	</li>
)

export default WhatWeDoSection
