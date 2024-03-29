'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PackagePopup from './popup';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const WeddingPage = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<section className='relative xl:mb-5 overflow-hidden pb-10'>
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
					<h2 className='p-2 lg:p-10 uppercase font-bold text-2xl lg:text-3xl 2xl:text-4xl text-black text-center'>
						Oferta animacji weselnej
					</h2>
				</div>
			</div>
			<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center xl:mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
				<Image
					src='/zdjecie5.jpg'
					alt='dziewczynki trzymające koszyki do sypania kwiatów na weselu'
					width={1010}
					height={706}
					priority
					className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[40rem] rotate-[-2deg]'
				/>
				<div aria-labelledby='image-meet-ours'>
					<p id='image-meet-ours' className='sr-only'>
						Poznaj nasze pakiety Weselne
					</p>
					<Image
						src='/wesela1.png'
						alt='napis Poznaj nasze pakiety Weselne'
						width={585}
						height={384}
						priority
						className='z-[-1] w-[16rem] sm:w-[26rem] lg:w-[32rem]'
					/>
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
					src='/wesela2.png'
					alt=''
					width={1527}
					height={761}
					priority
					className='hidden sm:block w-full h-[40rem] custom:h-[32rem] xl:w-[80%]'
				/>
				<Image
					src='/wesela2-mobile.png'
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
						Oferta zawiera nasz autorski Program dostosowany pod
						przyjęcia Weselne. W scenariuszu mamy Zabawy
						Integracyjne, Gry i wyzwania, sprzęt Animatora taki jak:
						chusta, tunel, lina, piłeczki i wszelkiego rodzaju
						gadżety potrzebne do naszych zabaw, wyzwań, zawodów oraz
						Gierek.
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
						width={1134}
						height={340}
						alt='button'
						className='w-[32rem]'
					/>
					<p className='absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-3xl font-semibold'>
						Pakiet solo - 3H 750zł{' '}
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
						Pakiet duo - 3H 900zł
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
			<div className='flex flex-col justify-center items-center mx-3'>
				<p className='text-xl custom:2xl text-center font-semibold mb-3'>
					W Cenie Każdego PAKIETU są{' '}
					<span>
						<Image
							src='/3.png'
							width={204}
							height={204}
							alt='liczba 3'
							className='w-[3rem] l inline-block align-middle'
						/>
					</span>{' '}
					Atrakcje Wybrane Przez Państwa :
				</p>
				<div className='flex flex-col xl:flex-row justify-center mt-10'>
					<Image
						src='/zestaw-atrakcji.jpg'
						alt=''
						width={589}
						height={154}
						priority
						className='w-[40rem]'
					/>
					<Image
						src='/zestaw-atrakcji2.jpg'
						alt=''
						width={589}
						height={154}
						priority
						className='w-[40rem]'
					/>
				</div>
			</div>
			<div className='relative mt-5 sm:mt-10 flex justify-center items-center'>
				<div className='flex justify-center gap-2 items-center gradient p-2 sm:w-[80%] lg:w-[70%] xl:w-[50%] sm:rounded-2xl'>
					<Image
						src='/zegar.png'
						alt=''
						width={243}
						height={233}
						priority
						className='w-[10rem]'
					/>
					<p className='uppercase text-center font-semibold text-sm custom:text-lg sm:text-2xl'>
						Każdy pakiet można przedłużyć o dodatkową godzinę. Cena
						to 170 zł/h.
					</p>
				</div>
				<Image
					src='/kleks1.png'
					alt=''
					width={613}
					height={566}
					priority
					className='absolute z-[-4] top-[0.5rem] left-0 w-[5rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={796}
					height={676}
					priority
					className='absolute z-[-4] top-[1rem] right-0 w-[5rem] sm:w-[10rem] xl:w-[16rem]'
				/>
			</div>
			<div className='sm:container mx-auto flex flex-col justify-center items-center gap-5 mt-8 lg:mt-16 xl:mt-20 p-2'>
				<p
					className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%]'
					style={{
						lineHeight: '1.6',
					}}
				>
					Na Animacje Weselne najczęściej Jeżdżą Nasze dziewczyny z
					Bogatym Doświadczeniem , Pasją i dziecięcym Humorem.
				</p>
				<div className='relative'>
					<Image
						src='/dziewczyny.png'
						alt=''
						width={946}
						height={730}
						priority
					/>
					<Image
						src='/kleks4.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-4] top-[0.5rem] left-0 w-[5rem] sm:w-[10rem] xl:w-[22rem]'
					/>
					<Image
						src='/kleks4.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-4] bottom-[0.5rem] right-[10%] w-[5rem] sm:w-[10rem] xl:w-[26rem]'
					/>
					<Image
						src='/kleks3.png'
						alt=''
						width={796}
						height={676}
						priority
						className='absolute z-[-4] top-[1rem] right-0 w-[5rem] sm:w-[10rem] xl:w-[22rem]'
					/>
				</div>
				<p
					className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%]'
					style={{
						lineHeight: '1.6',
					}}
				>
					Jeśli Zależy Państwu Na Konkretnej Osobie Prosimy wybrać
					Pakiet VIP.
				</p>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
					onClick={() => {
						setActivePackage('Pakiet VIP');
					}}
				>
					<Image
						src='/button3.png'
						width={500}
						height={252}
						alt='button'
						className='w-[32rem]'
					/>
					<p className='absolute translate-y-[-0.5rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-3xl font-semibold mx-4 leading-5'>
						Pakiet VIP to + 100zł do
						<span className='block'>wybranego pakietu </span>
					</p>
				</button>
			</div>
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</section>
	);
};

export default WeddingPage;
