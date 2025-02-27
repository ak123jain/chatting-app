// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Starts from the right side
          "100%": { transform: "translateX(-100%)" } // Ends on the left side
        }
      },
      animation: {
        scroll: "scroll 20s linear infinite" // 20 seconds duration
      }
    }
  },
  plugins: [],
};
