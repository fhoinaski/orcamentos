/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001f3f", // Azul-marinho
        secondary: "#00509E", // Azul-escuro
        neutral: "#FFFFFF", // Branco
        accent: "#00A19D", // Verde água
        background: "#F4F4F4", // Cinza-claro para fundos
        text: "#333333", // Texto padrão
        footerBackground: "#ffff", // Azul-claro para o footer
      },
      animation: {
        tighten: 'tighten 1s ease-in-out infinite', // Movimento de apertar
      },
      keyframes: {
        tighten: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-30deg)' },
        },
      },
    },
  },
  plugins: [],
};
