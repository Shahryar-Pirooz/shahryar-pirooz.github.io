import projects from '@/app/data/projects.json'
import Title from '@/components/title/title'
import { Project } from '@/types/project'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

export default function Projects() {
	return (
		<section className='flex flex-col my-5'>
			<Title
				h1='Projects'
				h2='Featured Work'
			/>
			<div className='grid grid-cols-3 gap-2 w-full h-fit my-4 py-4 px-2'>
				{projects.map((project: Project, index) => {
					return (
						<div
							className='border rounded-md flex justify-around flex-col flex-nowrap py-4 px-2 space-y-2 '
							key={index}
						>
							<div className='font-bold text-xl w-full text-center underline hover:cursor-pointer'>
								<h3>{project.name}</h3>
							</div>
							<div>
								<p className='w-full text-center '>{project.description}</p>
							</div>
							<Link
								className='size-fit'
								href={project.url}
							>
								<div className='flex flex-row flex-nowrap bg-foreground text-background size-full justify-center items-center space-x-2 rounded-md px-4 py-2'>
									<BsGithub />
									<span>Code</span>
								</div>
							</Link>
						</div>
					)
				})}
			</div>
			<span className='text-5xl font-bold text-center w-full my-2'> & </span>
			<span className='text-xl text-center w-full'>
				More Projects in my
				<Link
					className='font-black'
					href='https://www.github.com/Shahryar-pirooz'
				>
					{' '}
					GITHUB{' '}
				</Link>
			</span>
		</section>
	)
}
