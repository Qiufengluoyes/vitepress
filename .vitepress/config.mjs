import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "枫落丰源",
  description: "个人页面",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qiufengluoyes' }
    ],
    footer: {
      copyright: 'Copyright © 2025 枫落丰源'
    }
  }
})
