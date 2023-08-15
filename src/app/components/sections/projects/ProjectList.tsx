// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { IProject, IProjectFields } from '@/shared/types/generated/contentful'
import { HTMLProps } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper/modules'
import Image from 'next/image'

interface ProjectListProps extends HTMLProps<HTMLDivElement> {
	projects: IProject[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, ...props }) => {
	return (
		<>
			{projects.map((projectEntry: any) => {
				const project = projectEntry.fields as IProjectFields
				const images = project?.images?.map(
					(entry) => entry.fields.file?.url?.toString() || ''
				)
				return (
					<Project
						key={projectEntry.sys.id}
						title={project.address}
						description={project.description || ''}
						images={images}
					/>
				)
			})}
		</>
	)
}

interface ProjectProps extends HTMLProps<HTMLLIElement> {
	images?: string[]
	title: string
	description: string
}

const Project: React.FC<ProjectProps> = ({
	title,
	description,
	images = [],
}) => {
	return (
		<li className='my-10'>
			<div className='mx-auto px-10'>
				<h3
					data-reveal
					className='text:xl sm:text-2xl font-bold sm:font-semibold mb-2'>
					{title}
				</h3>
				<p
					data-reveal
					className='font-thin mb-4 min-h-[4rem] flex flex-col justify-center'>
					{description}
				</p>
			</div>
			<div className='mx-10'>
				<Swiper
					data-reveal
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
					}}
					grabCursor
					keyboard={true}
					modules={[Navigation, Pagination, Keyboard, Autoplay]}>
					{images.map((url, i) => (
						<SwiperSlide key={url}>
							<div
								data-reveal
								className='bg-slate-50 relative max-h-fit w-full flex flex-col items-center justify-center'>
								<Image
									width={1920}
									height={1080}
									src={url.includes('https:') ? url : 'https:' + url}
									alt={`Фотография проекта ${i}`}
									className='min-w-full min-h-full object-contain object-center aspect-auto'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</li>
	)
}

export default ProjectList
