/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage-background' : "url('/assets/Homepage/Image/1 1.png')",
        'homepage-background1': "url('/assets/Homepage/Ellements/Group 1413371825.png')",
        'about-us-background' : "url('/assets/About us Page/Image/2112.w023.n001.1612B.p1 2.png')",
        'packages-background' : "url('/assets/Packages page/Image/2112.w023.n001.1612B.p1 2.png')",
        'support-background' : "url('/assets/Support page/Image/2112.w023.n001.1612B.p1 2.png')",
        'affiliates-background' : "url('/assets/About us Page/Image/2112.w023.n001.1612B.p1 2.png')",
        'transaction-background' : "url('/assets/Transaction Page/Image/2112.w023.n001.1612B.p1 2.png')",
        'contact-background' : "url('/assets/Contact page/Image/2112.w023.n001.1612B.p1 2.png')",
        'signup-background' : "url('/assets/signup.png')",
      },
      colors: {
        'border-normal': '#876DB1',
        'orange' : '#F2994A',
        'primary-solid': '#F2B21B',
        'dark-solid': '#081B27',
        'light-solid': '#F9F7F7',
        '1st-color': '#143D59',
        'footer-solid': '#0E2C40',
        'dark-shade-2': '#C1CBD2',
        'accent-1-solid': '#133D59',
        'blue': '#0052FF',
      },
      screens: {
        "mx-high": {max: '1800px'},
        "mi-high": {min: '1800px'},
        "mx-medium": {max: '1700px'},
        "mi-medium": {min: '1700px'},
        'max-xl': {max: '1280px'},
        'max-lg': {max: '1024px'},
        'max-md': {max: '768px'},
        'max-sm': {max: '640px'},
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        montserratbold: ["Montserrat-xl"],
        montserrat2xl: ["Montserrat-2xl"],
        hellix: ["Hellix"],
      },
    },
  },
  plugins: [],
}
