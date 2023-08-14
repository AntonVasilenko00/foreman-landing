import { HTMLProps } from 'react'

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
	return (
		<footer
			data-reveal
			className='bg-white
text-orange-500  flex justify-between items-center'>
			<div className='section-container py-4'>
				<span>&copy; {new Date().getFullYear()} Прораб Максим МСК</span>
			</div>
		</footer>
	)
}

export default Footer
