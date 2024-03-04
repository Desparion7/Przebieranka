import Image from 'next/image';
import React from 'react';

const Partners = () => {
	return (
		<section className='relative top-[4rem] '>
			<div className='sm:container sm:mx-auto flex flex-col justify-center items-center '>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[-2rem] w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks1.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[-1rem] right-0 w-[4rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
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
			<div className='sm:container sm:mx-auto mt-10 flex justify-center items-center gap-10 flex-wrap'>
				<Image
					src='/partnerzy/flypark.jpg'
					alt='logo flypark'
					width={419}
					height={273}
					priority
					className='z-[-2] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/partnerzy/cocoloco.jpg'
					alt='logo cocoloco'
					width={386}
					height={373}
					priority
					className='z-[-2] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
				<Image
					src='/partnerzy/wywrotkarnia.jpg'
					alt='logo wywrotki'
					width={509}
					height={236}
					priority
					className=' z-[-2] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[16rem]'
				/>
			</div>
			<div className='sm:container sm:mx-auto mt-10 flex justify-center items-center gap-10 flex-wrap'>
				<Image
					src='/partnerzy/warkoczykarnia.jpg'
					alt='logo warkoczykarnia'
					width={913}
					height={214}
					priority
					className='z-[-2] top-[-2rem] left-0 w-[12rem] xl:w-[25rem]'
				/>
				<Image
					src='/partnerzy/farma.jpg'
					alt='logo farmy'
					width={440}
					height={418}
					priority
					className='z-[-2] top-[-2rem] left-0 w-[8rem] sm:w-[10rem] xl:w-[25rem]'
				/>
			</div>
			<div className='sm:container sm:mx-auto mt-10 flex justify-center items-center gap-10 '>
				<p className=' sm:text-3xl text-center'>
					Dział przyjaciół będzie rozszeżony na czasie!
				</p>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-3]  right-0 w-[6rem] sm:w-[10rem] xl:w-[16rem]'
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
			<div className='sm:container sm:mx-auto mt-10 flex justify-center items-center '>
				<Image
					src='/tło5.png'
					alt=''
					width={972}
					height={256}
					priority
					className='h-full sm:w-[80%] sm:h-[20rem] lg:h-[14rem] lg:w-[90%]'
				/>
				<div className='absolute p-6 text-center h-full sm:w-[60%] lg:w-[50%] text-sm sm:text-3xl'>
					<p
						className='h-full flex justify-center items-center'
						style={{
							lineHeight: '1.5',
						}}
					>
						Chcesz zostać naszym Nowym Przyjacielem? Masz ciekawe
						miejsce, lokal, pomysł?
					</p>
				</div>
			</div>
			<div className='sm:container sm:mx-auto flex justify-center items-center '>
				<Image
					src='/tło6.png'
					alt=''
					width={972}
					height={256}
					priority
					className='h-[8rem] sm:w-[80%] sm:h-[14rem]'
				/>
				<div className='absolute p-6 text-center h-full sm:w-[70%] text-sm sm:text-3xl'>
					<p
						className='h-full flex justify-center items-center'
						style={{
							lineHeight: '1.5',
						}}
					>
						Zapraszamy do kontaktu by razem stworzyć coś
						wyjątkowego!
					</p>
				</div>
				<Image
					src='/kleks3.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-3] left-0 w-[2rem] sm:w-[10rem] xl:w-[16rem] rotate-45'
				/>
				<Image
					src='/kleks3.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-3] right-0 w-[2rem] sm:w-[10rem] xl:w-[16rem]'
				/>
			</div>
			<div className='sm:container sm:mx-auto flex justify-center items-center relative top-[-1rem] sm:top-[-3rem]  z-[-4]'>
				<Image
					src='/partners-img.jpg'
					alt='Patrycji Szawara i Patrycja Żurek telefon 793 200 796 Razem możemy więcej'
					width={1576}
					height={633}
					priority
					className='sm:w-[90%]'
				/>
			</div>
		</section>
	);
};

export default Partners;
