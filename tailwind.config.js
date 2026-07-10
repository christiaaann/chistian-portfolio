/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Ginawang 20s para mas swabe ang takbo, pero pwede mong baguhin ang bilis
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // CRITICAL: -50% dapat para walang talon o blank space
        },
      },
    },
    screens: {
       'tt': {'raw': '(min-width:312px) and (max-width: 558px)'},
       'pp': {'raw': '(min-width:312px) and (max-width: 838px)'},
       'xx': {'raw': '(min-width:312px) and (max-width: 480px)'},
       'ss': {'raw': '(min-width:312px) and (max-width: 414px)'},
    },
  },
  plugins: [],
}