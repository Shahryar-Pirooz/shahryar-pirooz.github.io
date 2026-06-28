import BlueBtn from '@/components/blue_btn/blue_btn'

export default function Banner() {
	return (
		<section id='home' className='flex min-h-[88vh] flex-col justify-center py-16'>
			<div className='mx-auto max-w-4xl text-center'>
				<p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted'>
					Software Engineer · Frontend · Backend
				</p>
				<h1 className='text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl'>
					Building clean, resilient products with a modern edge.
				</h1>
				<p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg'>
					I design systems, ship reliable backend services, and turn complex
					ideas into polished experiences.
				</p>
				<div className='mt-10 flex flex-wrap justify-center gap-4'>
					<BlueBtn />
					<a href='#projects' className='rounded-full border border-border px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background'>
						See Projects
					</a>
				</div>
			</div>
		</section>
	)
}
