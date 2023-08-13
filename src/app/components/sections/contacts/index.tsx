import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'
import { SocialIcon } from 'react-social-icons'

interface ContactsSectionProps extends HTMLProps<HTMLDivElement> {}

const phone = 79858580135
const phoneString = '+7 (985) 858-01-35'
const ContactsSection: React.FC<ContactsSectionProps> = ({ ...props }) => {
	return (
		<Section id='contacts' useWhiteBackgroundImage>
			<div className='section-container flex flex-col items-center'>
				<h2 data-reveal className='py-8 text-3xl uppercase font-bold'>
					Мои Контакты
				</h2>
				<ul className='text-xl flex flex-col gap-4'>
					<li data-reveal className='hover:scale-125 duration-300'>
						<a href='tel:+7 (910) 434 8861'>
							Телефон: <span className='text-orange-500'>{phoneString}</span>
						</a>
					</li>
					<li data-reveal className='hover:scale-125 duration-300'>
						<a href='mailto:mail@avenco.ru'>
							E-mail: <span className='text-orange-500'>+7 (910) 434 8861</span>
						</a>
					</li>
				</ul>
				<h2 data-reveal className='py-8 mt-24 text-3xl uppercase font-bold'>
					Мессенджеры
				</h2>
				<ul className='flex gap-8'>
					<li data-reveal className='hover:scale-125 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://api.whatsapp.com/send?phone=_${phone}&text=Hello%20there!`}
						/>
					</li>
					<li data-reveal className='hover:scale-125 duration-300'>
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
					<li data-reveal className='hover:scale-125 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://instagram.com/prorab_maksim_msk?igshid=MzRlODBiNWFlZA==`}
						/>
					</li>
					<li data-reveal className='hover:scale-125 duration-300'>
						<SocialIcon
							target='_blank'
							url={`https://youtube.com/@prorab_maksim_msk`}
						/>
					</li>
					<li data-reveal className='hover:scale-125 duration-300'>
						<SocialIcon target='_blank' url={`https://vk.com/id654747402`} />
					</li>
				</ul>
			</div>
		</Section>
	)
}

export default ContactsSection
