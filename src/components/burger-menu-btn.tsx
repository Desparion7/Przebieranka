'use client';
import React from 'react';

type MenuToggleButtonProps = {
	toggle: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuVisible: boolean;
};

const BurgerMenuBtn = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
	return (
		<>
			{!isMenuVisible ? (
				<button
					aria-label='toggle menu'
					onClick={() => toggle((prev) => !prev)}
					className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
				>
					<div className='relative w-[60px] h-10'>
						<div className='absolute right-0 bg-main-color h-2 w-full border border-black' />
						<div className='absolute right-0 bg-second-color h-2 w-full top-3 border border-black' />
						<div className='absolute right-0 bg-main-color h-2 w-full top-6 border border-black' />
					</div>
				</button>
			) : (
				<button
					aria-label='toggle menu'
					onClick={() => toggle((prev) => !prev)}
					className='relative border border-transparent cursor-pointer z-50 focus:outline-none bg-transparent'
				>
					<div className='relative w-[60px] h-10'>
						<div className='absolute right-0 bg-main-color border border-black top-3 h-2 w-full rotate-[135deg]' />
						<div className='absolute right-0 bg-second-color border border-black top-3 h-2 w-full rotate-[45deg]' />
					</div>
				</button>
			)}
		</>
	);
};

export default BurgerMenuBtn;
