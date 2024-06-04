import Image from 'next/image';
import React from 'react';
import AttractionsPriceList from '../../_components/attractions-price-list';

const LimitOffert = () => {
	return (
		<>
			<section className='relative overflow-hidden sm:container mx-auto'>
				<div className='flex flex-col justify-center items-center text-center gap-3 bg-gradient-to-r from-red-300 via-orange-200 to-yellow-200 w-full p-4 sm:p-10 my-[1rem]'>
					<h3 className='text-xl sm:text-4xl font-semibold uppercase'>
						Weekendowa dobra godzina
					</h3>
					<p className='text-lg sm:text-3xl font-semibold'>
						Animacja między 9:00 a 13:00 w super Cenie!
					</p>
				</div>
				<h3 className='text-xl sm:text-4xl text-center mb-5 w-full bg-yellow-200 p-4 sm:rounded-xl'>
					Jeśli cenisz sobie jakość usług oraz lubisz dobre okazje, ta
					oferta jest właśnie dla Ciebie!
				</h3>
				<div className='flex flex-col sm:flex-row justify-center'>
					<div className='order-1 sm:order-[-1] flex flex-col justify-center items-center'>
						<Image
							src='/uroczystości prywatne/urodziny/limitowana.png'
							alt='dziewczyny przybijajace sobie żółwika'
							width={535}
							height={404}
							priority
							className='w-[16rem] sm:w-[32rem] xl:w-[36rem]'
						/>
						<div className='bg-pink-400 flex justify-center items-center text-3xl sm:text-5xl translate-y-[-0.4rem] sm:rounded-2xl p-4 w-full'>
							<p>Cena:</p>
						</div>
					</div>
					<div className='flex flex-col gap-2 justify-center items-center text-center'>
						<h3 className='text-2xl sm:text-4xl font-semibold mb-5'>
							Co Zyskujesz organizując Imprezę w Sobotę lub
							Niedzielę Między 9:00 a 13:00
						</h3>
						<p className='text-xl sm:text-2xl font-semibold'>
							- Niepowtarzalną Cenę za Animację
						</p>
						<p className='text-xl sm:text-2xl font-semibold'>
							- Większą Dostępność Terminów
						</p>
						<p className='text-xl sm:text-2xl font-semibold'>
							- Pakiet VIP z Najlepszym Animatorem
						</p>
						<p className='text-xl sm:text-2xl font-semibold'>
							- Większy Wybór Darmowych Atrakcji
						</p>
						<p className='text-xl sm:text-2xl font-semibold'>
							- Aktywny Poranek dla dzieci
						</p>
						<div className='flex flex-col justify-center items-center'>
							<Image
								src='/uroczystości prywatne/urodziny/przebieranka.png'
								alt=''
								width={221}
								height={53}
								priority
								className='p-2 custom:p-0 w-[16rem] xl:w-[16rem]'
							/>
							<p className='mt-2 sm:text-2xl'>
								*Oferta dla osób Prywatnych dla grupy do 20
								uczestników.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className='w-full p-4 flex justify-center items-center text-center bg-pink-400'>
				<p className='text-3xl sm:text-4xl font-bold'>
					Tylko 170 zł za Godzinę! + Dojazd
				</p>
			</div>
			<section className='relative overflow-hidden sm:container mx-auto'>
				<p className='text-xl sm:text-3xl my-[2rem]  text-center'>
					Pakiet Zawiera 1 ANIMATORA, sprzęt Animacyjny, gadżety do
					Zabawy, Głośnik z muzyką, akcesoria do prowadzenia zabaw
					tematycznych, Plan Zabaw i Atrakcji dostosowany personalnie
					pod Państwa Imprezę.
				</p>
				<p className='text-xl sm:text-3xl mb-[2rem] text-center font-semibold'>
					Na Każdą Godzinę Przypada 1 darmowa atrakcja z wymienionych
					poniżej :
				</p>
				<div className='flex flex-col justify-center items-center mx-3'>
					<div className='flex flex-col xl:flex-row justify-center mt-10'>
						<Image
							src='/uroczystości prywatne/zestaw-atrakcji.jpg'
							alt=''
							width={589}
							height={154}
							priority
							className='w-[40rem]'
						/>
						<Image
							src='/uroczystości prywatne/zestaw-atrakcji2.jpg'
							alt=''
							width={589}
							height={154}
							priority
							className='w-[40rem]'
						/>
					</div>
				</div>
			</section>
			<AttractionsPriceList showMoreAttractions={false} />
		</>
	);
};

export default LimitOffert;
