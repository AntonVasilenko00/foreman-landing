import cn from '@/shared/utils/cn'
import { PropsWithChildren, HTMLProps } from 'react'

interface SectionProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
	useWhiteBackgroundImage?: boolean
	useDarkBackgroundImage?: boolean
}

const Section: React.FC<SectionProps> = ({
	children,
	useWhiteBackgroundImage = false,
	useDarkBackgroundImage = false,
	...props
}) => {
	return (
		<section
			{...props}
			className={cn('relative min-h-[100vh] flex flex-col', props.className)}>
			{useWhiteBackgroundImage && (
				<>
					<div className='absolute w-full h-full bg-white-bricks bg-cover bg-center text-slate-800 z-0' />
					<div className='absolute w-full h-full bg-gradient-to-b from-white via-transparent to-white' />
				</>
			)}
			{useDarkBackgroundImage && (
				<>
					<div className='w-full h-full absolute inset-0 bg-hero bg-cover bg-center brightness-[.6] grayscale-[.3]' />
				</>
			)}
			{children}
		</section>
	)
}

export default Section
