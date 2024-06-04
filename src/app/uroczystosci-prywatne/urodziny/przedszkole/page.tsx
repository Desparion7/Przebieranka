'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import PackagePopup from '../../popup';

const InKindergarten = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<>
			<section className='relative xl:mb-5 overflow-hidden pb-2 sm:container mx-auto'>
				<h2 className='text-center text-2xl xl:text-4xl my-[2rem] mx-[0.8rem] font-semibold uppercase sm:mb-[5rem]'>
					Urodzinki w Przedszkolu
				</h2>
				<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 mb-3 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
					<Image
						src='/uroczystości prywatne/urodziny/urodziny-3.png'
						alt='grupkia dzieci z przedszkolanką siedząca i grająca w karty na macie w przedszkolu'
						width={535}
						height={404}
						priority
						className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
					/>
					<div className='flex justify-center items-center mt-[3rem] mb-[1rem] sm:my-0'>
						<Image
							src='/uroczystości prywatne/urodziny/pakiet-tło-3.png'
							alt=''
							width={606}
							height={411}
							priority
							className='hidden sm:inline z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
						/>
						<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
							<p className='text-xl lg:text-3xl xl:text-4xl uppercase'>
								Wyjątkowa oferta zabawy
							</p>
						</div>
					</div>
					<Image
						src='/kleks2.png'
						alt=''
						width={613}
						height={566}
						priority
						className='absolute z-[-2] top-[2rem] left-0 w-[10rem] sm:w-[30rem]'
					/>
				</div>
				<div className='flex justify-center items-center flex-col mx-1'>
					<p
						className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%]'
						style={{
							lineHeight: '1.6',
						}}
					>
						Jeśli Dyrekcja wyrazi zgodę nic nie stoi na Przeszkodzie
						organizacji Urodzin w Przedszkolu!
					</p>
				</div>
				<div className='my-[2rem] flex flex-col justify-center items-center'>
					<h3 className='text-xl sm:text-4xl text-center mb-5 w-full bg-green-300 p-4 sm:rounded-xl'>
						Zalety organizacji urodzin w przedszkolu:
					</h3>
					<p className='text-lg sm:text-3xl text-center w-full mb-2 bg-purple-300 p-4 sm:rounded-xl'>
						Brak bałaganu po imprezie
					</p>
					<p className='text-lg sm:text-3xl text-center w-full mb-2 bg-blue-300 p-4 sm:rounded-xl'>
						Niezapomniana atrakcja dla całej grupy
					</p>
					<p className='text-lg sm:text-3xl text-center w-full mb-2 gap-2 bg-pink-300 p-4 sm:rounded-xl'>
						Wyróżnienie Solenizanta podczas zabaw w grupie
					</p>
					<p className='text-lg sm:text-3xl text-center w-full mb-2 bg-yellow-200 p-4 sm:rounded-xl'>
						Zaoszczędzony czas który trzeba by było poświęcić do
						szukania sali, zapraszania gości i szykowania przyjęcia
						gdzieś indziej.
					</p>
				</div>
			</section>
			<div className='w-full h-[1rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-cyan-300 via-teal-400 to-purple-300'></div>
			<section className='relative xl:mb-5 overflow-hidden pb-2 sm:container mx-auto'>
				<div className='sm:container relative mx-auto flex  justify-center items-center mt-10 lg:mt-16 p-2'>
					<button
						className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
						onClick={() => {
							setActivePackage('200 zł za godzine (przedszkole)');
						}}
					>
						<Image
							src='/uroczystości prywatne/urodziny/button-3.png'
							width={1044}
							height={330}
							alt='button'
							className='w-[35rem]'
						/>
						<p className='flex justify-center gap-2 absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
							200 zł za godz.
							<span className='flex items-center'>
								<FaArrowRightLong />
							</span>
						</p>
					</button>
					<Image
						src='/kleks3.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-2] top-[-4rem]  w-[10rem] sm:w-[24rem]'
					/>
				</div>
				<p className='text-lg sm:text-3xl text-center w-full mb-2 p-4 bg-blue-200'>
					Animacja obejmuję : gry i zabawy tematyczno-urodzinowe,
					głośnik z muzyką, sprzęt animacyjny, gadżety do zabaw,
					układy taneczne, akcesoria do wyzwań oraz niespodziankę.
				</p>
				<div className='my-[2rem] flex flex-col justify-center text-center bg-gray-300 p-4 sm:rounded-xl'>
					<h3 className='text-xl sm:text-4xl text-center mb-5 w-full'>
						Scenariusz Obejmuje :
					</h3>
					<p className='text-lg sm:text-3xl text-center w-full mb-2 '>
						Wspólne STO LAT , Urodzinową Bajkę przy TORCIE, Występ
						wybranej Postaci Maskotki, wspólne Zdjęcie, Życzenia i
						Wiwaty dla Solenizanta oraz Najważniejszą Wspólną Zabawę{' '}
					</p>
				</div>
				<div className='flex justify-center items-center flex-col mx-1'>
					<p
						className='text-center text-xl lg:text-4xl font-semibold lg:w-[60%]'
						style={{
							lineHeight: '1.6',
						}}
					>
						Na każdą godzinę przypada 1 darmowa atrakcja z podanych
						poniżej:
					</p>
				</div>
				<div className='flex flex-col justify-center items-center mx-3'>
					<div className='flex flex-col xl:flex-row justify-center mt-10'>
						<Image
							src='/uroczystości prywatne/zestaw-atrakcji.jpg'
							alt=''
							width={589}
							height={154}
							priority
							className='w-[40rem]'
						/>
						<Image
							src='/uroczystości prywatne/zestaw-atrakcji2.jpg'
							alt=''
							width={589}
							height={154}
							priority
							className='w-[40rem]'
						/>
					</div>
				</div>
			</section>
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</>
	);
};

export default InKindergarten;
