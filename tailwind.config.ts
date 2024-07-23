import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        main: "#111318",
        primary: "#E7A000",
        primaryTag: "rgba(231, 160, 0, .35)",
        placeHolder: "#808080",
        border : '#252936',
        card: "#181A21",
        textOpacity: "rgba(255,255,255,.5)",
      },
      width: {
        container: "1440px",
      },
      height : {
        input : '50px',
      },
      maxWidth: {
        container: "1440px",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'lg-mid': '1120px',
        // => @media (min-width: 1120px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
