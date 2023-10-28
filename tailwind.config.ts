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
      width: {
        1024: '1280px',
      },
      fontSize: {
        '4xl': ['2.5rem', '3rem'],
      },
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
        white: '#FFFFFF',
        success: '#00CD52',
        content: '#5A5A5A',
        gray: {
          100: '#F7F7F7',
          200: '#D9D9D9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            success: '#00CD52',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
