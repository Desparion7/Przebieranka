'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PackagePopup from '../popup';

const ChristeningPage = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<section className='relative xl:mb-5 overflow-hidden pb-10'>
			<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center xl:mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
				<Image
					src='/uroczystości prywatne/chrzciny.jpg'
					alt='małe dziecko w wiklylowym korzykiem z wiankiem na głowie i bukietem w rękach'
					width={942}
					height={1000}
					priority
					className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
				/>
				<div className='flex justify-center items-center'>
					<Image
						src='/uroczystości prywatne/pakiety-tło.png'
						alt='napis Poznaj nasze pakiety Weselne'
						width={585}
						height={384}
						priority
						className='z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
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
					src='/uroczystości prywatne/ramka-uroczystości.png'
					alt=''
					width={1527}
					height={761}
					priority
					className='hidden sm:block w-full h-[40rem] custom:h-[32rem] xl:w-[80%]'
				/>
				<Image
					src='/uroczystości prywatne/ramka-uroczystości-mobile.png'
					alt=''
					width={735}
					height={1433}
					priority
					className='sm:hidden w-full h-[40rem] custom:h-[32rem] xl:w-[80%]'
				/>
				<div className='absolute flex w-[100%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
					<p
						className='md:text-2xl xl:text-3xl p-4 mx-10 custom:mx-12 text-center'
						style={{
							lineHeight: '1.6',
						}}
					>
						Opis dla chrzcin
					</p>
				</div>
			</div>
			<div className='sm:container relative mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 my-8 lg:mt-16 p-2 mb-5'>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
					onClick={() => {
						setActivePackage('Pakiet Solo');
					}}
				>
					<Image
						src='/button1.png'
						width={1034}
						height={340}
						alt='button'
						className='w-[32rem]'
					/>
					<p className='absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-3xl font-semibold'>
						Rodzaj pakietu
					</p>
				</button>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
					onClick={() => {
						setActivePackage('Pakiet Duo');
					}}
				>
					<Image
						src='/button2.png'
						width={1035}
						height={340}
						alt='button'
						className='w-[32rem]'
					/>
					<p className='absolute translate-y-[-0.3rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-lg custom450:text-2xl sm:text-lg xl:text-3xl font-semibold'>
						Rodzaj pakietu
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
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</section>
	);
};

export default ChristeningPage;
