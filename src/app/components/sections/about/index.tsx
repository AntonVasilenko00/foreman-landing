import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import Image from 'next/image'
import maxStanding from '@/shared/assets/max-standing-removebg-v2.png'

interface AboutSectionProps extends HTMLProps<HTMLDivElement> {}

const AboutSection: React.FC<AboutSectionProps> = ({ ...props }) => {
	return (
		<Section id='about' useWhiteBackgroundImage>
			{/* <Image
				data-reveal
				className='hidden sm:block absolute w-64 bottom-0 right-0 -scale-x-100'
				src={maxStanding}
				width={1080}
				height={1920}
				alt={'maxim-standing'}
			/> */}
			<div
				data-reveal
				className='opacity-0 min-h-[70vh] section-container flex flex-col items-center sm:items-start md:items-start md:gap-16 sm:justify-center'>
				<figure className='sm:w-full'>
					{/* <svg
						data-reveal
						className='w-10 h-10 mx-auto mb-3 text-orange-500'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 14'>
						<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
					</svg> */}
					<blockquote>
						<p
							data-reveal
							className='text-2xl drop-shadow-md italic text-center font-medium text-slate-800'>
							&quot;Мы делаем ремонт без компромиссов. Воплощаем ваши мечты с
							первого раза&quot;
						</p>
					</blockquote>
					<figcaption className='flex items-center justify-center mt-16 space-x-3'>
						<div className='flex items-center divide-x-2 divide-gray-500 md:py-8'>
							<cite
								data-reveal
								className='pr-3 text-lg drop-shadow-lg whitespace-nowrap font-medium text-slate-800 md:text-3xl'>
								Максим Василенко
							</cite>
							<cite
								data-reveal
								className='pl-3 text-sm drop-shadow-sm text-orange-500 md:text-xl'>
								Прораб
							</cite>
						</div>
					</figcaption>
				</figure>
				<div className='mx-auto sm:w-1/2 md:text-lg lg:text-xl mt-8 mb-16 flex flex-col gap-8'>
					<p data-reveal className='drop-shadow-md'>
						Мы — сплоченная{' '}
						<span className='border-b border-b-orange-500'>
							команда профессионалов
						</span>{' '}
						во главе с опытным прорабом.
					</p>
					<p data-reveal className='drop-shadow-md'>
						<span className='border-b border-b-orange-500'>Наша цель</span> —
						поддерживать высокие стандарты качества и профессионализма.
					</p>
					<p data-reveal className='drop-shadow-md'>
						Мы специализируемся на выполнении{' '}
						<span className='border-b border-b-orange-500'>
							разнообразных задач
						</span>
						, начиная от экономичных вариантов и заканчивая роскошной отделкой
						жилья бизнес класса.
					</p>
					<p data-reveal className='drop-shadow-md'>
						<span className='border-b border-b-orange-500'>
							Наш опыт и профессионализм
						</span>{' '}
						позволяют нам создавать работы, которые не только соответствуют
						вашим ожиданиям, но и превосходят их.
					</p>
				</div>
			</div>
		</Section>
	)
}

export default AboutSection
