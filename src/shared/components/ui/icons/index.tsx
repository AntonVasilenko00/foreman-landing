import { cn } from '@/shared/utils'
import { HTMLProps, SVGProps } from 'react'

export const CheckIcon: React.FC<SVGProps<SVGElement>> = ({ ...props }) => {
	return (
		<svg
			{...(props as any)}
			role='presentation'
			className={(cn('w-8 h-8 fill-orange-500'), props.className)} // Apply the class here
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'>
			<path d='M50.2 1.9C23.5 1.9 1.7 23.7 1.7 50.4s21.8 48.5 48.5 48.5 48.4-21.8 48.5-48.5c0-26.7-21.8-48.5-48.5-48.5zm-7.3 71.4L22.7 53.2l4.2-4.3 15.8 15.7 32.1-35.4 4.4 4-36.3 40.1z'></path>
			<path d='M50.2 1.9C23.5 1.9 1.7 23.7 1.7 50.4s21.8 48.5 48.5 48.5 48.4-21.8 48.5-48.5c0-26.7-21.8-48.5-48.5-48.5zm-7.3 71.4L22.7 53.2l4.2-4.3 15.8 15.7 32.1-35.4 4.4 4-36.3 40.1z'></path>
		</svg>
	)
}
