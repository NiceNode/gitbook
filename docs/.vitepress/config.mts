import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NiceNode docs",
  description: "NiceNode documentation and guides",
  head: [['link', { rel: 'icon', href: 'img/favicon.png' }]],
  // outDir: '../build',
  themeConfig: {
    logo: {
      light: 'img/logo-light.png', 
      dark: 'img/logo-dark.png', 
      alt: 'NiceNode logo', 
      search: {
        provider: 'local'
      }
    }, 
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Node Specifications', link: '/NodeSpec/README.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiceNode/documentation' }
    ]
  }
})
