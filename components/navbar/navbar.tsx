import BlueBtn from '@/components/blue_btn/blue_btn'

export default function Navbar() {
	return (
		<nav className='flex flex-nowrap px-8 py-4 sticky top-0 z-50 bg-background shadow '>
			<div className='flex-1/2'>
				<div className='text-2xl'>Shahryar Pirooz</div>
			</div>
			<div className='flex-1/2'>
				<ul className='flex flex-row  justify-end space-x-10 text-xl text-gray-500 items-center'>
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						Projects
					</li>
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						About
					</li>
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						Content
					</li>
					<li className='transition duration-100 hover:text-foreground hover:cursor-pointer'>
						<BlueBtn />
					</li>
				</ul>
			</div>
		</nav>
	)
}
