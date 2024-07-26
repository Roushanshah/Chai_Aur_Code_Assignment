/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'bg-blue': '#3F72AF',
      'white': '#FFFFFF',
      'white-100': '#F9F7F7',
      'black-500': '#000000',
      'white-400': '#BFBFBF',
      'blue-100': '#DBE2EF',
      'blue-600': '#6C6BAF',
      'blue-800': '#112D4E',
      'green-400': '#23CF9B',
      'red-400': '#FF0000',
      'bg-green': '#D2E3C8',
      'green-800': '#4F6F52',
      'grey-100': '#4B4747',
      'grey-200': '#BEBEBE',
      'white-200': '#F7F7F7',
      'green-50': '#DBFFCE',
      'black-50': '#7E7E7E',
      'red-500': '#FA2D2D',
      'pink-400': '#E2BBE9',
      




    },
    extend: {
      boxShadow: {
        'custom': '1px 1px 8px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
