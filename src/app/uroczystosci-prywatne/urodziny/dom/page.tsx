'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import PackagePopup from '../../popup';
import AttractionsPriceList from '../../_components/attractions-price-list';

const InHouse = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<>
			<section className='relative xl:mb-5 overflow-hidden pb-2 sm:container mx-auto'>
				<h2 className='text-center text-2xl xl:text-4xl my-[2rem] mx-[0.8rem] font-semibold uppercase sm:mb-[5rem]'>
					Urodzinki w domu
				</h2>
				<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 mb-3 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
					<Image
						src='/uroczystości prywatne/urodziny/urodziny.png'
						alt='zdjęcie białego tortu z zółtą polewą i świeczkami, w tle dzieci'
						width={535}
						height={404}
						priority
						className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[-2deg]'
					/>
					<div className='flex justify-center items-center mt-[3rem] mb-[1rem] sm:my-0'>
						<Image
							src='/uroczystości prywatne/urodziny/pakiet-tło.png'
							alt=''
							width={624}
							height={426}
							priority
							className='hidden sm:inline z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
						/>
						<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
							<p className='text-xl lg:text-3xl xl:text-4xl'>
								OFERTA WEEKENDOWA
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
						src='/uroczystości prywatne/urodziny/ramka-uroczystości.png'
						alt=''
						width={1527}
						height={761}
						priority
						className='hidden sm:block w-full h-[36rem] xl:w-[80%]'
					/>
					<Image
						src='/uroczystości prywatne/urodziny/ramka-uroczystości-mobile.png'
						alt=''
						width={735}
						height={1433}
						priority
						className='sm:hidden w-full h-[28rem] custom:h-[26rem] xl:w-[80%]'
					/>
					<div className='absolute flex w-[85%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
						<p
							className='md:text-2xl xl:text-3xl p-4 mx-5 custom:mx-12 text-center'
							style={{
								lineHeight: '1.6',
							}}
						>
							Standardowa oferta animacji urodzinowych. Prosimy
							opowiedzieć o tym wyjątkowym przyjęciu byśmy
							przygotowali się strojem i tematyką od zabaw po
							gadżety Animacyjne które zaskoczą Solenizanta oraz
							wybrać odpowiednie atrakcje.
						</p>
					</div>
				</div>
				<div className='sm:container relative mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 mt-10 lg:mt-16 p-2'>
					<button
						className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
						onClick={() => {
							setActivePackage('1 Animator weekend (urodziny)');
						}}
					>
						<Image
							src='/uroczystości prywatne/urodziny/button.png'
							width={1134}
							height={340}
							alt='button'
							className='w-[35rem]'
						/>
						<p className='flex justify-center gap-2 absolute translate-y-[-0.4rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-md custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
							1 Animator 250 zł/h
							<span className='flex items-center'>
								<FaArrowRightLong />
							</span>
						</p>
					</button>
					<button
						className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center gap-0 '
						onClick={() => {
							setActivePackage(
								'1 Animator + pomocnik weekend (urodziny)'
							);
						}}
					>
						<Image
							src='/uroczystości prywatne/urodziny/button-2.png'
							width={1035}
							height={340}
							alt='button'
							className='w-[35rem]'
						/>
						<p className=' absolute translate-y-[-0.3rem] xl:translate-y-[-0.6rem] text-center w-full uppercase text-white text-lg custom450:text-2xl sm:text-lg xl:text-2xl font-semibold'>
							Animator + Pomocnik
							<span className='flex items-center justify-center gap-2'>
								300 zł/h
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
			<div className='w-full h-[5rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-500'>
				<h3 className='text-lg lg:text-3xl font-semibold text-white'>
					Powyżej 3h każda kolejna godzina 20% taniej
				</h3>
			</div>
			<section className='relative xl:mb-5 overflow-hidden pb-5 sm:container mx-auto'>
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
			<div className='w-full h-[1rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-500'></div>
			<section className='relative xl:mb-5 overflow-hidden pb-5 sm:container mx-auto'>
				<h2 className='text-center text-2xl xl:text-4xl my-[1rem] mx-[0.8rem] font-semibold uppercase'>
					Urodzinki w domu
				</h2>
				<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
					<Image
						src='/uroczystości prywatne/urodziny/urodziny-2.png'
						alt='kolorowy tort'
						width={554}
						height={432}
						priority
						className='p-2 custom:p-0 w-[16rem] sm:w-[32rem] xl:w-[36rem] rotate-[2deg]'
					/>
					<div className='flex justify-center items-center my-[2rem] sm:my-0'>
						<Image
							src='/uroczystości prywatne/urodziny/pakiet-tło-2.png'
							alt=''
							width={641}
							height={437}
							priority
							className='hidden sm:inline z-[-1] w-full sm:w-[26rem] lg:w-[32rem] my-5 lg:my-0'
						/>
						<div className='absolute flex justify-center w-[70%] lg:w-[330px] font-semibold'>
							<p className='text-xl lg:text-3xl xl:text-4xl'>
								OFERTA TYGODNIOWA
							</p>
						</div>
					</div>
					<Image
						src='/kleks1.png'
						alt=''
						width={613}
						height={566}
						priority
						className='absolute z-[-2] top-[2rem] right-0 w-[10rem] sm:w-[30rem]'
					/>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src='/uroczystości prywatne/urodziny/ramka-uroczystości-2.png'
						alt=''
						width={1583}
						height={788}
						priority
						className='hidden sm:block w-full h-[36rem] xl:w-[80%]'
					/>
					<Image
						src='/uroczystości prywatne/urodziny/ramka-uroczystości-mobile-2.png'
						alt=''
						width={726}
						height={1460}
						priority
						className='sm:hidden w-full h-[28rem] custom:h-[26rem] xl:w-[80%]'
					/>
					<div className='absolute flex w-[85%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
						<p
							className='md:text-2xl xl:text-3xl p-4 mx-5 custom:mx-12 text-center'
							style={{
								lineHeight: '1.6',
							}}
						>
							OFERTA NIESZABLONOWA Która obejmuje Zabawy w
							tygodniu. Pakiet zawiera atrakcyjną cenę oraz
							większą dostępność terminów. Pakiet dopasujemy do
							Państwa Imprezy względem oczekiwań , Atrakcji i
							tematyki przyjęcia.
						</p>
					</div>
				</div>
				<div className='sm:container relative mx-auto flex  justify-center items-center mt-10 lg:mt-16 p-2'>
					<button
						className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
						onClick={() => {
							setActivePackage('1 Animator (urodziny)');
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
							1 Animator 200 zł/h
							<span className='flex items-center'>
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
			<div className='w-full h-[5rem] my-[2rem] flex justify-center items-center text-center bg-gradient-to-r from-red-300 via-red-300 to-purple-400'>
				<h3 className='text-lg lg:text-3xl font-semibold text-white'>
					Powyżej 3h każda kolejna godzina 20% taniej
				</h3>
			</div>
			<section className='relative xl:mb-5 overflow-hidden pb-5 sm:container mx-auto'>
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
			<AttractionsPriceList showMoreAttractions={true} />
			<PackagePopup
				setActivePackage={setActivePackage}
				activePackage={activePackage}
			/>
		</>
	);
};

export default InHouse;
