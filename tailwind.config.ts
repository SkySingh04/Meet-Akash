import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-bg':"url('/hero-1.png')",
          "akash-1":"url('/akash-1.jpg')",
          "akash-2":"url('/akash-2.jpg')",
          "akash-0":"url('/akash-0.jpg')",
          "akash-3":"url('/akash-3.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark" , "cupcake"],
  }
}
export default config
