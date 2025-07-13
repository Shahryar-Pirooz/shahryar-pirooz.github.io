import BlueBtn from '@/components/blue_btn/blue_btn'
export default function Banner() {
	const marker =
		'before:content-[" "] before:bg-[#0b6efd87] before:w-[102%] before:h-5 before:-z-3 before: before:bottom-1 before:absolute relative '
	return (
		<section className='flex flex-col justify-center text-center w-full h-full min-h-screen space-y-5 px-8'>
			<h1 className='text-2xl font-bold'>meet Shahryar Pirooz</h1>
			<div className='text-7xl font-bold leading-tight'>
				<span className={`${marker}`}>Open source</span> soul. <wbr />
				Backend bones. <wbr />
				Systems <span className={`${marker}`}>built to last</span>.
			</div>
			<div className='text-base'>
				I build systems that serve people—not just specs.
			</div>
			<div className='justify-center items-center mx-auto'>
				<BlueBtn />
			</div>
		</section>
	)
}
