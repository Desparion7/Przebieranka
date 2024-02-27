'use client';
import React from 'react';
import { motion } from 'framer-motion';

type MenuToggleButtonProps = {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuVisible: boolean;
};

const BurgerMenuBtn = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
	return (
		<>
			<motion.button
				aria-label='toggle menu'
				onClick={() => toggle((prev) => !prev)}
				animate={isMenuVisible ? 'open' : 'closed'}
				initial='initial'
				whileHover='hover'
				className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
			>
				<div className='relative w-[60px] h-10'>
					<div className='absolute right-0 bg-main-color h-2 w-full border border-black' />
					<div className='absolute right-0 bg-second-color h-2 w-full top-4 border border-black' />
					<div className='absolute right-0 bg-main-color h-2 w-full top-8 border border-black' />
				</div>
			</motion.button>
		</>
	);
};

export default BurgerMenuBtn;
