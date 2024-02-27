import React from 'react';
import { links } from '@/lib/links';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type MobileMenuProps = {
	handleToggleMenu: () => void;
	menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
	const handleCloseMenu = () => {
		handleToggleMenu();
		document.body.style.overflow = 'auto';
	};

	return (
		<nav className='absolute uppercase lg:hidden overflow-hidden z-[20] '>
			<AnimatePresence>
				{menuVisible && (
					<motion.div
						className='bg-black bg-opacity-20 w-screen h-screen font-semibold'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handleCloseMenu}
					>
						<motion.div
							className='absolute  h-screen w-[100%] left-0 z-[20]'
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: 100, opacity: 0 }}
							onClick={(event) => {
								event.stopPropagation();
							}}
							style={{
								background:
									'linear-gradient(90deg, rgba(247,168,233,1) 25%, rgba(135,214,244,1) 75%)',
							}}
						>
							<ul className='flex flex-col gap-2 custom:gap-4 text-black text-lg p-10  mt-10'>
								{links.map((link) => (
									<li key={link.url}>
										<Link
											href={link.url}
											onClick={handleCloseMenu}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
							<div className='flex justify-center'>
								<Image
									src='/logo2.png'
									alt='logo'
									width={245}
									height={229}
									className='absolute bottom-14 w-[6rem] '
									priority
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default MobileMenu;
