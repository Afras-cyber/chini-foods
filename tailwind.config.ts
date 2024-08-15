import { Open_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#e74c3c",
        background: "#f5f5f5",
        text: "#333333",
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        pink: {
          500: '#FF2B85',
        },
        gray:{
          500: "#a6a6a6",
        }
      },
      screens: {
        'xs': '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
        sans: ['sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        Open_Sans: ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        semibold: '700', 
        Regular: '100',
      },
      keyframes: {
        'zoom-cover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'zoom-cover': 'zoom-cover 0.4s ease-in-out',
        'slide-left': 'slide-left 0.2s ease-out',
        'slide-right': 'slide-right 0.2s ease-out',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
};

export default config;

