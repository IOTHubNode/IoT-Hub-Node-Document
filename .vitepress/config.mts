import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IOT-Hub-Node",
  description: "IOT-Hub-Node A VitePress Site",
  head: [['link',{rel:'icon',href:'/logo.ico'}]], 
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '概览', link: '/' },
      { text: '使用文档',         items: [
          { text: '介绍', link: '/markdown-examples' },
          { text: '快速上手', link: '/api-examples' }
      ]
      },
       { text: '常见问题', link: '/' },
    ],

    sidebar: [
      {
        text: '产品介绍',
        items: [
          { text: 'IOT-Hub-Node是什么？', link: 'markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '快速上手',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/IOTHubNode/IoT-Hub-Node' }
    ],

    footer: {
      copyright:"Copyright © 2024 IOT-Hub-Node",
    }

  }
})
