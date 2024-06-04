'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import PackagePopup from '../../popup';
import { usePathname } from 'next/navigation';

const InPlayroom = () => {
	const pathname = usePathname();
	const currentPlace = pathname.split('/').pop();
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<>
			<section className='relative xl:mb-5 overflow-hidden pb-2 sm:container mx-auto'>
				<h2 className='text-center text-2xl xl:text-4xl my-[2rem] mx-[0.8rem] font-semibold uppercase sm:mb-[5rem]'>
					{currentPlace === 'sala-zabaw'
						? 'Urodzinki w sali zabaw'
						: 'Urodzinki w restauracji'}
				</h2>
				<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 mb-3 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
					<Image
						src='/uroczystości prywatne/urodziny/urodziny-4.png'
						alt='zdjęcie białego tortu z zółtą polewą i świeczkami, w tle dzieci'
						width={535}
						height={404}
						priority
						className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
					/>
					<div className='flex justify-center items-center mt-[3rem] mb-[1rem] sm:my-0'>
						<Image
							src='/uroczystości prywatne/urodziny/pakiet-tło-4.png'
							alt=''
							width={594}
							height={405}
							priority
							className='hidden sm:inline z-[-1] w-full sm:w-[30rem] lg:w-[32rem] my-5 lg:my-0'
						/>
						<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
							<p className='text-xl lg:text-3xl xl:text-4xl text-pink-600 mb-5 sm:text-black'>
								ZABAWA z Wykorzystaniem Przestrzeni
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
				<div className='flex justify-center items-center flex-col mx-1'>
					<p
						className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%]'
						style={{
							lineHeight: '1.6',
						}}
					>
						Oferta prezentuje Nasze Animacje jako dodatek do Imprezy
						by urozmaicić dzieciom pobyt w Lokalach, Restauracjach,
						Salach Zabaw i innych już Atrakcyjnych Miejscach.
					</p>
				</div>
			</section>
			<div className='w-full h-[1rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500'></div>
			<section className='relative xl:mb-5 overflow-hidden pb-2 sm:container mx-auto'>
				<div className='flex flex-col sm:flex-row gap-5 sm:gap-0'>
					<div className='sm:container relative mx-auto flex flex-col justify-center gap-3 items-center p-2'>
						<div className='relative flex justify-center items-center'>
							<Image
								src='/uroczystości prywatne/urodziny/pakiet-tło-5.png'
								width={663}
								height={143}
								alt=''
								className='w-[20rem] sm:w-[30rem]'
							/>
							<p className='flex justify-center gap-2 absolute text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
								Od poniedziałku do piątku
							</p>
						</div>
						<button
							className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
							onClick={() => {
								setActivePackage(
									'165 zł za godzine (w lokalach)'
								);
							}}
						>
							<Image
								src='/uroczystości prywatne/urodziny/button-4.png'
								width={574}
								height={182}
								alt='button'
								className='w-[35rem]'
							/>
							<p className='flex justify-center gap-2 absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
								165 zł za godz.
								<span className='flex items-center'>
									<FaArrowRightLong />
								</span>
							</p>
						</button>
					</div>
					<div className='sm:container relative mx-auto flex flex-col justify-center items-center gap-3 p-2'>
						<div className='relative flex justify-center items-center'>
							<Image
								src='/uroczystości prywatne/urodziny/pakiet-tło-5.png'
								width={663}
								height={143}
								alt=''
								className='w-[20rem] sm:w-[30rem]'
							/>
							<p className='flex justify-center absolute text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
								W Soboty i Niedziele
							</p>
						</div>
						<button
							className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
							onClick={() => {
								setActivePackage(
									'230 zł za godzine (w lokalach)'
								);
							}}
						>
							<Image
								src='/uroczystości prywatne/urodziny/button-4.png'
								width={574}
								height={182}
								alt='button'
								className='w-[35rem]'
							/>
							<p className='flex justify-center gap-2 absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
								230 zł za godz.
								<span className='flex items-center'>
									<FaArrowRightLong />
								</span>
							</p>
						</button>
					</div>
				</div>
				<div className='flex justify-center items-center flex-col mx-1 mt-8'>
					<p
						className='text-center text-xl  lg:text-4xl font-semibold lg:w-[60%] bg-purple-300 rounded-xl p-2'
						style={{
							lineHeight: '1.6',
						}}
					>
						Animator Zabierze ze sobą odpowiedni sprzęt animacyjny,
						który wykorzysta w określonym lokalu.
					</p>
				</div>
				<div className='flex flex-col justify-center sm:flex-row mt-10'>
					<div className='flex flex-col justify-center items-center'>
						<p className='inline text-xl sm:text-4xl bg-purple-300 rounded-xl p-4'>
							Dodatkowe Atrakcje:
						</p>
						<Image
							src='/uroczystości prywatne/urodziny/dodatkowe atrakcje.png'
							width={574}
							height={182}
							alt='button'
							className='w-[40rem] my-[2rem]'
						/>
					</div>
					<Image
						src='/uroczystości prywatne/urodziny/dodatkowe atrakcje zdjęcia.png'
						width={574}
						height={182}
						alt='button'
						className='w-[35rem]'
					/>
				</div>
			</section>
			<div className='w-full h-[1rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500'></div>
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</>
	);
};

export default InPlayroom;
