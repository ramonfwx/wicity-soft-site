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
        // escuro estratégico, claro e um único azul
        night: { DEFAULT: '#0B1220', 800: '#101A2E', line: '#1E293B' },
        ink: '#0F172A',
        snow: { DEFAULT: '#F8FAFC', 2: '#F1F5F9' },
        mute: { DEFAULT: '#64748B', dark: '#94A3B8' },
        line: '#E2E8F0',
        brand: { DEFAULT: '#2563EB', hover: '#1D4ED8', soft: '#DBEAFE' }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'Consolas', 'monospace']
      },
      maxWidth: { site: '1280px' },
      borderRadius: { card: '14px' }
    }
  },
  plugins: []
}
