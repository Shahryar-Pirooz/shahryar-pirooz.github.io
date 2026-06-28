import AboutMe from './sections/about'
import Banner from './sections/banner'
import Contact from './sections/contact'
import Footer from './sections/footer'
import Projects from './sections/projects'

export default function Home() {
	return (
		<main id='main-content' className='mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-8 md:px-8'>
			<Banner />
			<Projects />
			<AboutMe />
			<Contact />
			<Footer />
		</main>
	)
}
