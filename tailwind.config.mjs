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
          '@apply text-black dark:text-white': {},
        },

        '.theme-color-other': {
          '@apply text-white dark:text-black': {},
        },

        '.theme-bg-color': {
          '@apply bg-black dark:bg-white': {},
        },

        '.theme-group-hover-border': {
          '@apply bg-purple-800 dark:bg-custom-purple': {},
        },

        '.theme-group-hover-text': {
          '@apply group-hover:text-purple-800 dark:group-hover:text-custom-purple group-focus-within:text-purple-800 dark:group-focus-within:text-custom-purple':
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
          '@apply bg-white dark:bg-black text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800':
            {},
        },
        '.tab-button:first-child': {
          '@apply border-r border-black dark:border-white': {},
        },
        // CMSコンテンツ用スタイル
        '.newt-content': {
          '& img': {
            '@apply rounded-3xl mb-6 md:mb-8 max-w-[780px] w-full h-auto mx-auto':
              {},
          },
          '& h1': {
            '@apply text-2xl md:text-3xl font-semibold mt-8 mb-4 theme-color':
              {},
          },
          '& h2': {
            '@apply text-xl md:text-2xl font-semibold mt-8 mb-4 theme-color':
              {},
          },
          '& h3': {
            '@apply text-lg md:text-xl font-semibold mt-6 mb-3 theme-color': {},
          },
          '& p': {
            '@apply text-sm md:text-base mb-6 md:mb-8 theme-color leading-[22.4px] tracking-wide':
              {},
          },
          '& ul, & ol': {
            '@apply mb-4 pl-6 theme-color': {},
          },
          '& ul': {
            '@apply list-disc': {},
          },
          '& ol': {
            '@apply list-decimal': {},
          },
          '& li': {
            '@apply text-sm md:text-base mb-2 theme-color': {},
          },
          '& a': {
            '@apply theme-color hover:underline': {},
          },
          '& blockquote': {
            '@apply border-l-4 border-gray-300 pl-4 italic my-4 theme-color':
              {},
          },
          '& pre': {
            '@apply mb-4 rounded-lg overflow-x-auto': {},
          },
          '& code': {
            '@apply block p-4 text-sm': {},
          },
          '& :not(pre) > code': {
            '@apply px-1 py-0.5 mx-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm font-mono text-red-900 dark:text-red-200 inline-block':
              {},
          },
        },
        '.hljs-light': {
          '& .hljs': {
            '@apply bg-black text-white': {},
          },
        },
        '.hljs-dark': {
          '& .hljs': {
            '@apply bg-black text-white': {},
          },
        },
        '.newt-content-title': {
          '@apply text-2xl md:text-3xl font-bold mb-6 theme-color tracking-wide':
            {},
        },
      })
    },
  ],
}
