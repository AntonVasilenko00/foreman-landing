'use client'

import { ContactFormModal } from '@/shared/components/modals'
import { Dialog } from '@/shared/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { HTMLProps, useState } from 'react'

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
	const [modalOpen, setModalOpen] = useState(false)
	return (
		<li className='my-12 w-full'>
			<hr
				data-reveal
				className='border-orange-500 border-b-2 my-24 lg:hidden'
			/>
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
			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogTrigger className='mt-8 ml-6'>
					<a
						data-reveal
						className='block uppercase text-orange-500 drop-shadow animate-pulse animate-bounce hover:scale-110 hover:animate-none duration-700 md:text-xl'>
						Оставить заявку
					</a>
				</DialogTrigger>
				<ContactFormModal closeModal={() => setModalOpen(false)} />
			</Dialog>
		</li>
	)
}

export default PriceItem
