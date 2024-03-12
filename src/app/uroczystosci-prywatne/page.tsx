'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type CustomButtonProps = {
	href: string;
	children: ReactNode;
};

const AtractionButton: React.FC<CustomButtonProps> = ({ href, children }) => {
	return (
		<Link href={href}>
			<button className='px-6 py-3 lg:px-8 lg:py-4 text-fourth-color lg:text-2xl font-semibold bg-button2-color border-2 border-black rounded-3xl button-shadow cursor-pointer hover:scale-105 transition-all duration-300 text-nowrap'>
				{children}
			</button>
		</Link>
	);
};

const AtractionPage = () => {
	return (
		<section className='relative xl:mb-10 overflow-hidden pb-10'>
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
					<h2 className='p-2 lg:p-10 rounded-3xl uppercase font-bold text-2xl lg:text-3xl 2xl:text-4xl text-fourth-color text-center'>
						UROCZYSTOŚCI PRYWATNE
					</h2>
				</div>
			</div>
			<div className='px-2 lg:container mx-auto flex justify-center items-center gap-5 lg:gap-10 flex-wrap'>
				<AtractionButton href={'/uroczystosci-prywatne/wesela'}>
					Wesela
				</AtractionButton>
				<AtractionButton href={'/uroczystosci-prywatne/chrzciny'}>
					Chrzciny
				</AtractionButton>
				<AtractionButton href={'/uroczystosci-prywatne/komunie'}>
					Komunie
				</AtractionButton>
				<AtractionButton href={'/uroczystosci-prywatne/urodziny'}>
					Urodziny
				</AtractionButton>
				<AtractionButton
					href={'/uroczystosci-prywatne/wydarzenia-rodzinne'}
				>
					Wydarzenia Rodzinne
				</AtractionButton>
				<AtractionButton href={'/uroczystosci-prywatne/inne'}>
					Inne
				</AtractionButton>
			</div>
		</section>
	);
};

export default AtractionPage;
