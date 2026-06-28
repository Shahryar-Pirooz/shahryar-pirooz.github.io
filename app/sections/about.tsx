import Image from 'next/image'
import avatar from '@/public/avatar.jpg'
import { BsLinkedin, BsTelegram, BsGithub, BsStackOverflow, BsEnvelopeAt } from 'react-icons/bs'
import Link from 'next/link'
import { IconItemType } from '@/types/about-icon'
import Title from '@/components/title/title'

const icons: IconItemType[] = [
	{ icon: BsLinkedin, color: 'hover:text-[#0077B5]', link: 'https://www.linkedin.com/in/shahryar-pirooz/' },
	{ icon: BsTelegram, color: 'hover:text-[#0088cc]', link: 'https://t.me/DevShahryar' },
	{ icon: BsGithub, color: 'hover:text-foreground', link: 'https://github.com/Shahryar-Pirooz' },
	{ icon: BsStackOverflow, color: 'hover:text-[#F47F24]', link: 'https://stackoverflow.com/users/8499069/shahryar-pirooz' },
	{ icon: BsEnvelopeAt, color: 'hover:text-[#BB001B]', link: 'mailto:dev.shahryar@gmail.com' },
]

export default function AboutMe() {
	return (
		<section id='about' className='space-y-10 py-8'>
			<Title h1='about' h2="Shahryar" />
			<div className='grid gap-10 rounded-3xl border border-border bg-surface p-6 shadow-xl backdrop-blur md:grid-cols-[280px_1fr] md:p-10'>
				<div className='flex flex-col items-center gap-5 text-center'>
					<Image src={avatar} alt='my avatar' height={220} width={220} className='rounded-full ring-4 ring-border' />
					<div className='flex gap-4 text-2xl text-muted'>
						{icons.map(({ icon: Icon, color, link }) => (
							<Link key={link} href={link} target='_blank' rel='noopener noreferrer'>
								<Icon className={`transition duration-300 hover:scale-110 ${color}`} />
							</Link>
						))}
					</div>
				</div>
				<div className='space-y-4 text-base leading-8 text-foreground/85'>
					<h3 className='text-2xl font-semibold'>Crafting resilient systems and mentoring builders.</h3>
					<p>Principled software engineer and open-source advocate with a decade of Linux in my bloodstream.</p>
					<p>I focus on thoughtful engineering, clean architecture, security-first delivery, and systems that scale without chaos.</p>
					<p>Currently blending backend and DevOps while building tools and guides for practical self-hosting and secure development.</p>
					<div className='rounded-2xl border border-border bg-background/60 p-5'>
						<p className='mb-3 font-semibold'>Favorite tools</p>
						<ul className='grid gap-2 text-muted md:grid-cols-2'>
							<li>Golang</li><li>PostgreSQL & Redis</li><li>Docker & Compose</li><li>CI/CD</li><li>EndeavourOS</li><li>Caddy</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
