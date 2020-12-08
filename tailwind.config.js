module.exports = {
  purge: ['**/*.ts', '**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgFull: '#0c111b',
        bg2: '#192133',
        bg3: '#030b17',
        bg4: '#000000',
        textNormal: 'rgba(255, 255, 255, 0.8)',
        textHighlight: '#ffffff',
        inputPlaceholder: 'rgba(255, 255, 255, 0.6)',
        inputBorder: 'rgba(255, 255, 255, 0.6)',
        accent: '#1f80e0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
