import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
	return (
		<>
			{/* Desktop Section */}
			<section className='hidden lg:block relative container mx-auto '>
				<div className='flex justify-end '>
					<Image
						src='/tło1.png'
						alt=''
						width={1766}
						height={686}
						priority
						className='w-[80%]'
					/>
					<div className='absolute flex items-center w-full'>
						<Image
							src='/Patrycja Szawara.png'
							alt='Patrycja Szawara'
							width={554}
							height={522}
							className='w-[30%]'
						/>
						<div className='flex items-center w-[70%]'>
							<p
								className='lg:text-2xl xl:text-4xl p-10 pl-0 text-center'
								style={{
									lineHeight: '1.8',
								}}
							>
								Jestem Elastycznym Animatorem który szybko
								dostosowuje się pod grupę dzieci oraz ich
								zainteresowania. Nie straszne mi występy
								sceniczne, przedstawienia oraz Żłobki.
							</p>
						</div>
					</div>
				</div>
				<div className=' w-[100%] flex justify-center items-center'>
					<Image
						src='/telefony2.png'
						alt='telefony'
						width={668}
						height={166}
					/>
				</div>
				<div className='flex'>
					<Image
						src='/tło2.png'
						alt=''
						width={1766}
						height={686}
						priority
						className='w-[80%]'
					/>
					<div className='absolute flex items-center w-full'>
						<div className='flex items-center w-[70%]'>
							<p
								className='lg:text-2xl xl:text-4xl p-10 ml-10 text-center'
								style={{
									lineHeight: '1.8',
								}}
							>
								Jestem Szalonym Animatorem który działa
								spontanicznie i ma więcej Energii niż dzieci co
								ułatwia ich zmęczenie. Działam wszędzie gdzie są
								dzieci które czekają na szaloną zabawę.
							</p>
						</div>
						<Image
							src='/Patrycja Żurek.png'
							alt='Patrycja Żurek'
							width={559}
							height={570}
							className='w-[32%]'
						/>
					</div>
				</div>
			</section>
			{/* Mobile section */}
			<section className='relative lg:hidden container mx-auto '>
				<div className='flex flex-col justify-center items-center'>
					<Image
						src='/Patrycja Szawara.png'
						alt='Patrycja Szawara'
						width={554}
						height={522}
						className='w-[60%]'
					/>
					<div className='relative top-[-3rem] z-[-2] flex justify-center items-center h-[16rem] w-full'>
						<Image
							src='/tło1.png'
							alt=''
							width={802}
							height={311}
							priority
							className='h-full'
						/>
						<div className='absolute p-6 text-center h-full sm:w-[80%] sm:text-lg'>
							<p
								className='h-full flex justify-center items-center'
								style={{
									lineHeight: '1.5',
								}}
							>
								Jestem Elastycznym Animatorem który szybko
								dostosowuje się pod grupę dzieci oraz ich
								zainteresowania. Nie straszne mi występy
								sceniczne, przedstawienia oraz Żłobki.
							</p>
						</div>
					</div>
				</div>
				<div className='relative w-[100%] flex justify-center items-center top-[-3rem]'>
					<Image
						src='/telefony2.png'
						alt='telefony'
						width={668}
						height={166}
					/>
				</div>
				<div className='flex flex-col justify-center items-center relative top-[-3rem]'>
					<Image
						src='/Patrycja Żurek.png'
						alt='Patrycja Żurek'
						width={554}
						height={522}
						className='w-[60%]'
					/>
					<div className='relative top-[-3rem] z-[-2] flex justify-center items-center h-[16rem] w-full'>
						<Image
							src='/tło2.png'
							alt=''
							width={802}
							height={311}
							priority
							className='h-full'
						/>
						<div className='absolute p-6 text-center h-full sm:w-[80%] sm:text-lg'>
							<p
								className='h-full flex justify-center items-center'
								style={{
									lineHeight: '1.5',
								}}
							>
								Jestem Szalonym Animatorem który działa
								spontanicznie i ma więcej Energii niż dzieci co
								ułatwia ich zmęczenie. Działam wszędzie gdzie są
								dzieci które czekają na szaloną zabawę.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
