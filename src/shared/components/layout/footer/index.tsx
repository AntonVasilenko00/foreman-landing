import { HTMLProps } from 'react'

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
	return (
		<footer
			data-reveal
			className='bg-white
text-orange-500 section-container py-4 flex justify-between items-center'>
			<span>&copy; {new Date().getFullYear()} Прораб Максим МСК</span>
		</footer>
	)
}

export default Footer
