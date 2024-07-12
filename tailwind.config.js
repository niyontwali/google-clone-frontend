/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        floor: 'var(--floor)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
      fontFamily: {
        'roboto-light': ['Roboto-Light', 'Arial', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'Arial', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'Arial', 'sans-serif'],
      },
    },
  },
};
