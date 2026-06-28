import BlueBtn from '@/components/blue_btn/blue_btn'

export default function Contact() {
	return (
		<section id='contact' className='py-8'>
			<div className='rounded-3xl border border-border bg-foreground px-6 py-14 text-background md:px-10'>
				<div className='mx-auto max-w-3xl space-y-8 text-center'>
					<h2 className='text-4xl font-semibold md:text-5xl'>Let’s build something great.</h2>
					<p className='text-base leading-8 text-background/80 md:text-lg'>
						Want to build, fix, or improve something? I’m always open to a good
						conversation about backend systems, infrastructure, or open source.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<BlueBtn />
						<a href='mailto:dev.shahryar@gmail.com' className='rounded-full border border-background/30 px-6 py-3 font-medium transition hover:bg-background hover:text-foreground'>
							Send Email
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
