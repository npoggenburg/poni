/**
 * @typedef {import('prettier-plugin-multiline-arrays').MultilineArrayOptions} MultilineOptions
 *
 * @typedef {import('prettier').Options} PrettierOptions
 * @type {PrettierOptions & MultilineOptions}
 */
const prettierConfig = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: false,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "ignore",
  jsonRecursiveSort: true,
  printWidth: 100,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "all",
  plugins: ["prettier-plugin-multiline-arrays", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx"],
};

module.exports = prettierConfig;
