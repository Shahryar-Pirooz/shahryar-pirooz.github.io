import BlueBtn from '@/components/blue_btn/blue_btn'
export default function Banner() {
	return (
		<section className='flex flex-col justify-center text-center w-full h-full min-h-screen space-y-5'>
			<div className='text-2xl font-bold'>meet Shahryar Pirooz</div>
			<div className='text-7xl font-bold leading-tight'>
				Open source soul. <wbr />
				Backend bones. <wbr />
				Systems built to last.
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
