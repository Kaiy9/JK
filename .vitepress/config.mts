import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { markdown } from './config/markdown'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { metaData } from './config/metadata'
import { algolia } from './config/algolia'
import {createRssFileZH, createRssFileEN} from './theme/utils/rss'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础配置
  head: head,
  lang: metaData.lang,
  title: metaData.title,
  description: metaData.description,
	
  
  // 最后更新时间
  lastUpdated: true,

  // 简洁的url
  cleanUrls: true,

  // 输出目录
  outDir: './dist',

  // 主题配置 https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    logo: {
      light: '/logo_light.svg',
      dark: '/logo_night.svg'
    },
    
     // 图片懒加载
    image: {
      lazyLoading: true,
    },
   
    outline: {
      label: '页面导航',
      level: 'deep'
    },
    editLink: {
      pattern: 'https://github.com/yqchilde/MyNewBlog/edit/main/:path',
      text: '不妥之处，敬请雅正'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    search: {
      // provider: 'local'
      provider: 'algolia',
      options: algolia,
    },

     socialLinks: [
      { icon: 'github', link: 'https://github.com' },
        {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>RSS</title><path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"/><path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"/><path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"/></svg>',
        },
        link: "/rss.xml",
      },
    ],
  
  
     // 页脚配置
    footer: {
      message:
        '<a href="/about/">关于我们</a> | <a href="/contact/">联系我们</a> | <a href="/friends/">友情链接</a> | <a href="/privacy/">隐私政策</a>',
      copyright: '© 2025 开源节流',
    },

    // @ts-ignore
    articleMetadataConfig: {
      author: 'YY', // 文章全局默认作者名称
      authorLink: '/about', // 点击作者名时默认跳转的链接
    },
    // 自定义扩展: 文章版权配置
    copyrightConfig: {
      license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
      licenseLink: 'https://creativecommons.org/licenses/by/4.0/legalcode.zh-hans'
    },
  },

  // markdown配置
  markdown: markdown,

  // ... 其他配置
  ignoreDeadLinks: true,

   // 路由重写
  rewrites: {
    'posts/:categorie/:yyyy/:title/README.md': ':categorie/:yyyy/:title.md',
    'posts/:categorie/:type/index.md': ':categorie/:type.md',
    'posts/:categorie/index.md': ':categorie.md',
    'posts/:categorie/:title.md': ':categorie/:title.md',
    'posts/:categorie/:type/:title.md': ':categorie/:type/:title.md',
    'pages/:categorie/index.md': ':categorie.md'
  },
  
  srcExclude: [
    './.github/',
    './README.md',
  ],

  sitemap: {
    hostname: 'https://yqqy.top',
  },
})