import AboutUs from './components/about-us';
import Intro from './components/intro';
import Introduction from './components/introduction';
import MeetUs from './components/meet-us';

export default function Home() {
	return (
		<>
			<Intro />
			<Introduction />
			<AboutUs />
			<MeetUs />
		</>
	);
}
