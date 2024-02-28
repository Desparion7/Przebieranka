import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'main-color': 'var(--main-color)',
				'second-color': 'var(--second-color)',
				'third-color': 'var(--third-color)',
				'frame1-color': 'var(--frame1-color)',
				'frame1-border-color': 'var(--frame1-border-color)',
				'frame2-color': 'var(--frame2-color)',
				'frame2-border-color': 'var(--frame2-border-color)',
				'frame3-color': 'var(--frame3-color)',
				'frame3-border-color': 'var(--frame3-border-color)',
				'frame4-color': 'var(--frame4-color)',
				'frame4-border-color': 'var(--frame4-border-color)',
				'frame5-color': 'var(--frame5-color)',
				'frame5-border-color': 'var(--frame5-border-color)',
			},
			screens: {
				custom: '321px',
			},
		},
	},
	plugins: [],
};
export default config;
