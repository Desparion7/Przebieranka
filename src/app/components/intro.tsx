'use client';
import React from 'react';
import Image from 'next/image';

const Intro = ({}) => {
	return (
		<section className='relative flex justify-center items-center w-[100vw]'>
			<div>
				<Image
					src='/intro.png'
					alt='Patrycja Szawara i Patrycja Żurek'
					sizes='100vw'
					width={1923}
					height={784}
					priority
					className='hidden sm:block z-[-3]'
				/>
				<Image
					src='/intro-mobile.png'
					alt='Patrycja Szawara i Patrycja Żurek'
					sizes='100vw'
					width={1352}
					height={761}
					priority
					className='sm:hidden z-[-3] '
				/>
			</div>
		</section>
	);
};

export default Intro;
