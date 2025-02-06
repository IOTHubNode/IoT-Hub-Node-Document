import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IOT-Hub-Node",
  //base: "/IoT-Hub-Node-Document/",
  description: "IOT-Hub-Node A VitePress Site",
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  lang: "zh-CN",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '概览', link: '/' },
      { text: 'IOT-Hub-Node(停更)', link: '/docs/IOT-Hub-Node/01.Introduction/IOT-Hub-Node是什么/index' },
      { text: 'IOT-Hub-Node-Mini', link: '/docs/IOT-Hub-Node-Mini/01.Introduction/IOT-Hub-Node-Mini是什么/index' },
      { text: 'IOT-Hub-Embedded', link: '/docs/IOT-Hub-Embedded/01.Introduction/index' },
      { text: '加入我们', link: '/docs/IOT-Hub-Node/05.other/加入我们' },
    ],

    sidebar: {
      '/docs/IOT-Hub-Node/': [{
        text: 'IOT-Hub-Node',
        link: '/docs/IOT-Hub-Node/01.Introduction/IOT-Hub-Node是什么/index',
        items: [
          {
            text: '产品介绍',
            items: [
              { text: 'IOT-Hub-Node是什么？', link: '/docs/IOT-Hub-Node/01.Introduction/IOT-Hub-Node是什么/index' },
              { text: '基本概念', link: '/docs/IOT-Hub-Node/01.Introduction/基本概念/index' },
            ]
          },
          {
            text: '快速上手',
            items: [
              { text: '准备工作', link: '/docs/IOT-Hub-Node/02.tutorial/准备工作/index' },
              { text: '安装部署', link: '/docs/IOT-Hub-Node/02.tutorial/安装部署/index' },
              { text: '设备接入', link: '/docs/IOT-Hub-Node/02.tutorial/设备接入' },
              { text: '数据上报', link: '/docs/IOT-Hub-Node/02.tutorial/数据上报' },
              { text: '设备控制', link: '/docs/IOT-Hub-Node/02.tutorial/设备控制' },
            ]
          },
          {
            text: '常见问题',
            items: [
              { text: '安装部署问题', link: '/docs/IOT-Hub-Node/03.question/安装部署问题' },
              { text: '二次开发问题', link: '/docs/IOT-Hub-Node/03.question/二次开发问题' },
              { text: '设备接入问题', link: '/docs/IOT-Hub-Node/03.question/设备接入问题' }
            ]
          },
          {
            text: '服务支持',
            items: [
              { text: '产品计划', link: '/docs/IOT-Hub-Node/04.service/产品计划' },
              { text: '更新记录', link: '/docs/IOT-Hub-Node/04.service/更新记录' },
              { text: '通知公告', link: '/docs/IOT-Hub-Node/04.service/通知公告' },
              { text: '反馈渠道', link: '/docs/IOT-Hub-Node/04.service/反馈渠道' }
            ]
          },
          {
            text: '贡献指南',
            items: [
              { text: '加入我们', link: '/docs/IOT-Hub-Node/05.other/加入我们' },
              { text: '贡献指南', link: '/docs/IOT-Hub-Node/05.other/贡献指南' }
            ]
          },
        ],
      }],
      '/docs/IOT-Hub-Node-Mini/': [{
        text: 'IOT-Hub-Node-Mini',
        link: '/docs/IOT-Hub-Node-Mini/01.Introduction/IOT-Hub-Node-Mini是什么/index',
        items: [
          {
            text: '产品介绍',
            items: [
              { text: 'IOT-Hub-Node-Mini是什么？', link: '/docs/IOT-Hub-Node-Mini/01.Introduction/IOT-Hub-Node-Mini是什么/index' },
              { text: '技术架构', link: '/docs/IOT-Hub-Node-Mini/01.Introduction/IOT-Hub-Node-Mini技术架构/index' },
            ]
          },
          {
            text: '快速上手',
            items: [
              { text: '准备工作', link: '/docs/IOT-Hub-Node-Mini/02.tutorial/准备工作/index' },
              { text: '安装部署', link: '/docs/IOT-Hub-Node-Mini/02.tutorial/安装部署/index' },
              { text: '设备接入', link: '/docs/IOT-Hub-Node-Mini/02.tutorial/设备接入' },
              { text: '数据上报', link: '/docs/IOT-Hub-Node-Mini/02.tutorial/数据上报' },
              { text: '设备控制', link: '/docs/IOT-Hub-Node-Mini/02.tutorial/设备控制' },
            ]
          },
          {
            text: '常见问题',
            items: [
              { text: '安装部署问题', link: '/docs/IOT-Hub-Node-Mini/03.question/安装部署问题' },
              { text: '二次开发问题', link: '/docs/IOT-Hub-Node-Mini/03.question/二次开发问题' },
              { text: '设备接入问题', link: '/docs/IOT-Hub-Node-Mini/03.question/设备接入问题' }
            ]
          },
          {
            text: '服务支持',
            items: [
              { text: '产品计划', link: '/docs/IOT-Hub-Node-Mini/04.service/产品计划' },
              { text: '更新记录', link: '/docs/IOT-Hub-Node-Mini/04.service/更新记录' },
              { text: '通知公告', link: '/docs/IOT-Hub-Node-Mini/04.service/通知公告' },
              { text: '反馈渠道', link: '/docs/IOT-Hub-Node-Mini/04.service/反馈渠道' }
            ]
          },
          {
            text: '贡献指南',
            items: [
              { text: '加入我们', link: '/docs/IOT-Hub-Node-Mini/05.other/加入我们' },
              { text: '贡献指南', link: '/docs/IOT-Hub-Node-Mini/05.other/贡献指南' }
            ]
          },
        ],
      }],
      '/docs/IOT-Hub-Embedded/': [{
        text: 'IOT-Hub-Embedded',
        link: '/docs/IOT-Hub-Embedded/01.Introduction/index'
      }],
    },

    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "这个页面不存在",
      linkText: "返回首页",
    },

    darkModeSwitchLabel: "切换主题",

    //当前页面 On this page
    outlineTitle: "本节目录",

    // 文章翻页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',



    socialLinks: [
      { icon: 'github', link: 'https://github.com/IOTHubNode/IoT-Hub-Node-Document' }
    ],

    footer: {
      copyright: "Copyright © 2024 IoT-Hub-Node-Document",
    }

  }
})
