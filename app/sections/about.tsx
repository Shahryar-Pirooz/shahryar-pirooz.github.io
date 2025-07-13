import Image from 'next/image'
import avatar from '@/public/avatar.jpg'
import {
	BsLinkedin,
	BsTelegram,
	BsGithub,
	BsStackOverflow,
	BsEnvelopeAt,
} from 'react-icons/bs'
import { IconType } from 'react-icons'
import Link from 'next/link'

type iconItem = { icon: IconType; color: string; link: string }

const icons: iconItem[] = [
	{
		icon: BsLinkedin,
		color: 'text-accent',
		link: 'https://www.linkedin.com/in/shahryar-pirooz/',
	},
	{ icon: BsTelegram, color: 'text-blue-600', link: '' },
	{ icon: BsGithub, color: 'text-foreground', link: '' },
	{ icon: BsStackOverflow, color: 'text-orange-500', link: '' },
	{ icon: BsEnvelopeAt, color: 'text-green-500', link: '' },
]

export default function AboutMe() {
	return (
		<section className='flex flex-col w-full space-y-32 pb-8'>
			<div className='h-fit'>
				<div className='text-center md:text-start font-bold text-md uppercase'>
					about
				</div>
				<div className='text-center md:text-start h-fit w-full text-5xl static md:relative font-bold before:hidden before:md:block before:content-[" "] before:bg-foreground before:w-15 before:h-1 before:md:absolute before:md:-bottom-4'>
					I&apos;m Shahryar Pirooz
				</div>
			</div>
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
										className={`hover:scale-125 hover:cursor-pointer transition duration-500 text-gray-400 hover:${color}`}
									/>
								</Link>
							)
						})}
					</div>
				</div>
				<div className='text-justify w-full md:w-2/3'>
					<div>
						<p>
							Hi, I&apos;m Shahryar Pirooz — a full-stack developer with a
							strong passion for building modern, scalable, and secure systems.
							My main tech stack includes:
						</p>

						<ul className='m-3 list-disc list-inside'>
							<li>🌐 Frontend: Next.js, React, Tailwind CSS</li>
							<li>
								🔧 Backend: Go (Golang) — including CLI tools and microservices
							</li>
							<li>
								🗄️ Data Layer: PostgreSQL for persistence, Redis for caching
							</li>
							<li>⚙️ DevOps: Docker, Git, GitHub CI/CD, Linux systems</li>
							<li>
								🛰️ Infrastructure: Hands-on experience with NAS servers and
								Caddy for web serving
							</li>
						</ul>

						<p>
							I&apos;m deeply interested in DevOps, cloud-native development,
							and web application security — particularly penetration testing.
							My focus is on mastering Go and PostgreSQL, strengthening my
							infrastructure skills, and continuously improving as a full-stack
							engineer.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
