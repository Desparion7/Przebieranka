'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const CommunionPage = () => {
	return (
		<section className='flex flex-col w relative xl:mb-5 overflow-hidden pb-10'>
			<h2 className='text-center text-xl  sm:text-3xl my-3 font-semibold'>
				Dostępne pakiety:
			</h2>
			<div className='w-full flex justify-center gap-[2rem]'>
				<Link href='/uroczystosci-prywatne/komunie/kameralnie'>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/komunie/kameralnie.png'
							alt='dziewczyna przyjmująca pierwszą komunie z podpisem Kameralnie'
							width={533}
							height={619}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
				<Link href='/uroczystosci-prywatne/komunie/polaczone'>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/komunie/w-połączeniu.png'
							alt='Kilka dzieci w albach do komuni z podpisem w Połączeniu'
							width={533}
							height={621}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
			</div>
			<div className='flex justify-center'>
				<Image
					src='/uroczystości prywatne/komunie/wybór.png'
					alt='Pospis sugerujący wybranie pomiędzy dwiem dostępnymi opcjami organizacji komuni albo dla małej lub duzej grupy dzieci'
					width={858}
					height={411}
					className='p-2 w-[42rem]'
				/>
			</div>
		</section>
	);
};

export default CommunionPage;
