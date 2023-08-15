import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import Image from 'next/image'
import maxSitting from '@/shared/assets/max-sitting.png'
import { YEARS_OF_EXPERIENCE } from '@/shared/constants'

interface ExperienceSectionProps extends HTMLProps<HTMLDivElement> {}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ ...props }) => {
	return (
		<Section id='experience' useWhiteBackgroundImage>
			<div className='section-container text-slate-800 flex flex-col'>
				<div className='absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[450px] h-full max-h-[80%] bg-gradient-to-r from-white via-white opacity-70 z-20 md:right-24 lg:right-48' />

				<h2 data-reveal className='text-5xl md:text-6xl md:my-8 font-semibold'>
					Наш опыт
				</h2>
				<ul className='z-20 flex flex-col gap-24 my-16 w-3/4 md:w-1/2'>
					<ExpContent
						title='Опыт'
						num={`${YEARS_OF_EXPERIENCE}`}
						text='Лет успешной работы
в сфере строительства и ремонта'
					/>
					<ExpContent
						title='Команда'
						num='25+'
						text='Профессионалов в сфере ремонта и дизайна'
					/>
					<ExpContent title='Более' num='177' text='Довольных клиентов' />
					<ExpContent
						title='Более'
						num='10 000'
						text='Квадратных метров
          отремонтированного жилья'
					/>
				</ul>
				<Image
					className='z-0 rounded-ss-full rounded-ee-full absolute right-0 top-1/2 -translate-y-1/2 md:right-24 lg:right-48'
					src={maxSitting}
					alt='Max Standing'
					width={400}
					height={600}
				/>
			</div>
		</Section>
	)
}

const ExpContent = ({
	title,
	num,
	text,
}: {
	title: string
	num: string
	text: string
}) => (
	<li className='flex flex-col gap-4'>
		<p data-reveal className='font-semibold text-2xl md:text-4xl drop-shadow'>
			{title}
		</p>
		<p
			data-reveal
			className='font-semibold text-5xl md:text-7xl text-orange-500 drop-shadow-sm'>
			{num}
		</p>
		<p data-reveal className='md:text-xl md:my-4 drop-shadow-sm'>
			{text}
		</p>
	</li>
)

export default ExperienceSection
