/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight:{
      'poppins-300':300,
      'poppins-400':400,
      'poppins-500':500,
      'poppins-600':600,
    },
    screens:{
      // min width
      'sm3':'150px',
      'sm2':'400px',
      'sm1':'540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      
      // max width 
      'mlg':{'max':'1024px'},
      'mmd':{'max':'768px'},
      'msm':{'max':'640px'},
      'msm1':{'max':'570px'},
      'msm2':{'max':'400px'},

      
    },
    extend: {
      colors: {
        firstColor: 'hsl(var(--hue-color),69%,61%)',
        firstColorHover: 'hsl(var(--hue-color),57%,53%)',
        firstColorLighter: 'hsl(var(--hue-color),92%,85%)',
        textColor: 'hsl(var(--hue-color),8%,45%)',
        inputColor:'hsl(var(--hue-color), 70%, 96%)',
        DarkColor:'hsl(var(--hue-color), 28%, 12%)',
        DarkInputColor:'hsl(var(--hue-color), 29%, 16%)',
        footerDarkBg:'hsl(var(--hue-color), 30%, 8%)',
      },

    },
  },
  plugins: [],
}

