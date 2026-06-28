type Props = {
	h1: string
	h2: string
}

export default function Title({ h1, h2 }: Props) {
	return (
		<div className='space-y-3'>
			<p className='text-sm font-semibold uppercase tracking-[0.3em] text-accent'>{h1}</p>
			<h2 className='text-3xl font-semibold md:text-4xl'>{h2}</h2>
		</div>
	)
}
