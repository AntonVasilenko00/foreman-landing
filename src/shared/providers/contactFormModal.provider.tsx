'use client'
import { Dialog } from '@radix-ui/react-dialog'
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react'
import { ContactFormModal } from '../components/modals'

interface ModalContextProps {
	isOpen: boolean
	openModal: () => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const useModalContext = () => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModalContext must be used within a ModalProvider')
	}
	return context
}

const ContactFormModalProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
	}

	const closeModal = () => {
		setIsOpen(false)
	}

	const value = {
		isOpen,
		openModal,
		closeModal,
	}
	// TODO: fix
	return (
		<ModalContext.Provider value={value}>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				{children}
				<ContactFormModal closeModal={closeModal} />
			</Dialog>
		</ModalContext.Provider>
	)
}

export default ContactFormModalProvider
