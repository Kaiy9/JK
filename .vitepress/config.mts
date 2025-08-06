import { defineConfig } from 'vitepress'
import { head, nav,metaData , markdown,algolia } from './configs'
import { generateSidebar } from 'vitepress-sidebar';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import { GitChangelog, GitChangelogMarkdownSection, } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid'

const baseUrl = 'https://jieliu.xyz'
const RSS: RSSOptions = {
  title: '节流网 - 羊毛 线报分享 Apple账号分享 薅羊毛 省钱技巧与理财 开源节流',
  baseUrl,
  copyright: 'Copyright (c) 2025-present, 节流网',
}

export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  title: "节流网 ",
  titleTemplate: '羊毛 线报分享 Apple账号分享 薅羊毛 省钱技巧与理财 开源节流 ',
  description: "节流网是专注于分享羊毛线报 软件账号 省钱技巧、理财经验和实用工具的个人博客，助您在互联网的浪潮中过的更好",
  lastUpdated: true,


    // 输出目录
   outDir: './dist',// 将构建输出到 .vitepress 文件夹本身

   rewrites: {
  // 👉 处理 posts 目录中有子文件夹的情况，例如：posts/教程/详细的/羊毛线报.md → /教程/详细的/羊毛线报.md
  'posts/:category/:subfolder/:title.md': ':category/:subfolder/:title.md',
  // 👉 处理 posts 目录中直接放在分类下的文章，例如： posts/教程/副业收入.md → /教程/副业收入.md
  'posts/:category/:title.md': ':category/:title.md',
  // 👉 处理 pages 目录中的单独页面，例如： pages/关于.md → /关于.md
   'pages/:category/:subfolder/:title.md': ':category/:subfolder/:title.md',
  'pages/:category/:title.md': ':category/:title.md',
},

  // Markdown 配置
  markdown: {
    math: true,
    // 行号显示
    lineNumbers: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
    config(md) {
      md.use(groupIconMdPlugin) // 代码组图标
      md.use(MermaidMarkdown)
      // 组件插入 h1 标题下
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },

  vite: {
    plugins: [
      // 代码组图标
      groupIconVitePlugin({
        customIcon: {
          java: 'logos:java',
          js: 'logos:javascript',
          md: 'logos:markdown',
          css: 'logos:css-3',
          bash: 'logos:bash-icon',
          debian: 'logos:debian',
          ubuntu: 'logos:ubuntu',
          centos: 'logos:centos-icon',
          rhel: 'logos:redhat-icon',
          docker: 'vscode-icons:file-type-docker',
          text: 'vscode-icons:file-type-text',
          shell: 'vscode-icons:file-type-shell',
          sh: 'vscode-icons:file-type-shell',
          log: 'vscode-icons:file-type-log',
          输出: 'vscode-icons:file-type-log',
        },
      }),
      RssPlugin(RSS),
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/jieliu-xyz/jieliu.xyz',
      }),
      GitChangelogMarkdownSection(),
      MermaidPlugin(),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
      include: ['mermaid'],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/ui',
        'mermaid'
      ],
    },
  },

  // Fav 图标
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  // 站点地图
  sitemap: {
    hostname: 'https://jieliu.xyz',
  },
  // 百度文章分析
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
      },
    },
    {
      provider: "google",
      options: {
        id: "G-90VN3KSXX9",
      },
    },
  ],

  // 忽略死链接
  ignoreDeadLinks: true, //关闭忽略死链，不配置即可，非常不建议设置为true

  // 外观设置 - 支持自动切换
  appearance: true,

  // 默认主题配置
  themeConfig: {
    // 左上角 logo
    logo: '/logo.png',

    

    // 移动端侧边栏文字更改
    sidebarMenuLabel: '目录',

    // 移动端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    // 移动端返回顶部文字修改
    returnToTopLabel: '返回顶部',
    
    search: {
      provider: 'local',
     // provider: 'algolia',
      options: algolia,
    },

    // 页脚配置
    footer: {
      message:
        '<a href="/about/">关于我们</a> | <a href="/contact/">联系我们</a> | <a href="/friends/">友情链接</a> | <a href="/privacy/">隐私政策</a>',
      copyright: '© 2025 开源节流',
    },
  
    // @ts-ignore
    articleMetadataConfig: {
      author: 'jieliu.xyz', // 文章全局默认作者名称
      authorLink: '/about', // 点击作者名时默认跳转的链接
    },
    // 自定义扩展: 文章版权配置
    copyrightConfig: {
     license: '署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)',
     licenseLink: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh',
    },

    // 大纲
    outline: {
      level: [2, 4],
      label: '页面导航'
    },

    // 编辑本页
    editLink: {
      pattern: 'https://github.com/',
      text: '如有不足 还望润色'
    },

    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 导航栏
    nav,

    // 侧边栏
    sidebar: generateSidebar([
      {
        documentRootPath: '/posts',
        scanStartPath: 'blog',
        resolvePath: '/blog/',
        collapseDepth: 2,                        // 折叠组 3 级菜单
        sortMenusByName: true,                   // 按名称对菜单项中的项目进行排序
        useTitleFromFileHeading: true,           // 从 h1 标签中获取菜单标题
        useFolderTitleFromIndexFile: true,       // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称
        sortMenusOrderNumericallyFromLink: true, // 如果菜单名称以数字开头，则按数字而不是名称排序
      },
      {
        documentRootPath: '/posts',
        scanStartPath: '教程',
        resolvePath: '/教程/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/posts',
        scanStartPath: '节流',
        resolvePath: '/节流/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
      {
        documentRootPath: '/posts',
        scanStartPath: '资源',
        resolvePath: '/资源/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
        excludePattern: ['资源/'],
      },
      {
        documentRootPath: '/posts',
        scanStartPath: '工具',
        resolvePath: '/工具/',
        collapseDepth: 2,
        sortMenusByName: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusOrderNumericallyFromLink: true,
      },
    ]),

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
     
    ]
  }
});
