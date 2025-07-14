'use client'
import { useState } from 'react'
import BlueBtn from '@/components/blue_btn/blue_btn'
import { navbarItemType } from '@/types/navbra-item'

const navbarItems: navbarItemType[] = [
	{
		text: 'Project',
		link: '',
	},
	{
		text: 'About',
		link: '',
	},
	{
		text: 'Contact',
		link: '',
	},
]

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className='px-8 py-4 sticky top-0 z-50 bg-background shadow'>
			<div className='flex items-center justify-between'>
				<div className='text-2xl'>Shahryar Pirooz</div>
				{/* Hamburger menu for mobile */}
				<button
					className='md:hidden flex items-center px-3 py-2'
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label='Toggle menu'
				>
					<svg
						className='h-6 w-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						{menuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>
				{/* Desktop menu */}
				<ul className='hidden md:flex flex-row justify-end space-x-10 text-xl text-gray-500 items-center'>
					{navbarItems.map(({ text, link }, index) => {
						return (
							<li
								key={index}
								className='transition duration-100 hover:text-foreground hover:cursor-pointer'
							>
								<a href={link}>{text}</a>
							</li>
						)
					})}
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						<BlueBtn />
					</li>
				</ul>
			</div>
			{/* Mobile menu */}
			{menuOpen && (
				<ul className='md:hidden flex flex-col mt-4 space-y-4 text-lg text-gray-500'>
					{navbarItems.map(({ text, link }, index) => {
						return (
							<li
								key={index}
								className='transition duration-100 hover:text-foreground hover:cursor-pointer'
							>
								<a href={link}>{text}</a>
							</li>
						)
					})}
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						<BlueBtn />
					</li>
				</ul>
			)}
		</nav>
	)
}
