import { HTMLProps } from 'react'

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
	return (
		<footer
			className='bg-white
text-orange-500 flex justify-between items-center'>
			<div className='section-container py-4 md:text-center'>
				<span data-reveal>
					&copy; {new Date().getFullYear()} Прораб Максим МСК
				</span>
			</div>
		</footer>
	)
}

export default Footer
