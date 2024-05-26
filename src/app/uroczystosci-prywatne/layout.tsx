'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utilis';

type CustomButtonProps = {
	href: string;
	active: boolean;
	children: ReactNode;
};

const AtractionButton: React.FC<CustomButtonProps> = ({
	href,
	active,
	children,
}) => {
	return (
		<Link href={href}>
			<button
				className={cn(
					`px-6 py-3 lg:px-8 lg:py-4 text-white lg:text-2xl font-semibold private-events-button-bg rounded-3xl button-shadow cursor-pointer hover:scale-105 transition-all duration-300 text-nowrap`,
					{
						'private-events-button-bg-active text-white': active,
					}
				)}
			>
				{children}
			</button>
		</Link>
	);
};

export default function PrivateCelebrationsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const path = usePathname();
	const celebration = path.split('/')[2];

	let title = '';
	switch (celebration) {
		case 'wesela':
			title = 'Oferta animacji weselnej';
			break;
		case 'chrzciny':
			title = 'Oferta animacji na Chrzciny';
			break;
		case 'komunie':
			title = 'Oferta animacji na komunie';
			break;
		case 'urodziny':
			title = 'Oferta animacji na urodziny';
			break;
		case 'wydarzenia-rodzinne':
			title = 'Oferta animacji na wydarzenia rodzinne';
			break;
		case 'inne':
			title = 'Oferta animacji na pozostałe wydarzenia';
			break;
		default:
			title = 'Oferta animacji';
	}

	return (
		<>
			<section className='relative xl:mb-5 overflow-hidden pb-5'>
				<div className='sm:container sm:relative mx-auto flex justify-center items-center my-8 lg:mt-16 xl:mt-20 '>
					<Image
						src='/kleks6.png'
						alt=''
						width={266}
						height={244}
						priority
						className='absolute z-[-4] top-[1rem] right-0 w-[5rem] sm:w-[10rem] xl:w-[16rem]'
					/>
					<Image
						src='/kleks3.png'
						alt=''
						width={796}
						height={676}
						priority
						className='absolute z-[-4] top-[0.5rem] left-0 w-[5rem] sm:w-[10rem] xl:w-[16rem]'
					/>
					<div className='flex justify-center items-center '>
						<h1 className='p-2 lg:p-10 rounded-3xl uppercase font-bold text-2xl lg:text-3xl 2xl:text-4xl text-black text-center'>
							{title}
						</h1>
					</div>
				</div>
				<div className='px-2 lg:container mx-auto flex justify-center items-center gap-5 lg:gap-10 flex-wrap'>
					<AtractionButton
						href={'/uroczystosci-prywatne/wesela'}
						active={celebration === 'wesela'}
					>
						Wesela
					</AtractionButton>
					<AtractionButton
						href={'/uroczystosci-prywatne/chrzciny'}
						active={celebration === 'chrzciny'}
					>
						Chrzciny
					</AtractionButton>
					<AtractionButton
						href={'/uroczystosci-prywatne/komunie'}
						active={celebration === 'komunie'}
					>
						Komunie
					</AtractionButton>
					<AtractionButton
						href={'/uroczystosci-prywatne/urodziny'}
						active={celebration === 'urodziny'}
					>
						Urodziny
					</AtractionButton>
					<AtractionButton
						href={'/uroczystosci-prywatne/wydarzenia-rodzinne'}
						active={celebration === 'wydarzenia-rodzinne'}
					>
						Wydarzenia Rodzinne
					</AtractionButton>
					<AtractionButton
						href={'/uroczystosci-prywatne/inne'}
						active={celebration === 'inne'}
					>
						Inne
					</AtractionButton>
				</div>
			</section>
			<>{children}</>
		</>
	);
}
