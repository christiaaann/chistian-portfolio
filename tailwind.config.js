/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
       'tt': {'raw': '(min-width:312px) and (max-width: 558px)'},
       'pp': {'raw': '(min-width:312px) and (max-width: 838px)'},
       'xx': {'raw': '(min-width:312px) and (max-width: 480px)'},
        'ss': {'raw': '(min-width:312px) and (max-width: 414px)'},
    },
  },
  plugins: [],
}