'use client';

import Image from 'next/image';

const InHouse = () => {
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
					className='sm:hidden w-full h-[32rem] custom:h-[26rem] xl:w-[80%]'
				/>
				<div className='absolute flex w-[85%] custom450:w-[85%] lg:w-[80%] xl:w-[60%]'>
					<p
						className='md:text-2xl xl:text-3xl p-4 mx-10 custom:mx-12 text-center'
						style={{
							lineHeight: '1.6',
						}}
					>
						Standardowa Oferta Animacji URODZINOWYCH. Prosimy
						opowiedzieć o Tym wyjątkowym przyjęciu byśmy
						przygotowali się strojem i tematyką od zabaw po gadżety
						Animacyjne które zaskoczą Solenizanta. Oraz wybrać
						Odpowiednie Atrakcje.
					</p>
				</div>
			</div>
		</section>
	);
};

export default InHouse;
