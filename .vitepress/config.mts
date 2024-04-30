import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IOT-Hub-Node",
  //base: "/IoT-Hub-Node-Document/",
  description: "IOT-Hub-Node A VitePress Site",
  head: [['link',{rel:'icon',href:'/IoT-Hub-Node-Document/logo.ico'}]], 
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '概览', link: '/' },
      { text: '使用文档',         items: [
          { text: '介绍', link: '/docs/Introduction/IOT-Hub-Node是什么/IOT-Hub-Node是什么' },
          { text: '快速上手', link: '/docs/tutorial/准备工作' }
      ]
      },
      { text: '嵌入式支持', link: '/docs/embedded/index' },
      { text: '常见问题', link: '/docs/question/安装部署问题' },
      { text: '加入我们', link: '/docs/other/加入我们' },
    ],

    sidebar: [
      {
        text: '产品介绍',
        items: [
          { text: 'IOT-Hub-Node是什么？', link: '/docs/01.Introduction/IOT-Hub-Node是什么/IOT-Hub-Node是什么' },
          { text: '基本概念', link: '/docs/01.Introduction/基本概念' },
        ]
      },
      {
        text: '快速上手',
        items: [
          { text: '准备工作', link: '/docs/02.tutorial/准备工作' },
          { text: '安装部署', link: '/docs/02.tutorial/安装部署' },
          { text: '设备接入', link: '/docs/02.tutorial/设备接入' },
          { text: '数据上报', link: '/docs/02.tutorial/数据上报' },
          { text: '设备控制', link: '/docs/02.tutorial/设备控制' },
        ]
      },
      {
        text: '嵌入式支持',
        items: [
          { text: 'IOT-Hub-Embedded', link: '/docs/03.embedded/index' },
          { text: 'ESP32多模网关', link: '/docs/03.embedded/ESP32_Gateway' },
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '安装部署问题', link: '/docs/04.question/安装部署问题' },
          { text: '二次开发问题', link: '/docs/04.question/二次开发问题' },
          { text: '设备接入问题', link: '/docs/04.question/设备接入问题' }
        ]
      },
      {
        text: '服务支持',
        items: [
          { text: '产品计划', link: '/docs/05.service/产品计划' },
          { text: '更新记录', link: '/docs/05.service/更新记录' },
          { text: '通知公告', link: '/docs/05.service/通知公告' },
          { text: '反馈渠道', link: '/docs/05.service/反馈渠道' }
        ]
      },
      {
        text: '贡献指南',
        items: [
          { text: '加入我们', link: '/docs/06.other/加入我们' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/IOTHubNode/IoT-Hub-Node' }
    ],

    footer: {
      copyright:"Copyright © 2024 IOT-Hub-Node",
    }

  }
})
