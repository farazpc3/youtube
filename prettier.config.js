/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 80,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@sql-formatter/prettier-plugin-sql",
  ],
};

export default config;
