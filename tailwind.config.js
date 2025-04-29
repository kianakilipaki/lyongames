/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "game-black": "#0F0F1A",
        "game-dark": "#1A1A2E",
        "game-purple": "#7126DF",
        "game-pink": "#DF7126", // actually orange
        "game-cyan": "#26DF71", // actually green
        "game-yellow": "#E4C09A", // actually beige
        "game-green": "#97380E", // actually red
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        body: ['"Roboto Mono"', "monospace"],
      },
      animation: {
        scanline: "scanline 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.2s infinite",
        glitch: "glitch 3s infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(127, 90, 240, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(127, 90, 240, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
