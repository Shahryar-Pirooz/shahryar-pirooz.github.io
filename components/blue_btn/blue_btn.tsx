'use client'

import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

export default function BlueBtn() {
	return (
		<Link href='https://www.linkedin.com/in/shahryar-pirooz/' className='inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-strong'>
			<BsLinkedin />
			<span>Connect on LinkedIn</span>
		</Link>
	)
}
