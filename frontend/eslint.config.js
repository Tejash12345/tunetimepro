import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist'], // Ignore the dist folder
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'], // Apply to all TypeScript and TSX files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Use browser-specific globals
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-explicit-any': [
        'warn',
        { ignoreRestArgs: true }, // Allow `any` in function rest args but enforce strict typing elsewhere
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }, // Allow unused variables if prefixed with an underscore (_)
      ],
    },
  }
);
