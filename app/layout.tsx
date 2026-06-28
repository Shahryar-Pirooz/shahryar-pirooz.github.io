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
	title: 'Shahryar Pirooz | Portfolio',
	description: 'Modern portfolio for Shahryar Pirooz',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.className} antialiased`}>
				<Navbar />
				<ThemeFab />
				{children}
			</body>
		</html>
	)
}
