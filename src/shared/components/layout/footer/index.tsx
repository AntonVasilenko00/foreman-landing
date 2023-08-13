import { HTMLProps } from 'react'

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
	return (
		<footer
			data-reveal
			className='bg-white
text-orange-500 text-center py-4'>
			&copy; {new Date().getFullYear()} Прораб Максим МСК
		</footer>
	)
}

export default Footer
