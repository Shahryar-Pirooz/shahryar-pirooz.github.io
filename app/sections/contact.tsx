import BlueBtn from '@/components/blue_btn/blue_btn'

export default function Contact() {
	return (
		<section
			id='contact'
			className='p-16 bg-foreground text-background text-center'
		>
			<div className='max-w-3xl mx-auto space-y-8'>
				<h2 className='text-4xl md:text-5xl font-bold'>Let’s Connect</h2>

				<p className='text-base md:text-lg leading-relaxed'>
					Whether you want to build something great, fix something broken, or
					just geek out about Go, open source, or backend infrastructure —
					I&apos; m always up for a conversation.
				</p>

				<ul className='text-left text-base md:text-lg leading-relaxed list-disc list-inside mx-auto max-w-md space-y-2'>
					<li>☕ Specialty Coffee & Open Source Culture</li>
					<li>🛠️ Go, PostgreSQL, and Microservices</li>
					<li>🔒 Web Security & PenTesting</li>
					<li>🧠 Clean Architecture & Systems Thinking</li>
				</ul>

				<div className='flex flex-wrap justify-center gap-4 pt-4'>
					<BlueBtn />
					<a
						href='mailto:dev.shahryar@gmail.com'
						className='px-6 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition font-semibold'
					>
						Send Email
					</a>
					<a
						href='https://github.com/Shahryar-Pirooz'
						target='_blank'
						rel='noopener noreferrer'
						className='px-6 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-background transition font-semibold'
					>
						View GitHub
					</a>
				</div>
			</div>
		</section>
	)
}
