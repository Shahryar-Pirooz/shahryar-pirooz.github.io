'use client'

import { useEffect, useState } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'

export default function ThemeFab() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		const stored = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		setTheme(stored)
		document.documentElement.dataset.theme = stored
	}, [])

	const toggleTheme = () => {
		setTheme((current) => {
			const next = current === 'light' ? 'dark' : 'light'
			document.documentElement.dataset.theme = next
			return next
		})
	}

	return (
		<button
			onClick={toggleTheme}
			aria-label='Toggle theme'
			className='fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:scale-105 hover:shadow-accent/20'
		>
			{theme === 'dark' ? <BsSun className='text-xl' /> : <BsMoonStars className='text-xl' />}
		</button>
	)
}
