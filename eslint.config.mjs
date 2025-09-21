
import css from 'eslint-plugin-css'

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        navigator: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    rules: {
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'no-var': ['error'],
      'no-console': ['warn']
    }
  },

  {
    files: ['**/*.css'],
    plugins: { css },
    languageOptions: {
      env: {
        browser: true
      }
    },
    rules: {
      ...css.configs.recommended.rules,
    }
  }
]

