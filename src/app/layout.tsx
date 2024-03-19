import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Przebieranka - Profesjonalna Animacja dla Dzieci | Podkarpacie',
	description:
		'Przebieranka - Twój klucz do niezapomnianych dziecięcych uroczystości na Podkarpaciu! Z pasją tworzymy radosne i kreatywne animacje dla dzieci, prowadzone przez doświadczone animatorki. Nasza specjalność to nie tylko profesjonalna organizacja zabaw tematycznych i interaktywnych gier, ale również wypożyczalnia kolorowych przebrań i maskotek, które przemienią każdą imprezę w magiczną przygodę. Idealne rozwiązanie na komunie, wesela, chrzciny, urodziny i inne wydarzenia, gdzie dzieciaki mogą cieszyć się bezpieczną i kreatywną rozrywką.',
	icons: {
		icon: '/logo.png',
	},
	twitter: {
		card: 'summary_large_image',
	},
	openGraph: {
		title: 'Przebieranka - Profesjonalna Animacja dla Dzieci | Podkarpacie',
		description: 'Z pasją tworzymy radosne i kreatywne animacje dla dzieci',
		url: 'https://przebieranka.pl',
		images: [
			{
				url: 'https://przebieranka.pl/opengraph-image.jpg',
				width: 911,
				height: 464,
			},
		],
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} relative overflow-x-hidden`}>
				<Header />
				<main className='-z-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
