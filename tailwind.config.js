module.exports = {
  content: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "var(--theme-color)",
        sub: "var(--sub-color)",
        "sub-0.5": "var(--sub-color-5)",
        header: "var(--header-color)",
        "header-0.75": "var(--header-color-75)",
      },
      fontFamily: {
        strong: "var(--font-strong)",
        header: "var(--font-header)",
      },
      spacing: {
        "1/8": "12.5%",
        "3/7": "42.857143%",
      },
      zIndex: {
        5: 5,
        100: 100,
      },
      maxWidth: {
        "2/3": "66.666667%",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
        5500: "5500ms",
        6000: "6000ms",
        6500: "6500ms",
        7000: "7000ms",
        7500: "7500ms",
        8000: "8000ms",
        8500: "8500ms",
        9000: "9000ms",
        9500: "9500ms",
        10000: "10000ms",
      },
    },
  },
  plugins: [],
};
