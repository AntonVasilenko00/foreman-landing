'use client'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { HTMLProps, useState } from 'react'
import { ContactFormModal } from '../../modals'

interface HeaderProps extends HTMLProps<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
	const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false)
	return (
		<Dialog
			open={isContactFormModalOpen}
			onOpenChange={setIsContactFormModalOpen}>
			<header className='w-full absolute top-0 left-0 z-10 bg-beige-200 text-slate-200 py-4 font-light'>
				<ul className='section-container px-10 mx-auto text-lg'>
					<li
						data-reveal
						className='opacity-0 border-b-orange-400 border-b-2 pb-1 w-fit'>
						<DialogTrigger>
							<a className='hover:opacity-80 transition-all'>Оставить заявку</a>
						</DialogTrigger>
					</li>
				</ul>
			</header>
			<ContactFormModal closeModal={() => setIsContactFormModalOpen(false)} />
		</Dialog>
	)
}

export default Header
