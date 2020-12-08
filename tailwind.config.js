module.exports = {
  purge: ['**/*.ts', '**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgPrimary: '#282c35',
        bgSecondary: '#363c48',
        textPrimary: 'hsla(0, 0%, 100%, 0.88)',
        textSecondary: '#fff',
        accent: '#ffa7c4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
