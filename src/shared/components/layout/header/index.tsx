import { HTMLProps } from 'react'

interface HeaderProps extends HTMLProps<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
	return (
		<header className='w-full absolute top-0 left-0 z-10 bg-beige-200 text-slate-200 py-4 font-light'>
			<ul className='section-container px-10 mx-auto text-lg'>
				<li
					data-reveal
					className='opacity-0 border-b-orange-400 border-b-2 pb-1 w-fit'>
					<a href='#contacts'>Оставить заявку</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
