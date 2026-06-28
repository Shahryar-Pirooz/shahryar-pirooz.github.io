import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='pb-10 pt-4 text-sm text-muted'>
			<div className='flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between'>
				<p>Shahryar Pirooz © {new Date().getFullYear()}</p>
				<div className='flex flex-wrap gap-4'>
					<Link href='https://github.com/Shahryar-Pirooz/shahryar-pirooz.github.io' target='_blank' className='hover:text-foreground'>Source</Link>
					<Link href='mailto:dev.shahryar@gmail.com' className='hover:text-foreground'>Email</Link>
				</div>
			</div>
		</footer>
	)
}
