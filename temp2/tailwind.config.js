/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./Views/*"],
  theme: {
    extend: {
      colors : {
        p : "#F2DF80",
        a1: '#F2EA7E',
        a2: "#A69026",
        s1: '#3B37A6',
        t1: "#8580F2",
        d1: '#001418',
        d2: "#002730",
        d3: '#004454',
        l1: '#F2F2F2',
        l2: "#E0E0E0",
        l3: '#F2E8B3',
        l4: '#d9d9d9',
        error: "#FF3333",
        success: "#7676A7",
        social: {
          "1": "#CD201F",
          "2":"#1877F2",
          "3":"#03A9F4",
          "4":"#4CAF50",
          "5":"#A229A8"
        },
        ...colors
      },
      screens: {
        'xs': '425px',
        ...defaultTheme.screens
      },
      keyframes: {
        arrow1: {
          '0%': { transform: 'translateX(-120%)', opacity: '0' },
          '100%' : {transform: 'translateX(0%)' , opacity: '1'}
        },
        arrow2: {
          '0%': { transform: 'translateX(120%)', opacity: '0' },
          '100%' : {transform: 'translateX(0%)' , opacity: '1'}
        },
        bounce1: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(-1.5%)'},
          '100%' : {transform: 'translateY(0%)'}
        },
        bounce2: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(-1%)'},
          '100%' : {transform: 'translateY(0%)'}
        },
        menuHide: {
          '0%': {opacity: '100%', transform:'rotate(0deg)'},
          '50%':{opacity: '0%',transform:'rotate(45deg)'},
          '100%':{opacity: '100%', transform:'rotate(90deg)'}
        },
        menuHide2: {
          '0%': {opacity: '100%', transform:'rotate(90deg)'},
          '50%':{opacity: '0%',transform:'rotate(45deg)'},
          '100%':{opacity: '100%', transform:'rotate(0deg)'}
        },
      },
      animation: {
        arrow1: 'arrow1 3s ease-in-out',
        arrow2: 'arrow2 3s ease-in-out',
        bounce1: 'bounce1 2s ease-in-out infinite',
        bounce2: 'bounce2 2s ease-in-out infinite',
        menuHide: 'menuHide 0.5s ease-in-out',
        menuHide2: 'menuHide2 0.5s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

