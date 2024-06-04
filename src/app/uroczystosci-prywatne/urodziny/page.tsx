'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BirthDayPage = () => {
	const router = useRouter();
	return (
		<>
			<h2 className='text-center text-xl sm:text-3xl my-[2rem] font-semibold'>
				Dostępne pakiety:
			</h2>
			<div className='flex flex-col sm:flex-row justify-center bg-gradient-to-r from-red-300 via-orange-200 to-yellow-200 w-full py-2 my-[1rem]'>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center mb-5'
					onClick={() => {
						router.push(
							'/uroczystosci-prywatne/urodziny/limitowana-oferta'
						);
					}}
				>
					<Image
						src='/uroczystości prywatne/urodziny/button-5.png'
						width={574}
						height={182}
						alt='button'
						className='w-[14rem] sm:w-[25rem]'
					/>
				</button>
				<div className='flex flex-col justify-center items-center gap-[1rem] sm:gap-[2rem] text-center mx-[0.2rem]'>
					<h3 className='text-xl sm:text-4xl font-semibold uppercase'>
						Weekendowa dobra godzina
					</h3>
					<p className='text-lg sm:text-3xl font-semibold'>
						Animacja między 9:00 a 13:00 w super Cenie!
					</p>
				</div>
			</div>
			<section className='flex flex-col w relative xl:mb-5 mx-2 overflow-hidden pb-10'>
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
					<Link href='/uroczystosci-prywatne/urodziny/sala-zabaw'>
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
					<Link href='/uroczystosci-prywatne/urodziny/restauracja'>
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
		</>
	);
};

export default BirthDayPage;
