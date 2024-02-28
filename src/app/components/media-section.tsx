'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const MediaSection = () => {
	return (
		<section className='relative container mx-auto'>
			<div className='flex flex-col lg:flex-row justify-center items-center relative top-[-5rem] sm:top-[-3rem]'>
				<div className='w-[100%] lg:w-[50%]'>
					<Image
						src='/patrycje.png'
						alt='kleks'
						width={2006}
						height={1313}
						priority
					/>
				</div>
				<div className='relative h-full flex items-center justify-center'>
					<Image
						src='/ramka2.png'
						alt='ramka'
						width={537}
						height={465}
						priority
						className='w-[100%] xl:h-[400px]'
					/>
					<Image
						src='/kleks1.png'
						alt='ramka'
						width={537}
						height={465}
						priority
						className='absolute z-[-2] right-0 w-[10rem] sm:w-[24rem]'
					/>
					<div className='absolute flex justify-between items-center w-[50%] lg:mr-20 xl:mr-5'>
						<a
							href='https://www.facebook.com/Przebieranka'
							target='_blank'
							rel='noopener noreferrer'
						>
							<motion.div
								className='w-[3rem] sm:w-[6rem] xl:w-[8rem] cursor-pointer'
								whileHover={{ scale: 1.05 }}
							>
								<Image
									src='/facebook.png'
									alt='ramka'
									width={250}
									height={251}
									priority
								/>
							</motion.div>
						</a>
						<a
							href='https://www.instagram.com/przebieranka/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<motion.div
								className='w-[3rem] sm:w-[6rem] xl:w-[8rem] cursor-pointer'
								whileHover={{ scale: 1.05 }}
							>
								<Image
									src='/instagram.png'
									alt='ramka'
									width={250}
									height={251}
									priority
								/>
							</motion.div>
						</a>
						<a
							href='https://www.youtube.com/Przebieranka'
							target='_blank'
							rel='noopener noreferrer'
						>
							<motion.div
								className='w-[3rem] sm:w-[6rem] xl:w-[8rem] cursor-pointer'
								whileHover={{ scale: 1.05 }}
							>
								<Image
									src='/youtube.png'
									alt='ramka'
									width={250}
									height={251}
									priority
								/>
							</motion.div>
						</a>
						<a
							href='https://www.tiktok.com/@przebieranka'
							target='_blank'
							rel='noopener noreferrer'
						>
							<motion.div
								className='w-[2rem] sm:w-[5rem] xl:w-[7rem] cursor-pointer'
								whileHover={{ scale: 1.05 }}
							>
								<Image
									src='/tiktok.png'
									alt='ramka'
									width={210}
									height={254}
									priority
								/>
							</motion.div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MediaSection;
