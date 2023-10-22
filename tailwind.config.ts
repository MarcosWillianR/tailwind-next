import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        vermelhao: '#f00',
      }
    },
  },
  plugins: [],
}
export default config
