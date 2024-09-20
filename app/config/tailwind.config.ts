import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './widgets/**/*.vue',
    './shared/**/*.vue',
    './plugins/**/*.{ts}',
    './nuxt.config.{ts}',
  ],
  theme: {},
  darkMode: 'selector',
}
