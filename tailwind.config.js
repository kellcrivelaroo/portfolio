/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '372px',
        // => @media (min-width: 372px) { ... }
        xs: '400px',
        // => @media (min-width: 372px) { ... }
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-bai)',
      },

      colors: {
        azul: {
          900: '#0F103F',
          700: '#1C1C65',
          600: '#2F2F8A',
          400: '#2954A3',
          200: '#4A79CF',
        },
        rosa: '#C961DE',
      },
      backdropBlur: {
        sm: '2px',
      },
    },
  },
  plugins: [],
}
