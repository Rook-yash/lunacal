/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'selected':'0px 4.96px 12.4px 2.48px #00000040 inset',
        'arrow1':'4px 5px 30px 5px #101213,-8px -5px 25px -10px #96BEE7',
        'plus':'8px 10px 15px 1px #101213,0.5px 2px 3px 0px #6F6F6F inset,-0.5px -1px 6px 1px #9F9F9F'
      },
      fontFamily:{
        'poppins':'"Poppins", sans-serif',
        'jakarta':'"Plus Jakarta Sans", sans-serif',
      },
      borderRadius:{
        '1':'27px',
        '18.89':'18.89px',
        '2.46':'2.46px',
        '24':'24px',
        '104':'104px',
        '20':'20px'
      },
      colors:{
        "left":'#616161D1',
        'right-box': '#363C43',
        'right-first-black':'#171717',
        'right-button':'#212122',
        'text':'#A3ADB2',
        'sec-text':'#969696',
        'add':' linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
      },
      backgroundImage:{
        'base': 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        'line':'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        'arrow': 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)'
      },
      spacing:{
        "836":'836px',
        "689":'689px',
        '29':'29px',
        '96':'96px',
        '720':'720px',
        '316':'316px',
        '330':'330px',
        '24':'24px',
        '20':'20px',
        '48':'48px',
        '652':'652px',
        '4':'4px',
        '614':'614px',
        '12':'12px',
        '159.69':'159.69px',
        '62':'62px',
        '69':'69px',
        '195':'195px',
        '10':'10px',
        '175':'175px',
        '652':'652px',
        '149':'149px',
        '131.32':'131.32px',
        '46':'46px',
        '75':'80px'
      }
    },
  },
  plugins: [],
}



