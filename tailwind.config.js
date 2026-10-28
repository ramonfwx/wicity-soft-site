/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './utils/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // tema escuro: night é o fundo, ink é o texto
        night: { DEFAULT: '#070b14', 800: '#0c1322', 700: '#141e33' },
        ink: '#e8f0f8',
        line: 'rgba(148, 178, 210, 0.14)',
        mute: '#8fa3b5',
        brand: { DEFAULT: '#1B76C7', deep: '#0B4FA0', sky: '#00A8E8' },
        cyan: { DEFAULT: '#00CCFF', light: '#6DE6FF' },
        amber: { DEFAULT: '#F6A509' }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
}
