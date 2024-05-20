import Image from 'next/image';

const AttractionsPriceList = () => {
	return (
		<section className='flex flex-col justify-center items-center mt-2 mx-2'>
			<div className='max-w-[992px] '>
				<div className='flex justify-center items-center flex-col my-2'>
					<p className='text-center text-2xl  lg:text-5xl font-semibold  mb-5 text-yellow-400'>
						A może jeszcze więcej atrakcji ?
					</p>
					<p className='text-center text-xl  lg:text-4xl font-semibold'>
						Dorzuć i kup coś niestandardowego
					</p>
				</div>
				<div className='flex flex-wrap justify-center gap-5 mt-5'>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-1.png'
							alt='ikonka tatuaży'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Brokatowe tatuaże +65zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-2.png'
							alt='ikonka bańki'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Bańki ogniste +60zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-3.png'
							alt='ikonka zakmnięcia w bańce'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Zamykanie w bańce +70zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-4.png'
							alt='ikona waty cukrowej'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Wata cukrowa +80zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-5.png'
							alt='ikonka rurki z pianką'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Rurka z pianką +30zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-6.png'
							alt='ikonka gadżetów'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Gadżety do zabaw +30zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-7.png'
							alt='ikonka gier XXL'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Gry XXL +30zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-8.png'
							alt='ikonka popcornu'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Mini popcorn +60zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-9.png'
							alt='ikonka maskotki'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Żywa maskotka +70zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-10.png'
							alt='ikonka balonoweko pieska'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Balonowe zwierzaki +40zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-11.png'
							alt='ikonka palety z pędzlem'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Malowanie twarzy +50zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-12.png'
							alt='ikonka baniek'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Bańki mydlane +40zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-13.png'
							alt='ikonka pinaty'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Pinata +50zł do pakietu
						</p>
					</div>
					<div className='w-[7rem] text-center'>
						<Image
							src='/uroczystości prywatne/atrakcja-14.png'
							alt='ikonka pinaty'
							width={125}
							height={118}
							className='w-full'
						/>
						<p className='uppercase text-lg text-center'>
							Książeczka weselna +3zł od dziecka
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AttractionsPriceList;
