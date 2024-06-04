'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const BirthDayPage = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<section className='flex flex-col w relative xl:mb-5 overflow-hidden pb-10'>
			<h2 className='text-center text-3xl my-3 font-semibold'>
				Dostępne pakiety:
			</h2>
			<div className='w-full flex justify-center gap-[2rem]'>
				<Link href='/uroczystosci-prywatne/urodziny/dom'>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/urodziny/w domu.png'
							alt='Zdjęcie tortu z podpisem w domu oznaczającym odnośnik do strony ofery oragnizacji urodziny w domu'
							width={533}
							height={619}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
				<Link href='/uroczystosci-prywatne/urodziny/przedszkole'>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/urodziny/w przedszkolu.png'
							alt='Zdjęcie grupki dzieci z podpisem w przedszkolu oznaczającym odnośnik do strony ofery oragnizacji urodziny w przedszkolu'
							width={533}
							height={621}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
			</div>
			<div className='flex justify-center'>
				<Image
					src='/uroczystości prywatne/urodziny/wybór.png'
					alt='napis wybierz sugerujący strzałkami opcje wyboru odnosnika do strony formy organizacji urodzin'
					width={858}
					height={411}
					className='p-2 w-[42rem]'
				/>
			</div>
			<div className='w-full flex justify-center gap-[2rem]'>
				<Link href=''>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/urodziny/w sali zabaw.png'
							alt='Zdjęcie dziecka na sali zabaw z podpisem w sali zabaw oznaczającym odnośnik do strony ofery oragnizacji urodziny na sali zabaw'
							width={533}
							height={619}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
				<Link href=''>
					<div className='cursor-pointer hover:scale-105 transition-all duration-300'>
						<Image
							src='/uroczystości prywatne/urodziny/w restauracji.png'
							alt='
							zdjęcie tortu i balonów na stole z podpisem w restauracji oznaczającym odnośnik do strony ofery oragnizacji urodziny w restauracji'
							width={533}
							height={621}
							className='p-2 w-[22rem]'
						/>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default BirthDayPage;
