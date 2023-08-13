import Section from '@/shared/components/layout/section'
import { HTMLProps } from 'react'

import ProjectList from './ProjectList'
import { getProjects } from '@/shared/lib/contentful'
import { GetServerSideProps } from 'next'
import { IProject } from '@/shared/types/generated/contentful'
import useProjects from '@/shared/hooks/contentful/useProjects'

interface ProjectsSectionProps extends HTMLProps<HTMLDivElement> {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
	const projects = useProjects()

	return (
		<Section id='projects' className='bg-white text-slate-800 py-24'>
			<div className='md:section-container'>
				<h2 data-reveal className='px-8 text-4xl font-semibold'>
					Наши работы
				</h2>
				<ul className='mt-10 lg:mt-20'>
					<ProjectList projects={projects || []} />
				</ul>
			</div>
		</Section>
	)
}

export default ProjectsSection
