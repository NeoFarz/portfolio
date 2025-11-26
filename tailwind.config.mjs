/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"JetBrains Mono"', 'monospace'],
        'body': ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        'circuit': {
          'trace': '#00ff9f',
          'board': '#0a1628',
          'copper': '#ff6b35',
          'signal': '#00d4ff',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'trace-flow': 'traceFlow 3s ease-in-out infinite',
      },
      keyframes: {
        traceFlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        circuit: {
          'primary': '#00ff9f',
          'primary-content': '#0a1628',
          'secondary': '#00d4ff',
          'secondary-content': '#0a1628',
          'accent': '#ff6b35',
          'accent-content': '#0a1628',
          'neutral': '#1e293b',
          'neutral-content': '#94a3b8',
          'base-100': '#0a1628',
          'base-200': '#0f1f35',
          'base-300': '#162a46',
          'base-content': '#e2e8f0',
          'info': '#00d4ff',
          'success': '#00ff9f',
          'warning': '#fbbf24',
          'error': '#ef4444',
        },
        daylight: {
          'primary': '#0066cc',
          'primary-content': '#ffffff',
          'secondary': '#0891b2',
          'secondary-content': '#ffffff',
          'accent': '#ea580c',
          'accent-content': '#ffffff',
          'neutral': '#334155',
          'neutral-content': '#f8fafc',
          'base-100': '#f8fafc',
          'base-200': '#e2e8f0',
          'base-300': '#cbd5e1',
          'base-content': '#1e293b',
          'info': '#0891b2',
          'success': '#16a34a',
          'warning': '#ca8a04',
          'error': '#dc2626',
        },
      },
    ],
    darkTheme: 'circuit',
  },
};
