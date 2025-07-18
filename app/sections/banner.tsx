import BlueBtn from '@/components/blue_btn/blue_btn'
export default function Banner() {
	const marker =
		'before:content-[" "] before:bg-[#0b6efd87] before:w-[102%] before:h-5 before:-z-3 before: before:bottom-1 before:absolute relative '
	return (
		<section
			id='home'
			className='flex flex-col justify-center text-center w-full h-full min-h-screen space-y-5 px-8'
		>
			<h1 className='text-2xl font-bold'>meet Shahryar Pirooz</h1>
			<div className='text-7xl font-bold leading-tight'>
				<span className={`${marker}`}>Code with purpose</span>. <wbr />
				Architect at heart. <wbr />
				Systems <span className={`${marker}`}>crafted to scale</span>.
			</div>
			<div className='text-base'>
				I don’t just code — I design, debug, and deliver.
			</div>
			<div className='justify-center items-center mx-auto'>
				<BlueBtn />
			</div>
		</section>
	)
}
