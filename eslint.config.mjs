// eslint.config.mjs
export default {
  root: true,
  env: { browser: true, node: true, es2021: true },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['pages/**/*.{vue,js,ts}', 'layouts/**/*.{vue,js,ts}'],
      rules: { 'vue/multi-word-component-names': 'off' }
    },
    {
      files: ['**/*.vue'],
      rules: {
        'vue/multi-word-component-names': ['error', { ignores: ['index','default','error','main'] }]
      }
    }
  ],
  rules: {}
}
