import Image from 'next/image';
import React from 'react';

const MeetUs = () => {
	return (
		<section className='relative container mx-auto'>
			<div className='flex justify-center items-center relative top-[-6rem] sm:top-[-2rem]'>
				<Image
					src='/ramka1.png'
					alt='tło różowe'
					width={1766}
					height={686}
					priority
					className='w-[100%] sm:w-[80%]'
				/>
				<div className='absolute flex justify-center items-center w-[80%] sm:w-[50%] rotate-[5deg]'>
					<p
						className='text-sm sm:text-3xl xl:text-5xl p-10  text-center font-semibold'
						style={{
							lineHeight: '1.5',
						}}
					>
						Poznaj Nas i sprawdź czy właśnie Takiej Animatorki
						Potrzebujesz!
					</p>
				</div>
			</div>
		</section>
	);
};

export default MeetUs;
