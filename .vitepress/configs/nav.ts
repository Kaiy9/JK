/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
 { text: '首页', link: '/', activeMatch: '^/nav' },
  { text: '网站导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '我的博客',
    link: '/blog/index',
    activeMatch: '^/blog',
  },
  {
    text: '教程装备提升',
    items: [
      {
        text: '赚钱提升理财',
        items: [
          { text: '提升自我', link: '/教程/提升自我' },
          { text: '自媒体相关', link: '/教程/自媒体相关' },
          { text: '创业相关', link: '/教程/创业相关' },
          { text: '英语与西语', link: '/教程/英语与西语' },
          { text: '理财知识', link: '/教程/理财知识' },
          { text: '副业收入', link: '/教程/副业收入' },
        ],
      },
      { text: '', link: '/开源/提升自我' },
      { text: '', link: '/开源/提升自我' },
    ],
    activeMatch: '^/教程',
  },
  {
    text: '羊毛线报福利',
    items: [
      { text: '节流', 
        // link: '/', activeMatch: '^/nav' },
        items: [
          { text: '羊毛线报', link: '/节流/羊毛线报' },
          { text: '福利活动', link: '/节流/福利活动' },
          { text: '教育优惠', link: '/节流/教育优惠' },
          { text: '', link: '/节流/免费机场' },
          { text: '', link: '/资源/苹果账号' },
        ],
      },
    ],
    activeMatch: '^/节流',
  },
  {
    text: '共享的资源',
    items: [
      {
        text: '资源共享',
        items: [
          { text: '苹果id分享', link: '/资源/苹果账号' },
          { text: '软件资源', link: '/资源/软件资源' },
          { text: '影视资源', link: '/资源/影视资源' },
          { text: 'iPad资源', link: '/资源/iPad资源' },
          { text: '文件资源', link: '/资源/文件资源' },
          { text: '图片壁纸', link: '/资源/图片壁纸' },
          { text: '小说资源', link: '/资源/小说资源' },
        ],
      },
    ],
    activeMatch: '^/资源',
  },
   {
    text: '工具与软件',
    items: [
      {
        text: '工具与软件',
        items: [
          { text: '测速工具', link: '/工具/测速工具' },
          { text: '在线工具', link: '/工具/在线工具' },
          { text: '开发工具', link: '/工具/开发工具' },
          { text: '', link: '/工具/好物分享' },
          { text: '我的装备', link: '/工具/我的装备' },
          { text: '开发工具', link: '/工具/开发工具' },
          { text: '', link: '/工具/代理工具' },
          { text: '', link: '/工具/账号共享' },
        ],
      },
    ],
    activeMatch: '^/工具',
  },
  {
    text: '97',
    link: '/',
  },
  {
    text: '1',
    link: '/thoughts/',
  },
]