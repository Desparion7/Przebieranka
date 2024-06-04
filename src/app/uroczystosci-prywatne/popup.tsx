import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { packagesInfo } from '@/lib/packt-description';

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
						<div className='flex flex-col w-full justify-center my-3 mt-10'>
							<p className='uppercase text-center text-xl sm:text-2xl'>
								{activePackageInfo.packageName}
							</p>
							<p className='text-center sm:text-lg xl:text-2xl mt-2 mb-5 leading-7'>
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
