type Props = {
	h1: string
	h2: string
}

export default function Title({ h1, h2 }: Props) {
	return (
		<div className='h-fit'>
			<div className='text-center md:text-start font-bold text-md uppercase'>
				{h1}
			</div>
			<div className='text-center md:text-start h-fit w-full text-3xl static md:relative font-semibold before:hidden before:md:block before:content-[" "] before:bg-foreground before:w-15 before:h-1 before:md:absolute before:md:-bottom-4'>
				{h2}
			</div>
		</div>
	)
}
