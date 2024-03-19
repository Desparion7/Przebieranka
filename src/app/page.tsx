import AboutUs from './components/about-us';
import Atractions from './components/atractions';
import HowWeWork from './components/how-we-work';
import Intro from './components/intro';
import Introduction from './components/introduction';
import MediaSection from './components/media-section';
import MeetUs from './components/meet-us';
import Partners from './components/partners';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ProfessionalService',
						name: 'Przebieranka - Profesjonalna Animacja dla Dzieci ',
						image: 'https://przebieranka.pl/logo.png',
						'@id': '',
						url: 'https://przebieranka.pl/',
						telephone: '+48-793-200-796',
						openingHoursSpecification: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
								],
								opens: '08:00',
								closes: '16:00',
							},
						],
						sameAs: ['https://www.facebook.com/Przebieranka'],
						serviceArea: {
							'@type': 'AdministrativeArea',
							name: 'Polska',
						},
						services: [
							{
								'@type': 'Service',
								name: 'Profesjonalna Animacja dla Dzieci',
								description:
									'Profesjonalna Animacja dla Dzieci',
							},
						],
					})}
				</script>
			</Head>
			<Intro />
			<Introduction />
			<AboutUs />
			<MeetUs />
			<MediaSection />
			<HowWeWork />
			<Atractions />
			<Partners />
		</>
	);
}
