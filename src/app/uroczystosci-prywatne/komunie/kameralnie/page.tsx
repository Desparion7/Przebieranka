'use client';
import React, { useState } from 'react';
import PackagePopup from '../../popup';
import Image from 'next/image';
import AttractionsPriceList from '../../_components/attractions-price-list';
import { FaArrowRightLong } from 'react-icons/fa6';

const SingleCommunion = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<>
			<section className='relative xl:mb-5 overflow-hidden pb-5 sm:container mx-auto'>
				<h2 className='text-center text-2xl xl:text-4xl my-[2rem] sm:my-[3rem] mx-[0.8rem] font-semibold uppercase'>
					Oferta Komunii - Kameralnie
				</h2>
				<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
					<Image
						src='/uroczystości prywatne/komunie/komunie.png'
						alt='małe dziecko w papierowym koszyku z plasteliny'
						width={803}
						height={606}
						priority
						className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
					/>
					<div className='flex justify-center items-center mt-[3rem] mb-[1rem] sm:my-0'>
						<Image
							src='/uroczystości prywatne/komunie/pakiet-tło.png'
							alt=''
							width={624}
							height={426}
							priority
							className='hidden sm:inline z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
						/>
						<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
							<p className='text-xl lg:text-3xl xl:text-4xl'>
								Oferta dla Małej Grupy
							</p>
						</div>
					</div>
					<Image
						src='/kleks1.png'
						alt=''
						width={613}
						height={566}
						priority
						className='absolute z-[-2] top-[2rem] left-0 w-[10rem] sm:w-[30rem]'
					/>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src='/uroczystości prywatne/komunie/ramka-uroczystości.png'
						alt=''
						width={1527}
						height={761}
						priority
						className='hidden sm:block w-full h-[36rem] xl:w-[80%]'
					/>
					<Image
						src='/uroczystości prywatne/komunie/ramka-uroczystości-mobile.png'
						alt=''
						width={735}
						height={1433}
						priority
						className='sm:hidden w-full h-[32rem] custom:h-[26rem] xl:w-[80%]'
					/>
					<div className='absolute flex w-[85%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
						<p
							className='md:text-2xl xl:text-3xl p-4 mx-10 custom:mx-12 text-center'
							style={{
								lineHeight: '1.6',
							}}
						>
							Pakiet Idealny Na Komunie dla 1 max 2 Rodzin gdzie
							dzieci jest niewiele ale Atrakcji więcej. W Pakiecie
							znajdą się wszelkiego rodzaju gry i zabawy z użyciem
							sprzętu Animacyjnego oraz 1 Animator prowadzący całą
							imprezę.
						</p>
					</div>
				</div>
				<div className='sm:container relative mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 mt-8 lg:mt-16 p-2'>
					<button
						className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
						onClick={() => {
							setActivePackage('1 Animator (komunia)');
						}}
					>
						<Image
							src='/uroczystości prywatne/komunie/button.png'
							width={1034}
							height={340}
							alt='button'
							className='w-[32rem]'
						/>
						<p className='absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-lg custom450:text-2xl sm:text-lg xl:text-3xl font-semibold flex justify-center gap-3'>
							1 Animator - 250zł/h
							<span className='text-white text-lg sm:text-2xl flex items-center'>
								<FaArrowRightLong />
							</span>
						</p>
					</button>
					<Image
						src='/kleks4.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-2] top-[-4rem]  w-[10rem] sm:w-[24rem]'
					/>
				</div>
			</section>
			<div className='w-full h-[5rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 via-cyan-600 to-emerald-400'>
				<h3 className='text-lg lg:text-3xl font-semibold text-white'>
					Powyżej 3h każda kolejna godzina 20% taniej
				</h3>
			</div>
			<section className='relative xl:mb-5 overflow-hidden pb-10 sm:container mx-auto'>
				<div className='flex justify-center items-center flex-col mx-1'>
					<p
						className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%]'
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
			<AttractionsPriceList />
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</>
	);
};

export default SingleCommunion;
