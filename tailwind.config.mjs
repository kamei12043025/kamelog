/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'base-color': '#1f2937',
        'text-hover': '#4b5563',
        'custom-white': '#fafafa',
        'custom-dark': '#252525',
        'custom-purple': '#bf78ff',
        'custom-blue': '#3b82f6',
        'custom-green': '#10b981',
        'custom-yellow': '#eab308',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        //テキストスタイル
        '.base-text-2xl': {
          '@apply text-2xl md:text-3xl font-bold theme-color tracking-wide': {},
        },
        
        //テーマカラー
        '.theme-color': {
          '@apply text-black dark:text-white':
            {},
        },
        
        '.theme-color-other': {
          '@apply text-white dark:text-black':
            {},
        },

        '.theme-bg-color': {
          '@apply bg-black dark:bg-white':
            {},
        },

        '.theme-group-hover-border': {
          '@apply bg-purple-800 dark:bg-custom-purple':
            {},
        },

        '.theme-group-hover-text': {
          '@apply group-hover:text-purple-800 dark:group-hover:text-custom-purple':
            {},
        },

        //ナビゲーション
        '.nav-link-text': {
          '@apply theme-color uppercase text-base': {},
        },
        '.nav-link-current': {
          '@apply uppercase text-base': {},
        },

        //ダイアログメニュー
        '.dialog-menu': {
          '@apply py-4 px-4 flex justify-between items-center bg-gray-100 dark:bg-custom-dark border-b border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600':
            {},
        },
        '.dialog-arrow-animation': {
          '@apply transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 theme-color':
            {},
        },
        //tabボタン
        '.tab-button': {
          '@apply py-2 w-full focus:outline-none': {},
        },
        '.tab-button.selected': {
          '@apply bg-purple-800 dark:bg-purple-900 text-white': {},
        },
        '.tab-button.unselected': {
          '@apply bg-white dark:bg-black text-black dark:text-white': {},
        },
        '.tab-button:first-child': {
          '@apply border-r border-black dark:border-white': {},
        },
      })
    },
  ],
}
