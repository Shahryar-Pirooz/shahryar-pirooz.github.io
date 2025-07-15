import AboutMe from './sections/about'
import Banner from './sections/banner'
import Projects from './sections/projects'
export default function Home() {
	return (
		<div className='container mx-auto flex flex-col w-screen px-4'>
			<Banner />
			<Projects />
			<AboutMe />
		</div>
	)
}
