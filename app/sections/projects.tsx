import projects from '@/app/data/projects.json'
import Title from '@/components/title/title'
import Link from 'next/link'
// import { BsGithub } from 'react-icons/bs'

export default function Projects() {
	return (
		<section
			id='projects'
			className='py-16 px-4 md:px-16'
		>
			<div className='max-w-5xl mx-auto flex flex-col space-y-10'>
				<div className='mb-8'>
					<Title
						h1='my'
						h2='Featured Projects'
					/>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<Link
							key={project.name}
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='group border border-accent p-6 rounded-2xl hover:shadow-xl hover:bg-accent transition-all duration-300'
						>
							<h3 className='text-xl font-semibold text-accent group-hover:text-background'>
								{project.name}
							</h3>
							<p className='text-foreground text-sm mt-2 group-hover:text-gray-200'>
								{project.description}
							</p>
						</Link>
					))}
				</div>
				<div className='flex flex-col justify-center items-center'>
					<span className='w-full text-center text-lg'>&</span>
					<span className='w-full text-center text-3xl'>
						More on{' '}
						<Link
							href='https://github.com/Shahryar-Pirooz/'
							className='font-black'
						>
							GitHub
						</Link>
					</span>
				</div>
			</div>
		</section>
	)
}
