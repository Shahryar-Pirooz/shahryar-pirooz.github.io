'use client'

import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

export default function BlueBtn() {
	return (
		<div className='bg-accent px-4 py-2 text-center text-background rounded-md w-fit'>
			<Link href='https://www.linkedin.com/in/shahryar-pirooz/'>
				<div className='text-md flex flex-row space-x-3 justify-around items-center'>
					<div>
						<BsLinkedin />
					</div>
					<div className='text-center w-full'>Connect On LinkedIn</div>
				</div>
			</Link>
		</div>
	)
}
