import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='w-full bg-foreground text-background py-10 px-6'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
				<div className='text-center md:text-left space-y-2'>
					<p>Shahryar Pirooz © {new Date().getFullYear()}</p>
					<p className='text-gray-400'>
						Based in Iran • dev.shahryar@gmail.com
					</p>
				</div>

				<div className='text-center md:text-right space-y-1'>
					<p>
						Design inspired by{' '}
						<Link
							href='https://github.com/morganjlopes/portfolio-template'
							target='_blank'
							className='underline underline-offset-2 text-accent hover:text-accent/80 transition'
						>
							Morgan J. Lopes
						</Link>
					</p>
					<p className='text-gray-500'>
						Source available on{' '}
						<Link
							href='https://github.com/Shahryar-Pirooz/shahryar-pirooz.github.io'
							target='_blank'
							className='text-accent hover:text-accent/80 underline underline-offset-2'
						>
							GitHub
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}
