import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import ThemeFab from '@/components/theme-fab'

const notoSans = Noto_Sans({
	preload: true,
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://shahryar-pirooz.github.io'),
	title: {
		default: 'Shahryar Pirooz | Software Engineer',
		template: '%s | Shahryar Pirooz',
	},
	description: 'Personal portfolio of Shahryar Pirooz, a software engineer focused on backend systems, DevOps, and open source.',
	keywords: ['Shahryar Pirooz', 'portfolio', 'software engineer', 'frontend', 'backend', 'open source'],
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Shahryar Pirooz | Software Engineer',
		description: 'Personal portfolio of Shahryar Pirooz, a software engineer focused on backend systems, DevOps, and open source.',
		url: 'https://shahryar-pirooz.github.io',
		siteName: 'Shahryar Pirooz',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Shahryar Pirooz | Software Engineer',
		description: 'Personal portfolio of Shahryar Pirooz, a software engineer focused on backend systems, DevOps, and open source.',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Shahryar Pirooz',
		url: 'https://shahryar-pirooz.github.io',
		jobTitle: 'Software Engineer',
		sameAs: [
			'https://www.linkedin.com/in/shahryar-pirooz/',
			'https://github.com/Shahryar-Pirooz',
		],
	}

	return (
		<html lang='en'>
			<head>
				<link rel='canonical' href='https://shahryar-pirooz.github.io' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</head>
			<body className={`${notoSans.className} antialiased`}>
				<Navbar />
				<ThemeFab />
				{children}
			</body>
		</html>
	)
}
