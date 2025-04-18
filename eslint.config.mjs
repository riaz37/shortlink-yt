import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      // Optional: if you still want warnings instead of errors
      // "@typescript-eslint/no-unused-vars": "warn",
      // "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
