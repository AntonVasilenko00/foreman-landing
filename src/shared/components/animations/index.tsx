import { PropsWithChildren } from 'react'

export const RevealOpacity: React.FC<PropsWithChildren> = ({ children }) => (
	<div data-reveal className='opacity-0'>
		{children}
	</div>
)
