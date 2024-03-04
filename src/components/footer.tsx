'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './style.module.css';
import { cities } from '@/lib/cities';
import { motion } from 'framer-motion';

type cityType = {
	name: string;
	price: string;
};
const Footer = () => {
	const [selectedCity, setSelectedCity] = useState<cityType>({
		name: 'Rzeszów',
		price: '13 km x 2 zł = 26 zł',
	});
	const handleCityClick = (cityName: cityType) => {
		setSelectedCity(cityName);
	};

	return (
		<footer>
			<div className='sm:container mx-auto flex flex-col justify-center gap-3 items-center relative top-[3rem]'>
				<Image
					src='/dojazd.png'
					alt='ilustracja jadącego samochodu od tyczyna w miejsce animacji z ifnormacją o koszcie dojazdu 2zł za km'
					width={1111}
					height={364}
					priority
					className='sm:w-[70%]'
				/>
			</div>
			<p
				className={`relative z-[-2] mt-8 flex justify-center items-center p-10 text-sm sm:text-xl lg:text-2xl text-center font-semibold h-full w-full lg:mt-3 ${styles['footer-gradient']}`}
			>
				Dojeżdżamy tam gdzie jesteśmy potrzebne !
			</p>
			<div className='w-full h-[5px] bg-white'></div>

			<div
				className={`relative mx-auto p-4 ${styles['footer-gradient']} py-6 flex flex-col items-center`}
			>
				<div className='sm:hidden flex justify-center items-center text-black sm:left-auto top-[-3rem] rounded-2xl z-[2] text-center whitespace-nowrap mb-6'>
					<Image
						src='/chmurka-mobilne.png'
						alt=''
						width={456}
						height={252}
						priority
						className='absolute w-[18rem] z-[-2] rotate-[-1deg]'
					/>
					<div id='city-info'>
						<p>Koszt dojazdu do</p>
						<p>{selectedCity.name}</p>
						<p>{selectedCity.price}</p>
					</div>
				</div>
				<div className='container sm:px-10 flex pt-10 sm:pt-0 gap-2 flex-wrap justify-center '>
					{/* Mobile  */}
					{cities.map((city) => (
						<div
							key={city.name}
							onClick={() => {
								handleCityClick(city);
								const element =
									document.getElementById('city-info');
								element?.scrollIntoView({
									behavior: 'smooth',
									block: 'start',
									inline: 'nearest',
								});
							}}
							className='relative lg:text-xl cursor-pointer hover:text-white transition-all duration-300'
						>
							{selectedCity.name === city.name ? (
								<>
									<a
										href='city-info'
										className='hidden sm:block text-white'
										onMouseLeave={() => {
											handleCityClick({
												name: '',
												price: '',
											});
										}}
									>
										{city.name},
									</a>
									<p className='text-white sm:hidden'>
										{city.name},
									</p>
								</>
							) : (
								<p
									onMouseEnter={() => {
										handleCityClick(city);
									}}
								>
									{city.name},
								</p>
							)}
							{/* Desktop  */}
							{selectedCity.name === city.name && (
								<motion.div
									className='hidden sm:flex absolute text-black p-4 m-2 top-[-13rem] left-[-6rem] w-[18rem] z-[2] justify-center items-center'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.2 }}
								>
									<Image
										src='/chmurka.png'
										alt=''
										width={456}
										height={252}
										priority
										className='absolute z-[-2] rotate-[-1deg]'
									/>
									<div className='pb-10'>
										<p>Koszt dojazdu do</p>
										<p>{city.name}</p>
										<p>{city.price}</p>
									</div>
								</motion.div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className='w-full h-[5px] bg-white'></div>
			<div
				className={`text-center mx-auto p-4 ${styles['footer-gradient']} py-5 flex flex-col sm:flex-row  sm:gap-2 justify-center`}
			>
				Strona wykonana przez{' '}
				<a
					href='https://modezp.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-600 hover:text-blue-900'
				>
					modezp.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
