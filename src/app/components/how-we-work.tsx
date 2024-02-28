import Image from 'next/image';
import React from 'react';

const HowWeWork = () => {
	return (
		<section className='relative container mx-auto flex flex-col justify-center items-center'>
			<div
				aria-labelledby='nasza-animacja'
				className='relative top-[-3rem]'
			>
				<h2 id='image-heading' className='sr-only'>
					Jeśli Nas jeszcze nie spotkałeś to nie wiesz czym jest NASZA
					ANIMACJA!, Koniecznie przeczytaj Do czego jesteśmy zdolne !
				</h2>
				<Image
					src='/tekst.jpg'
					alt=''
					width={1108}
					height={253}
					priority
					className='p-2 custom:p-0'
				/>
			</div>
			<div className='flex flex-col xl:flex-row justify-center items-center lg:text-3xl 2xl:text-4xl text-center relative top-[-1rem]'>
				<Image
					src='/zdjecie1.png'
					alt='Patrycja Szawara zbierająca piłeczki'
					width={463}
					height={539}
					priority
					className='p-2 custom:p-0 w-[16rem] xl:w-[40rem]'
				/>
				<div>
					<p
						className='bg-frame1-color p-3 lg:p-10 rounded-3xl border-8 border-frame1-border-color'
						style={{
							lineHeight: '1.5',
						}}
					>
						U nas nie ma zwyczajnej Zabawy dla nas liczy się
						ENERGIA, Śmiech, oraz tworzenie{' '}
						<span className='font-semibold'>WYZWAŃ!</span>
					</p>
				</div>
				<Image
					src='/kleks4.png'
					alt=''
					width={537}
					height={465}
					priority
					className='absolute z-[-2] top-[-20px] right-0 w-[10rem] sm:w-[30rem]'
				/>
			</div>
			<div className='flex flex-col xl:flex-row justify-center items-center lg:text-3xl 2xl:text-4xl text-center relative xl:top-[-10rem]'>
				<div className='order-2 xl:order-1'>
					<p
						className='bg-frame2-color p-3 lg:p-10 rounded-3xl border-8 border-frame2-border-color'
						style={{
							lineHeight: '1.5',
						}}
					>
						Z nami <span className='font-semibold'>Dzieci</span> się
						zmęczą i ubrudzą! popłaczą ze śmiechu...
					</p>
				</div>
				<div className='order-1 xl:order-2'>
					<Image
						src='/zdjecie3.png'
						alt='selfi z mastkotką'
						width={460}
						height={543}
						priority
						className='p-2 custom:p-0 rotate-[-10deg] w-[16rem] xl:w-full'
					/>
				</div>
				<Image
					src='/kleks3.png'
					alt='ramka'
					width={796}
					height={676}
					priority
					className='absolute z-[-2] right-[50%] w-[10rem] sm:w-[30rem]'
				/>
			</div>
			<div className='flex flex-col xl:flex-row justify-center items-center lg:text-3xl 2xl:text-4xl text-center relative mt-5 xl:top-[-16rem]'>
				<Image
					src='/zdjecie4.jpg'
					alt='Patrycja Żurek robiąca mydlane bańki dla dzieci'
					width={654}
					height={523}
					priority
					className='p-2 custom:p-0 w-[18rem] xl:w-[40rem] rotate-[5deg]'
				/>
				<div>
					<p
						className='bg-frame3-color p-3 lg:p-10 rounded-3xl border-8 border-frame3-border-color'
						style={{
							lineHeight: '1.5',
						}}
					>
						Nie zmuszamy nikogo do zabawy bo samym patrzeniem Każdy
						się{' '}
						<span className='font-semibold'>Zabawi i Uśmieje.</span>
					</p>
				</div>
				<Image
					src='/kleks1.png'
					alt=''
					width={613}
					height={566}
					priority
					className='absolute z-[-2] bottom-[-60px] right-0 w-[10rem] sm:w-[30rem]'
				/>
			</div>
			<div className='flex flex-col xl:flex-row justify-center items-center lg:text-3xl 2xl:text-4xl text-center relative mt-5 xl:top-[-20rem]'>
				<Image
					src='/zdjecie2.png'
					alt='Patrycja Szawara bawiąca się z dziecmi'
					width={461}
					height={541}
					priority
					className='p-2 custom:p-0 w-[16rem] xl:w-[40rem] rotate-[-5deg]'
				/>
				<div className='flex flex-col gap-4'>
					<p
						className='bg-frame4-color p-3 lg:px-10 rounded-3xl border-8 border-frame4-border-color relative xl:left-[-50px] z-[-1]'
						style={{
							lineHeight: '1.5',
						}}
					>
						Nie wyręczamy dzieci a pozwalamy by odkryły wszystko w
						swoim czasie!
					</p>
					<p
						className='bg-frame5-color p-3 lg:p-10 rounded-3xl border-8 border-frame5-border-color'
						style={{
							lineHeight: '1.5',
						}}
					>
						Każda Grupa jest inna więc z każdą tworzymy zupełnie
						inną <span className='font-semibold'>Przygodę.</span>
					</p>
				</div>
				<Image
					src='/kleks3.png'
					alt=''
					width={796}
					height={676}
					priority
					className='absolute z-[-2] bottom-[-20px] right-[20%] w-[10rem] sm:w-[30rem]'
				/>
			</div>
			<div className='flex  justify-center items-center lg:text-3xl 2xl:text-4xl text-center relative my-5 w-[90%] xl:mt-0'>
				<p
					className='bg-frame1-color p-3 lg:px-10 rounded-3xl border-8 border-frame1-border-color relative  xl:top-[-22rem]'
					style={{
						lineHeight: '1.5',
					}}
				>
					Dla nas nie ma dzieci{' '}
					<span className='font-semibold'>NIEMOŻLIWYCH</span> do{' '}
					<span className='font-semibold'>ZA-Animowania</span> Są
					tylko takie, które nie dostały właściwego Programu.
				</p>
			</div>
		</section>
	);
};

export default HowWeWork;
