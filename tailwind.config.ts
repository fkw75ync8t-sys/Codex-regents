import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pitch: '#051730',
        turf: '#0a2f58',
        glow: '#35e7ff',
        mint: '#72ffcc'
      },
      boxShadow: {
        panel: '0 20px 50px -20px rgba(53, 231, 255, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
