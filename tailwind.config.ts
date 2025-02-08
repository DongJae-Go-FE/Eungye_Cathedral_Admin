/** @type {import('tailwindcss').Config} */

import { colors, tokens, typography } from "./src/foundations";
// eslint-disable-next-line
const fontSize: any = {};

Object.entries(typography).forEach(([key, { fontSize: size, ...values }]) => {
  fontSize[key] = [size, values];
});

module.exports = {
  "tailwindcss/nesting": "postcss-nesting",
  "postcss-preset-env": {
    features: { "nesting-rules": false },
  },
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),

  content: ["./src/**/**/*.{js,ts,jsx,tsx}", "./node_modules/quill/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Pretendard"],
    },
    extend: {
      colors,
      fontSize,
      tokens,
    },
  },
  plugins: [],
};
