'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utilis';
import { usePathname } from 'next/navigation';
// import MobileMenu from './mobile-menu';
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
			<motion.header
				className='flex sm:justify-center justify-between w-[100%] z-10 top-0 text-black'
				variants={{
					visible: { y: 0 },
					hidden: { y: -200 },
				}}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
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
								<div className='w-[5rem]'>
									<Image
										src='/logo.png'
										alt='logo'
										width={150}
										height={192}
										priority
									/>
								</div>
							</motion.div>
						</Link>
						<Image
							src='/kleks1.png'
							alt='kleks'
							width={100}
							height={128}
							priority
							className='absolute top-[-130px] right-[20%] sm:right-[50%] z-[-1] w-[14rem] rotate-120'
						/>
						<Image
							src='/kleks2.png'
							alt='kleks'
							width={100}
							height={128}
							priority
							className='absolute top-0 left-[-50px] z-[-1] w-[13rem] rotate-[250deg]'
						/>
						<Image
							src='/kleks3.png'
							alt='kleks'
							width={100}
							height={128}
							priority
							className='absolute top-[-90px] right-0 z-[-1] w-[12rem] rotate-120'
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
												currentUrl === url,
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
			</motion.header>
		</>
	);
};

export default Header;
