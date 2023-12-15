/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontFamily:{
            poppins: " 'Poppins', sans-serif"
        },
        colors:{
            titleGrey: "#403F3F",
            subTitleGrey: "#403F3F",
            paragraphGrey: "#706F6F",

        }
    },
  },
  plugins: [require("daisyui")],
}
