import { IProject } from '@/shared/types/generated/contentful'
import * as contentful from 'contentful'
import dotenv from 'dotenv'
dotenv.config()

const client = contentful.createClient({
	space:
		process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
		process.env.CONTENTFUL_SPACE_ID ||
		'test',
	accessToken:
		process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
		process.env.CONTENTFUL_ACCESS_TOKEN ||
		'test',
})

const getProjects = async () =>
	(
		await client.getEntries<IProject>({
			content_type: 'project',
		})
	).items

export { getProjects }
