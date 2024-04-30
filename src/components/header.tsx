'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utilis';
import { usePathname } from 'next/navigation';
import { links } from '@/lib/links';
import BurgerMenuBtn from './burger-menu-btn';
import style from './style.module.css';
import MobileMenu from './mobile-menu';

const Header = () => {
	const currentUrl = usePathname();
	const [menuVisible, setMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => {
			!prev
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto');
			return !prev;
		});
	};

	return (
		<>
			<header className='sticky flex sm:justify-center justify-between w-[100%] z-10 top-0 bg-white text-black'>
				<motion.nav
					className='sm:container flex justify-between items-center py-2 w-[100vw] relative'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<Link href='/'>
							<motion.div
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
								className='flex items-center ml-5 sm:ml-0'
							>
								<div className='w-[5rem] sm:w-[6rem]'>
									<Image
										src='/logo.png'
										alt='logo'
										width={150}
										height={192}
										priority
									/>
								</div>
								<div className='hidden xl:block w-[12rem] ml-5'>
									<Image
										src='/napislogo.png'
										alt='logo'
										width={700}
										height={222}
										priority
									/>
								</div>
							</motion.div>
						</Link>
						<Image
							src='/kleks2.png'
							alt='kleks'
							width={498}
							height={360}
							priority
							className='absolute top-[20px] sm:top-[10px] left-[-10px] sm:left-[-30px] z-[-1] w-[6rem] sm:w-[10rem]'
						/>
						<Image
							src='/kleks1.png'
							alt='kleks'
							width={613}
							height={566}
							priority
							className='absolute top-[-90px] sm:top-[-130px] right-[20%] sm:right-[50%] z-[-1] w-[10rem] sm:w-[14rem] rotate-120'
						/>
						<Image
							src='/kleks3.png'
							alt='kleks'
							width={796}
							height={676}
							priority
							className='absolute top-[-50px] sm:top-[-90px] right-0 sm:right-0 z-[-1] w-[8rem] sm:w-[12rem] rotate-120'
						/>
					</div>
					<div className='hidden lg:flex items-end justify-end py-4 px-5'>
						<ul className='flex gap-10 uppercase items-center text-xl tracking-wider font-semibold'>
							{links.map(({ url, text, color, colorActive }) => (
								<li
									key={url}
									className={cn(
										`lg:text-md ${style[color]} transition-colors`,
										{
											[`${style[colorActive]}`]:
												currentUrl === url ||
												(url !== '/' &&
													currentUrl.split('/')[1] ===
														url.split('/')[1]),
										}
									)}
								>
									<Link href={url}>
										<div className='flex flex-col items-center'>
											{text.map((line, index) => (
												<span key={index}>{line}</span>
											))}
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<motion.div
						className='relative lg:hidden p-2 py-4 mr-2 sm:pr-3 z-30  rounded-lg'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<BurgerMenuBtn
							isMenuVisible={menuVisible}
							toggle={handleToggleMenu}
						/>
					</motion.div>
				</motion.nav>
				<MobileMenu
					handleToggleMenu={handleToggleMenu}
					menuVisible={menuVisible}
				/>
			</header>
		</>
	);
};

export default Header;
