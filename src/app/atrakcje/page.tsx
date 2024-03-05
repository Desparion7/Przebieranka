'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { attractions } from '@/lib/attractions';
import { FaPlus, FaRegSquareFull } from 'react-icons/fa6';
import { CgBorderStyleDashed } from 'react-icons/cg';
import { LuCircle } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

type attractionsType = {
	imgPath: string;
	name: string;
	colorClass: string;
	description: string;
	colorModalBg: string;
};
const AtractionPage = () => {
	const [activeAttraction, setActiveAttraction] =
		useState<attractionsType | null>(null);
	return (
		<section className='relative xl:mb-10 overflow-hidden'>
			<div className='sm:container sm:relative mx-auto flex justify-center items-center mt-8 lg:mt-16 xl:mt-28'>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-4] top-[-1rem] right-0 w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-4] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/tło-atrakcje.png'
					alt=''
					width={950}
					height={262}
					priority
					className='absolute w-full z-[-3]'
				/>
				<div className='flex justify-center items-center '>
					<h2 className='p-3 mb-10 lg:p-10 rounded-3xl bg-frame3-color border-8 border-frame3-border-color uppercase font font-semibold text-sm lg:text-3xl 2xl:text-4xl'>
						Poznaj nasze atrakcje
					</h2>
				</div>
			</div>
			<div className='sm:container sm:relative mx-auto flex justify-center items-center flex-wrap mt-10 xl:mt-28'>
				{attractions.map((attraction) => (
					<motion.div
						key={attraction.name}
						className={`${attraction.colorClass} rounded-full p-10 flex flex-col gap-2 m-1 xl:m-3 custom:m-2 sm:m-2 justify-center items-center w-[150px] h-[150px] custom:w-[170px] custom:h-[170px] xl:w-[300px] xl:h-[300px] bg-opacity-80 cursor-pointer relative `}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
						onClick={() => setActiveAttraction(attraction)}
					>
						<div>
							<Image
								src={attraction.imgPath}
								alt=''
								width={184}
								height={154}
								priority
								className='w-[7rem]'
							/>
						</div>
						<p className='uppercase text-[12px] xl:text-lg text-center'>
							{attraction.name}
						</p>
					</motion.div>
				))}
				<AnimatePresence>
					{activeAttraction && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'
							onClick={() => setActiveAttraction(null)}
						>
							<motion.div
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.8 }}
								className={` p-5 rounded-lg lg:w-1/4 xl:h-2/4 m-4 relative ${activeAttraction.colorModalBg}`}
								onClick={(e) => e.stopPropagation()}
							>
								<button
									aria-label='toggle menu'
									onClick={() => setActiveAttraction(null)}
									className=' border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent absolute top-[1rem] right-[1rem] m-2'
								>
									<div className='relative w-[50px] h-10'>
										<div className='absolute right-0 bg-main-color border border-black top-3 h-2 w-full rotate-[135deg]' />
										<div className='absolute right-0 bg-second-color border border-black top-3 h-2 w-full rotate-[45deg]' />
									</div>
								</button>
								<div className='flex flex-col w-full justify-center mt-32'>
									<Image
										src={activeAttraction.imgPath}
										alt=''
										width={184}
										height={154}
										priority
										className='absolute left-0 top-[1rem] w-[6rem] lg:w-[8rem]'
									/>
									<p className='uppercase text-center text-2xl'>
										{activeAttraction.name}
									</p>
									<p className='text-center mt-2'>
										{activeAttraction.description}
									</p>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
				<div className='hidden sm:block'>
					<FaPlus className='absolute text-3xl top-0 z-[-4]' />
					<FaPlus className='absolute text-3xl bottom-0  z-[-4] ' />
					<FaPlus className='absolute text-3xl top-0 left-0  z-[-4]' />
					<CgBorderStyleDashed className='absolute text-3xl top-0 right-0  z-[-4]' />
					<CgBorderStyleDashed className='absolute text-3xl  top-[50%] right-[50%]  z-[-4]' />
					<LuCircle className='absolute text-xl top-[50%] left-0  z-[-4]' />
					<LuCircle className='absolute text-xl top-[20%] right-0  z-[-4]' />
					<LuCircle className='absolute text-xl top-[50%] right-0  z-[-4]' />
					<FaRegSquareFull className='absolute text-xl top-[20%] left-[50%]  z-[-4]' />
					<FaRegSquareFull className='absolute text-xl top-[20%] left-[50%]  z-[-4]' />
					<Image
						src='/bird.png'
						alt=''
						width={63}
						height={86}
						className='absolute z-[-4] bottom-0 right-0 w-[2rem] xl:w-auto'
					/>
					<Image
						src='/bird.png'
						alt=''
						width={63}
						height={86}
						className='absolute z-[-4] top-[70%] right-[50%] rotate-[270deg] w-[2rem] xl:w-auto'
					/>
					<Image
						src='/bird.png'
						alt=''
						width={63}
						height={86}
						className='absolute z-[-4] top-[20%] left-0 w-[2rem] xl:w-auto'
					/>
				</div>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					className='absolute z-[-5] top-[50%] right-[-10rem] w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={796}
					height={676}
					className='absolute z-[-5] top-[-1rem] right-[-10rem] w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks1.png'
					alt=''
					width={613}
					height={566}
					className='absolute z-[-5] top-[10rem] left-[-10rem] w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={796}
					height={676}
					className='absolute z-[-5] bottom-[10rem] left-[-10rem] w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
			</div>
		</section>
	);
};

export default AtractionPage;
