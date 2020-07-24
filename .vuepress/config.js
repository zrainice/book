// const slidebar = require('../slidebar');

module.exports = {
  title: '雨鱼',
  description: '',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // 本地化
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: '文章', // 默认 文章
            tag: '标签', // 默认 标签
            category: '分类', // 默认 分类
            friendLink: '友情链接' // 默认 友情链接
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    // 导航
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '书籍',
        icon: 'reco-message',
        items: [
          {
            text: '向上成长',
            link: '/books/xiang_shang_cheng_zhang/'
          }
        ]
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      // {
      //   text: 'Contact',
      //   icon: 'reco-message',
      //   items: [
      //     {
      //       text: 'GitHub',
      //       link: 'https://github.com/recoluan',
      //       icon: 'reco-github'
      //     }
      //   ]
      // }
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    // 开启边栏的
    sidebar: {
      '/books/xiang_shang_cheng_zhang/': [
          '',
          '版权',
          '第一章',
          '第二章',
          '第三章',
          '第四章',
          '第五章',
          '第六章'
      ]
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    friendLink: [
      {
        title: '我的博客',
        desc: '我的博客',
        email: 'zhangyushuai126@126.com',
        link: 'https://www.zrain.top'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: '雨鱼',
    authorAvatar: '/avatar.png',
    record: '',
    startYear: '2017'
  },
  markdown: {
    lineNumbers: true
  }
}