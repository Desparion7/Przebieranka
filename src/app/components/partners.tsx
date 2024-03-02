import Image from 'next/image';
import React from 'react';

const Partners = () => {
	return (
		<section className='relative '>
			<div className='sm:container sm:mx-auto flex flex-col justify-center items-center '>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[0] w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks1.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[0] right-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[0] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<div className='flex justify-center items-center '>
					<h2
						className='bg-frame2-color p-3 lg:p-10 rounded-3xl border-8 border-frame2-border-color uppercase font font-semibold lg:text-3xl 2xl:text-4xl'
						style={{
							lineHeight: '1.5',
						}}
					>
						Poznaj też naszych przyjaciół
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Partners;

<h2
	className='bg-frame2-color p-2 lg:px-16 py-4 rounded-3xl border-8 border-frame2-border-color uppercase font font-semibold lg:text-3xl 2xl:text-4xl text-center relative xl:bottom-[12rem]'
	style={{
		lineHeight: '1.5',
	}}
>
	Poznaj też naszych przyjaciół
</h2>;