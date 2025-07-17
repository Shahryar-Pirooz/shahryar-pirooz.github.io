import AboutMe from './sections/about'
import Banner from './sections/banner'
import Contact from './sections/contact'
import Projects from './sections/projects'
export default function Home() {
	return (
		<div className='flex flex-col w-screen px-4'>
			<Banner />
			<Projects />
			<AboutMe />
			<Contact />
		</div>
	)
}
