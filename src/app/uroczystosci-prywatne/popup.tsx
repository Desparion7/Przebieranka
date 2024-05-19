import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const packagesInfo = [
	{
		packageName: 'Pakiet Solo',
		packageDescription:
			'Pakiet Solo zawiera 1 animatora który poprowadzi wszelkie zabawy dla dzieci. Pakiet solo jest pakietem podstawowym przystosowanym idealnie dla każdej grupy wiekowej dzieci oraz na każdy teren. Animator zorganizuje szalone zabawy, zatańczy z dziećmi na Parkiecie a nawet zaciekawi rozmową i przygotuje z dziećmi Niespodziankę dla Pary Młodej.',
	},
	{
		packageName: 'Pakiet Duo',
		packageDescription:
			'Pakiet Duo Zawiera Animatora prowadzącego i Pomocnika. Ten Pakiet idealnie sprawdza się dla dużej grupy dzieci lub kiedy jest ogromna rozbieżność wiekowa w grupie. Równie fantastycznie w Pakiecie DUO sprawdza się Maskotka gdyż pomocnik przebiera się za Postać z Bajki a Animator poprowadzi Zabawy z Maskotką.',
	},
	{
		packageName: 'Pakiet VIP',
		packageDescription:
			'Pakiet VIP to Personalne zaproszenie Wybranej PATRYCJI na Państwa Imprezę Lub wybranie innego ulubionego Animatora nawet w bardzo oblegane i rozchwytywane terminy. Wybierając Pakiet Vip otrzymują Państwo gwarancję obecności wybranej Osoby oraz niespodziankę od Animatora specjalnie dla dzieci.',
	},
	{
		packageName: '1 Animator',
		packageDescription:
			'Pakiet 1 Animator to jak nazwa wskazuje wynajęcie jednego animatora za podaną stawkę godzinową. W danej cenie jest 1 atrakcja do wyboru z podanych na stronie ',
	},
];

type PackagePopupType = {
	setActivePackage: React.Dispatch<React.SetStateAction<string | null>>;
	activePackage: string | null;
};

const PackagePopup = ({
	setActivePackage,
	activePackage,
}: PackagePopupType) => {
	const activePackageInfo = packagesInfo.find(
		(packageInfo) => packageInfo.packageName === activePackage
	);

	return (
		<AnimatePresence>
			{activePackage && activePackageInfo && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50'
					onClick={() => setActivePackage(null)}
				>
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.8 }}
						className={`p-5 xl:p-10 rounded-lg lg:w-2/4  m-4 relative bg-white text-black border-2 border-pink-600`}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							aria-label='toggle menu'
							onClick={() => setActivePackage(null)}
							className=' border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent absolute top-[0.5rem] right-[0.5rem] m-2'
						>
							<div className='relative w-[35px] h-10'>
								<div className='absolute right-0 bg-main-color border border-black top-3 h-2 w-full rotate-[135deg]' />
								<div className='absolute right-0 bg-second-color border border-black top-3 h-2 w-full rotate-[45deg]' />
							</div>
						</button>
						<div className='flex flex-col w-full justify-center my-3'>
							<p className='uppercase text-center text-2xl'>
								{activePackageInfo.packageName}
							</p>
							<p className='text-center sm:text-lg mt-2 leading-7'>
								{activePackageInfo.packageDescription}
							</p>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default PackagePopup;
