import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0028',
        primaryGreen: '#00CD52',
        primaryGreenLight: '#F1FFF7',
        primaryGreenDark: '#003315',
        primaryLight: '#FFF7F8',
        blueLight: '#F7F8FF',
        header: {
          100: '#40000A',
          200: '#582029',
        },
        content: '#5A5A5A',
        gray: {
          100: '#F7F7F7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
