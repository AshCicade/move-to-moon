import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/move-to-moon/",
  title: "Move To Moon",
  description: "个人知识博客",
  themeConfig: {
    outlineTitle:"文章标题",
    outline:[2,6],// 定义标题级别,字符串"deep"相当于是[2,6] 
    /* outline: {
      label: '文章标题',
      outline: [1, 6]
    }, */
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/markdown-examples' },
      {
        text: '教程合集',
        items: [
          { text: 'JVM', link: '#' },
          { text: 'JAVA', link: '#' },
          { text: 'Spring', link: '#' },
          { text: 'SpringBoot', link: '#' },
          { text: '算法', link: '/guides/algorithm/' },
          {
            // 该部分的标题
            text: '项目实战',
            items: [
              { text: '项目一', link: '#' },
              { text: '项目二', link: '#' }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guides/algorithm/': [
        {
          text: '排序算法',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '冒泡排序', link: '/guides/algorithm/排序算法/冒泡排序' },
            { text: '快速排序', link: '/guides/algorithm/排序算法/快速排序' }
          ]
        },
        {
          text: '动态规划算法', collapsible: true,
          collapsed: true,
          items: [
            { text: '冒泡排序', link: '/guides/algorithm/排序算法/冒泡排序' }
          ]
        }
      ],
      '/guides/webservice/': [
        { text: 'WebService', link: '/guides/webservice/' },
        { text: 'SOAP协议', link: '/guides/webservice/soap/overview' },
        {
          text: 'Apache CXF',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '概述', link: '/guides/webservice/apache-cxf/overview' }
          ]
        }
      ],
      '/guides/xml/': [
        {
          text: 'XML',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'XML概述', link: '/guides/xml/XML概述' },
            { text: 'XML解析', link: '/guides/xml/XML解析' }
          ]
        }
      ],
      '/guides/设计模式/': [
        {
          text: '设计模式',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '概述', link: '/guides/设计模式/' },
            {
              text: '创建型设计模式',
              items: [
                { text: '单例模式', link: '/guides/设计模式/单例模式' },
                { text: '原型模式', link: '/guides/设计模式/原型模式' },
                { text: '工厂模式', link: '/guides/设计模式/工厂模式' },
                { text: '建造者模式', link: '/guides/设计模式/建造者模式' }
              ]
            }
          ]
        }
      ],
      '/guides/java/apache-poi/': [
        {
          text: 'Apache POI',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '概述', link: '/guides/java/apache-poi/overview' },
            { text: '快速指南', link: '/guides/java/apache-poi/quick-guide' }
          ]
        }
      ],
      '/guides/消息中间件/': [
        {
          text: '消息中间件',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '概述', link: '/guides/消息中间件/' },
            {
              text: 'RabbitMQ',
              collapsible: true,
              collapsed: true,
              items: [
                { text: '概述', link: '/guides/消息中间件/rabbitmq/' },
                { 
                  text: '工作模式', 
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: '发布/订阅模式', link: '/guides/消息中间件/rabbitmq/publish-subscribe' },
                    { text: '路由模式', link: '/guides/消息中间件/rabbitmq/routing' },
                    { text: '主题模式', link: '/guides/消息中间件/rabbitmq/topics' },
                    { text: 'PRC模式', link: '/guides/消息中间件/rabbitmq/rpc' },
                  ]
                }
              ]
            }
          ]
        }
      ],
      /* {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'XML',
        collapsed: true,
        items: [
          { text: 'XML概述', link: '/guides/xml/XML概述' },
          { text: 'XML解析', link: '/guides/xml/XML解析' }
        ]
      } */
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AshCicade/move-to-moon' },
      {
        icon: {
          svg: '<svg t="1729059572873" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4746" width="48" height="48"><path d="M579.867 511.932c-11.67 0-23.344 10.837-23.344 24.178 0 10.839 11.668 21.678 23.344 21.678 17.514 0 30.020-10.839 30.020-21.678 0-13.34-12.505-24.178-30.020-24.178v0zM503.154 399.36c18.345 0 30.020-11.67 30.020-29.185 0-18.345-11.675-29.183-30.020-29.183-17.51 0-34.188 10.839-34.188 29.183-0.001 17.517 16.678 29.185 34.188 29.185v0zM512.326 0.56c-282.655 0-511.788 229.133-511.788 511.788 0 282.653 229.133 511.786 511.788 511.786 282.653 0 511.786-229.133 511.786-511.786 0.001-282.655-229.132-511.788-511.786-511.788v0zM415.602 642.009c-30.855 0-53.369-4.999-82.553-13.341l-84.218 42.53 24.186-71.715c-59.204-41.689-94.228-94.221-94.228-158.428 0-113.403 106.733-200.123 236.814-200.123 115.069 0 217.633 68.377 237.644 165.106-8.338-1.671-15.844-2.502-22.514-2.502-113.403 0-200.954 85.049-200.954 187.613 0 17.508 2.502 33.351 6.671 50.030-6.671 0.829-14.178 0.829-20.849 0.829v0zM763.314 723.724l16.674 60.041-63.371-35.854c-24.18 4.999-47.529 12.505-71.709 12.505-111.737 0-200.123-76.711-200.123-171.769 0-95.058 88.388-171.771 200.123-171.771 105.895 0 200.954 76.713 200.954 171.771 0 53.362-35.854 100.891-82.548 135.078v0zM338.053 340.992c-17.51 0-35.854 10.839-35.854 29.183 0 17.516 18.343 29.19 35.854 29.19 16.679 0 30.020-11.675 30.020-29.19 0-18.343-13.341-29.183-30.020-29.183v0zM710.783 511.932c-12.51 0-23.349 10.837-23.349 24.178 0 10.839 10.839 21.678 23.349 21.678 16.674 0 29.183-10.839 29.183-21.678 0-13.34-12.509-24.178-29.183-24.178v0zM710.783 511.932z" p-id="4747"></path></svg>'
        },
        link: '...'
      }
    ]
  }
})
