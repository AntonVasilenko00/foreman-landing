import ContactForm from '@/shared/components/forms'
import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'

interface ContactFormSectionProps extends HTMLProps<HTMLDivElement> {}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
	...props
}) => {
	return (
		<Section id='contact-form' className='bg-white min-h-0 py-20'>
			<div className='section-container  flex flex-col items-center'>
				<div className='md:w-3/4 lg:w-1/2'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-8 md:mb-16 lg:mb-24'>
						Напишите сейчас и получите{' '}
						<span className='border-b-2 border-b-red-500 animate-pulse'>
							бесплатную смету
						</span>
						!
					</h2>
					<ContactForm />
				</div>
			</div>
		</Section>
	)
}

export default ContactFormSection
