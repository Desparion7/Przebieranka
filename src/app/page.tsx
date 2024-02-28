import AboutUs from './components/about-us';
import HowWeWork from './components/how-we-work';
import Intro from './components/intro';
import Introduction from './components/introduction';
import MediaSection from './components/media-section';
import MeetUs from './components/meet-us';

export default function Home() {
	return (
		<>
			<Intro />
			<Introduction />
			<AboutUs />
			<MeetUs />
			<MediaSection />
			<HowWeWork />
		</>
	);
}
