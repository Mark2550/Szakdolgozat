/** @type {import('tailwindcss').Config} */

export const content = [
  './src/**/*.{js,jsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js'
];
export const theme = {
  extend: {},
};
export const plugins = [
  import('flowbite/plugin')
];

