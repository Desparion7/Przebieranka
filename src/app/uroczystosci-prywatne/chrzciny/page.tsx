'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PackagePopup from '../popup';
import { FaArrowRightLong } from "react-icons/fa6";
import AttractionsPriceList from '../_components/attractions-price-list';

const ChristeningPage = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<section className='relative xl:mb-5 overflow-hidden pb-10 sm:container mx-auto'>
			<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
				<Image
					src='/uroczystości prywatne/chrzciny/chrzciny.png'
					alt='małe dziecko w papierowym koszyku z plasteliny'
					width={833}
					height={639}
					priority
					className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
				/>
				<div className='flex justify-center items-center my-[3rem] sm:my-0'>
					<Image
						src='/uroczystości prywatne/chrzciny/pakiet-tło.png'
						alt=''
						width={585}
						height={384}
						priority
						className='hidden sm:inline z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
					/>
					<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
						<p className='text-xl lg:text-3xl'>
							Poznaj Nasze Pakiety na Chrzciny
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
					src='/uroczystości prywatne/chrzciny/ramka-uroczystości.png'
					alt=''
					width={1527}
					height={761}
					priority
					className='hidden sm:block w-full h-[36rem] xl:w-[80%]'
				/>
				<Image
					src='/uroczystości prywatne/chrzciny/ramka-uroczystości-mobile.png'
					alt=''
					width={735}
					height={1433}
					priority
					className='sm:hidden w-full h-[32rem] custom:h-[26rem] xl:w-[80%]'
				/>
				<div className='absolute flex w-[100%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
					<p
						className='md:text-2xl xl:text-3xl p-4 mx-10 custom:mx-12 text-center'
						style={{
							lineHeight: '1.6',
						}}
					>
						Oferta zawiera podstawowe gry i zabawy i skierowana jest
						dla zróżnicowanej grupy wiekowej . Oferta idealnie
						nadaje się również dla małej grupy dzieci z użyciem
						wielu ciekawych gadżetów i sprzętu animacyjnego takiego
						jak chusta, tunel, kulki, piłki, lina, hulahopy, rurki
						konstrukcyjne.
					</p>
				</div>
			</div>
			<div className='sm:container relative mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 my-8 lg:mt-16 p-2 mb-5'>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
					onClick={() => {
						setActivePackage('1 Animator (chrzciny)');
					}}
				>
					<Image
						src='/uroczystości prywatne/chrzciny/button.png'
						width={1034}
						height={340}
						alt='button'
						className='w-[32rem]'
					/>
					<p className='absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-lg custom450:text-2xl sm:text-lg xl:text-3xl font-semibold flex justify-center gap-3'>
						1 Animator - 230 zł/h
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
			<AttractionsPriceList />
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</section>
	);
};

export default ChristeningPage;
