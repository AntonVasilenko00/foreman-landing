import * as React from 'react'
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/shared/components/ui/dialog'

import 'react-phone-number-input/style.css'

import ContactForm from '../forms'

interface ContactFormModalProps {
	closeModal: () => void
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
	closeModal,
}) => {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Оставить заявку</DialogTitle>
				<DialogDescription>
					Заполните форму ниже для оставления заявки
				</DialogDescription>
			</DialogHeader>
			<ContactForm handleSuccess={() => closeModal()} />
		</DialogContent>
	)
}
