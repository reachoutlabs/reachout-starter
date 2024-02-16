/** @type {import("prettier").Config} */

const prettierConfig = {
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;
