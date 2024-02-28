import Image from 'next/image';
import React from 'react';

const Introduction = () => {
	return (
		<section className='relative container mx-auto mt-16 pb-5 sm:pb-20'>
			<Image
				src='/kleks4.png'
				alt='kleks'
				width={537}
				height={465}
				priority
				className='absolute top-[-50px] sm:top-[-20px] left-[-30px] z-[-1] w-[10rem] md:w-[12rem] lg:w-[24rem]'
			/>
			<Image
				src='/kleks4.png'
				alt='kleks'
				width={537}
				height={465}
				priority
				className='absolute top-[-50px] sm:top-[-20px] right-[-10px] z-[-1] w-[10rem] md:w-[12rem] lg:w-[24rem] rotate-[90deg] '
			/>
			<Image
				src='/kluczyk.png'
				alt='klucz'
				width={703}
				height={291}
				priority
				className='absolute top-[-10px] sm:top-[20px] left-[30px] z-[-1] w-[3rem] md:w-[5rem] lg:w-[14rem] '
			/>
			<div className='flex flex-col justify-center items-center'>
				<div aria-labelledby='image-heading'>
					<h1 id='image-heading' className='sr-only'>
						Przebieranka
					</h1>
					<Image
						src='/napis.png'
						alt='napis Przebieranka'
						width={1650}
						height={650}
						priority
						className='z-[-1] w-[16rem] md:w-[18rem] lg:w-[32rem]'
					/>
				</div>
				<h1 className='font-semibold text-center md:text-xl lg:text-3xl bg-third-color p-2 md:p-6 rounded-2xl mt-3'>
					Twój Klucz do Śmiechu i Niezapomnianej Zabawy!
				</h1>
			</div>
		</section>
	);
};

export default Introduction;
