'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const InHouse = () => {
	const [activePackage, setActivePackage] = useState<string | null>(null);
	return (
		<section className='relative xl:mb-5 overflow-hidden pb-10 sm:container mx-auto'>
			<h2 className='text-center text-2xl xl:text-4xl my-[3rem] mb-[4rem] mx-[0.8rem] font-semibold uppercase'>
				Urodzinki w domu
			</h2>
			<div className='flex flex-col xl:flex-row xl:gap-10 justify-center items-center mt-10 lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
				<Image
					src='/uroczystości prywatne/urodziny/urodziny.png'
					alt='zdjęcie białego tortu z zółtą polewą i świeczkami, w tle dzieci'
					width={803}
					height={606}
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
							Oferta WEEKENDOWA
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
						przygotowali się strojem i tematyką od zabaw po gadżety
						Animacyjne które zaskoczą Solenizanta oraz wybrać
						odpowiednie atrakcje.
					</p>
				</div>
			</div>
			<div className='sm:container relative mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 my-8 lg:mt-16 p-2 mb-5'>
				<button
					className='relative cursor-pointer hover:scale-105 transition-all duration-300  flex justify-center items-center'
					onClick={() => {
						setActivePackage('1 Animator (komunia)');
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
						setActivePackage('1 Animator + pomocnik (komunia)');
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
	);
};

export default InHouse;
