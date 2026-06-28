import projects from '@/app/data/projects.json'
import Title from '@/components/title/title'
import Link from 'next/link'

export default function Projects() {
	return (
		<section id='projects' className='space-y-10 py-8'>
			<Title h1='my' h2='Featured Projects' />
			<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
				{projects.map((project) => (
					<Link key={project.name} href={project.url} target='_blank' rel='noopener noreferrer' className='group rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl'>
						<div className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent'>Project</div>
						<h3 className='text-2xl font-semibold'>{project.name}</h3>
						<p className='mt-3 leading-7 text-muted'>{project.description}</p>
					</Link>
				))}
			</div>
			<div className='text-center text-muted'>More on <Link href='https://github.com/Shahryar-Pirooz/' className='font-semibold text-foreground underline decoration-accent/60 underline-offset-4'>GitHub</Link></div>
		</section>
	)
}
