'use client'

import { useState } from 'react'
import BlueBtn from '@/components/blue_btn/blue_btn'
import { navbarItemType } from '@/types/navbra-item'

const navbarItems: navbarItemType[] = [
	{ text: 'Projects', link: '#projects' },
	{ text: 'About', link: '#about' },
	{ text: 'Contact', link: '#contact' },
]

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className='sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl'>
			<div className='container mx-auto flex items-center justify-between px-4 py-4 md:px-8'>
				<a href='#home' className='text-lg font-semibold tracking-tight md:text-xl'>
					Shahryar Pirooz
				</a>

				<div className='flex items-center gap-2 md:gap-4'>
					<button className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface md:hidden' onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu'>
						<span className='text-xl'>{menuOpen ? '×' : '☰'}</span>
					</button>
				</div>

				<ul className='hidden items-center gap-8 md:flex'>
					{navbarItems.map(({ text, link }) => (
						<li key={text} className='text-sm font-medium text-foreground/70 transition hover:text-foreground'>
							<a href={link}>{text}</a>
						</li>
					))}
					<li>
						<BlueBtn />
					</li>
				</ul>
			</div>

			{menuOpen && (
				<div className='border-t border-border bg-background px-4 pb-4 md:hidden'>
					<ul className='flex flex-col gap-4 pt-4'>
						{navbarItems.map(({ text, link }) => (
							<li key={text} className='text-base text-foreground/75'>
								<a href={link} onClick={() => setMenuOpen(false)}>{text}</a>
							</li>
						))}
						<li>
							<BlueBtn />
						</li>
					</ul>
				</div>
			)}
		</nav>
	)
}
