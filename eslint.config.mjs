import withNuxt from './.nuxt/eslint.config.mjs'

export default [
  ...withNuxt,


  {
    files: ['pages/**/*.{vue,js,ts}', 'layouts/**/*.{vue,js,ts}'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },


  {
    files: ['*/.vue'],
    rules: {
      'vue/multi-word-component-names': ['error', {
        ignores: ['index', 'default', 'error', 'main'],
      }],
    },
  },
]
