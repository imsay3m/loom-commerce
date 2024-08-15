/** @type {import('tailwindcss').Config} */
//tailwind size=px/4
//rem size=px/16
module.exports = {
  content: [
    "./node_modules/pagedone/src/js/*.js",
    "./public/*.{html,js}",
    "./public/assets/js/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner-background': "url('assets/images/hero/banner-background.jpeg')",
      },
      colors: {
        "primary": "#FFD400",
        // "primarylite": "#",
        "secondary": "#656567",
        "secondarylite": "#F7F7F8",
        "tertiary": "#1A1A1A",
        "tertiarylite": "#262626",
      },
      backgroundImage: {},
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: false,
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}

