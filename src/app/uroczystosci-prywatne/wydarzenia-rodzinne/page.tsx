'use client';
import Image from 'next/image';
import React from 'react';

const FamilyEventsPage = () => {
	return (
		<section className='relative xl:mb-10 overflow-hidden pb-10'>
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
					<h2 className='p-2 lg:p-10 rounded-3xl uppercase font-bold text-xl lg:text-3xl 2xl:text-4xl text-fourth-color text-center'>
						Oferta animacji na wydarzenia rodzinne
					</h2>
				</div>
			</div>
		</section>
	);
};

export default FamilyEventsPage;
