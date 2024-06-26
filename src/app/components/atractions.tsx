import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Atractions = () => {
	return (
		<section className='relative xl:top-[-10rem] mb-5'>
			<div className='sm:container sm:mx-auto flex flex-col justify-center items-center '>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-3] top-[0] w-[8rem]  sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks1.png'
					alt=''
					width={613}
					height={566}
					priority
					className='absolute z-[-3] top-[0] right-0 w-[8rem]  sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={796}
					height={676}
					priority
					className='absolute z-[-3] top-[0] left-0 w-[8rem]  sm:w-[10rem] xl:w-[16rem]'
				/>
				<div className='flex justify-center items-center '>
					<h2
						className='bg-frame5-color p-3 lg:p-10 rounded-3xl border-8 border-frame5-border-color uppercase font font-semibold lg:text-3xl 2xl:text-4xl'
						style={{
							lineHeight: '1.5',
						}}
					>
						Najbardziej lubiane atrakcje:
					</h2>
				</div>
				<div className='my-10 lg:mx-auto max-w-screen-xl px-2 lg:px-4'>
					<div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja1.png'
								alt='malowanie twarzy dziecka'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja1.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-0 z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja2.png'
								alt='maskotki'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja2.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-[-1rem] z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja3.png'
								alt='wata cukrowa'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja3.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-[-2rem] z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja4.png'
								alt='pinata'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja4.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-[-3rem] z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja5.png'
								alt='balony'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja5.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-[-2rem] z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
						<div className='relative'>
							<Image
								src='/atrakcje/atrakcja6.png'
								alt='bańki mydlane'
								width={486}
								height={461}
								priority
								className='z-[-2] w-[10rem] sm:w-[25rem]'
							/>
							<Image
								src='/atrakcje/kleks-atrakcja6.png'
								alt=''
								width={486}
								height={461}
								priority
								className='absolute top-[-4rem] z-[-2] w-[10rem] sm:w-[25rem]'
							/>
						</div>
					</div>
				</div>
				<div className='w-full flex justify-center items-center mx-2 sm:mt-10'>
					<h2
						className='relative bottom-[-1rem] sm:bottom-[1rem] xl:bottom-[2rem] bg-frame4-color p-2 lg:px-16 lg:py-4 rounded-3xl border-8 border-frame4-border-color  font font-semibold text-sm sm:text-xl lg:text-3xl 2xl:text-4xl text-center'
						style={{
							lineHeight: '1.5',
						}}
					>
						Chcesz poznać wszystkie atrakcje?
					</h2>
					<Image
						src='/kleks4.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-3]  right-0 w-[6rem] sm:w-[10rem] xl:w-[16rem]'
					/>
					<Image
						src='/kleks3.png'
						alt=''
						width={796}
						height={676}
						priority
						className=' absolute z-[-3]  w-[6rem] sm:w-[10rem] xl:w-[16rem]'
					/>
					<Image
						src='/kleks4.png'
						alt=''
						width={537}
						height={465}
						priority
						className='absolute z-[-3]  left-0 w-[6rem] sm:w-[10rem] xl:w-[16rem] rotate-45'
					/>
				</div>
				<div className='sm:container sm:relative mt-16 flex justify-center items-center'>
					<Image
						src='/tło4.png'
						alt=''
						width={1103}
						height={226}
						priority
						className='absolute w-full min-h-[130px]'
					/>
					<div className='relative'>
						<Link href='/atrakcje'>
							<button className='lg:text-3xl bg-button-color px-6 py-3 lg:px-8 lg:py-4 rounded-3xl cursor-pointer hover:scale-105 z-[10] transition-all duration-300 border-2 border-black button-shadow'>
								Opisy atrakcji
							</button>
						</Link>
						<Image
							src='/kursor.png'
							alt=''
							width={81}
							height={80}
							priority
							className='absolute p-2 custom:p-0 top-[20px] sm:top-[30px] right-[-30px] sm:right-[-40px] w-[3.5rem]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Atractions;
