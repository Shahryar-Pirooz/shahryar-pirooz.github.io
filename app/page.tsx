import AboutMe from './sections/about'
import Banner from './sections/banner'
import Contact from './sections/contact'
import Footer from './sections/footer'
import Projects from './sections/projects'
export default function Home() {
	return (
		<div className='flex flex-col w-screen px-4'>
			<Banner />
			<Projects />
			<AboutMe />
			<Contact />
			<Footer />
		</div>
	)
}
