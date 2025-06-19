/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4825a',
        background: '#020617',
        'text-primary': '#f8f9fa', 
        'text-muted': '#adb5bd',
      },
    },
  },
  plugins: [],
}
