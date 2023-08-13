import { getProjects } from '@/shared/lib/contentful'
import { IProject } from '@/shared/types/generated/contentful'
import { Entry } from 'contentful'
import { useEffect, useState } from 'react'

const useProjects = () => {
	const [projects, setProjects] =
		useState<Entry<IProject, undefined, string>[]>()

	useEffect(() => {
		getProjects().then((projects) => setProjects(projects))
	}, [])

	return projects as unknown as IProject[]
}

export default useProjects
