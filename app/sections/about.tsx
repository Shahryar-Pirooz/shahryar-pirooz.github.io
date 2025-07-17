import Image from 'next/image'
import avatar from '@/public/avatar.jpg'
import {
	BsLinkedin,
	BsTelegram,
	BsGithub,
	BsStackOverflow,
	BsEnvelopeAt,
} from 'react-icons/bs'
import Link from 'next/link'
import { IconItemType } from '@/types/about-icon'
import Title from '@/components/title/title'

const icons: IconItemType[] = [
	{
		icon: BsLinkedin,
		color: 'hover:text-[#0077B5]',
		link: 'https://www.linkedin.com/in/shahryar-pirooz/',
	},
	{
		icon: BsTelegram,
		color: 'hover:text-[#0088cc]',
		link: 'https://t.me/DevShahryar',
	},
	{
		icon: BsGithub,
		color: 'hover:text-foreground',
		link: 'https://github.com/Shahryar-Pirooz',
	},
	{
		icon: BsStackOverflow,
		color: 'hover:text-[#F47F24]',
		link: 'https://stackoverflow.com/users/8499069/shahryar-pirooz',
	},
	{
		icon: BsEnvelopeAt,
		color: 'hover:text-[#BB001B]',
		link: 'mailto:dev.shahryar@gmail.com',
	},
]

export default function AboutMe() {
	return (
		<section
			id='about'
			className='flex flex-col w-full space-y-32 pb-8'
		>
			<Title
				h1='about'
				h2="I'm Shahryar Pirooz"
			/>
			<div className='flex flex-col flex-nowrap md:flex-row h-full w-9/12 space-y-4 items-center mx-auto'>
				<div className='w-full md:flex-1/3 flex-row space-y-4 items-center justify-around'>
					<Image
						src={avatar}
						alt='my avatar'
						height={250}
						width={250}
						className='rounded-full mx-auto'
					/>
					<div className='flex flex-row flex-nowrap space-x-2 justify-center items-center mx-auto  transition duration-500'>
						{icons.map(({ icon: Icon, color, link }, index) => {
							return (
								<Link
									key={index}
									href={link}
								>
									<Icon
										className={`hover:scale-125 hover:cursor-pointer transition duration-500 text-gray-400 ${color}`}
									/>
								</Link>
							)
						})}
					</div>
				</div>
				<div className='text-justify w-full md:w-2/3'>
					<div>
						<h3 className='font-bold text-xl'>
							Crafting resilient systems and mentoring the next generation of
							builders.
						</h3>
						<p>
							Principled software engineer and open-source advocate with a
							decade of Linux in my bloodstream. I believe that thoughtful
							engineering, community-driven solutions, and relentless iteration
							are the bedrock of meaningful progress.
						</p>

						<p>
							I see leadership not as a title, but as a responsibility — to
							challenge assumptions, uplift teams, and always be in service of
							the mission. Whether scaling microservices, self-hosting
							infrastructure, or refining CI pipelines, I aim to build with
							clarity, security, and purpose.
						</p>

						<p>
							Currently blending backend and DevOps as I help startups harden
							and scale their systems. Also working on a personal initiative to
							teach security-first development and self-hosting through hands-on
							guides and OSS tools.
						</p>

						<span className='font-bold'>Favorite Tools:</span>

						<ul className='m-3 list-disc list-inside'>
							<li>Golang (gRPC, Fiber, Cobra)</li>
							<li>PostgreSQL & Redis</li>
							<li>Docker & Compose</li>
							<li>GitHub & CI/CD</li>
							<li>EndeavourOS (Arch) & Caddy</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
