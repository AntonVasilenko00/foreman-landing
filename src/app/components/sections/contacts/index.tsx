import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import { SocialIcon } from 'react-social-icons'

interface ContactsSectionProps extends HTMLProps<HTMLDivElement> {}

const phone = 79858580135
const phoneString = '+7 (985) 858-01-35'
const ContactsSection: React.FC<ContactsSectionProps> = ({ ...props }) => {
	return (
		<Section id='contacts' useWhiteBackgroundImage>
			<div className='absolute -top-2 left-56 md:left-1/3 lg:left-1/4 w-fit h-fit md:-scale-x-100'>
				<svg
					className='rotate-[130deg] lg:rotate-[170deg] fill-orange-500 z-30 scale-[5]'
					xmlns='http://www.w3.org/2000/svg'
					width='22.703'
					height='21.928'>
					<path
						className='w-full h-full'
						d='M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z'
					/>
				</svg>
			</div>
			<div className='section-container flex flex-col md:items-center'>
				<h2 data-reveal className='py-8 text-3xl uppercase font-bold'>
					Мои Контакты
				</h2>
				<ul className='text-xl flex flex-col gap-4'>
					<li data-reveal className='hover:scale-110 duration-300'>
						<a href='tel:+7 (910) 434 8861'>
							Телефон: <span className='text-orange-500'>{phoneString}</span>
						</a>
					</li>
					<li data-reveal className='hover:scale-110 duration-300'>
						<a href='mailto:m.vasilenko222@gmail.com'>
							E-mail:{' '}
							<span className='text-orange-500'>m.vasilenko222@gmail.com</span>
						</a>
					</li>
				</ul>
				<h2 data-reveal className='py-8 mt-24 text-3xl uppercase font-bold'>
					Мессенджеры
				</h2>
				<ul className='flex gap-8'>
					<li data-reveal className='hover:scale-110 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://api.whatsapp.com/send?phone=_${phone}!`}
						/>
					</li>
					<li data-reveal className='hover:scale-110 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://t.me/Prorab_maksim_msk`}
						/>
					</li>
				</ul>
				<h2 data-reveal className='py-8 mt-24 text-3xl uppercase font-bold'>
					Мои Соц. Сети
				</h2>
				<ul className='flex gap-8'>
					<li data-reveal className='hover:scale-110 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://instagram.com/prorab_maksim_msk?igshid=MzRlODBiNWFlZA==`}
						/>
					</li>
					<li data-reveal className='hover:scale-110 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://youtube.com/@prorab_maksim_msk`}
						/>
					</li>
					<li data-reveal className='hover:scale-110 duration-300'>
						<SocialIcon target='_blank' url={`https://vk.com/id654747402`} />
					</li>
				</ul>
			</div>
		</Section>
	)
}

export default ContactsSection
