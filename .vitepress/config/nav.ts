import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/', activeMatch: '^/nav' },
  { text: '我的导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '我的博客',
    link: '/blog/index',
    activeMatch: '^/blog',
  },
  {
    text: '教程与总结',
    items: [
      { text: '我的随笔', link: "/教程/我的随笔/我的随笔" },
      { text: '教程分享', link: '/教程/教程' },
      { text: '前端后端', link: '/教程/前端后端' },
      {
        items: [
          { text: '学习笔记', link: '/教程/学习笔记' },
          { text: '好物分享', link: '/教程/好物分享' },
        ],
      },
      { text: '我的装备', link: '/教程/我的随笔' },
      { text: '自媒体内容', link: '/教程/我的随笔' },
      { text: '足球相关', link: '/教程/教程' },
    ],
    activeMatch: '^/教程',
  },
  {
    text: '开源赚钱理财',
    items: [
      {
        text: '开源',
        link: '/开源/最新商机',
      },
      {
        // text: '常用工具/方法',
        items: [
          { text: '最新商机', link: '/开源/最新商机' },
          { text: '长期搞钱', link: '/开源/长期搞钱' },
          { text: '提升自我', link: '/开源/提升自我' },
        ],
      },
      {
        text: '赚钱提升理财',
        items: [
          { text: '自媒体相关', link: '/开源/提升自我' },
          { text: '创业相关', link: '/开源/提升自我' },
          { text: '英语与西班牙', link: '/开源/提升自我' },
          { text: '理财知识', link: '/开源/提升自我' },
          { text: '副业收入', link: '/开源/提升自我' },
        ],
      },
      { text: '', link: '/开源/提升自我' },
      { text: '', link: '/开源/提升自我' },
      // { text: 'Git 命令清单', link: '/开源/提升自我' }
    ],
    activeMatch: '^/workflow',
  },
  {
    text: '羊毛白嫖节流',
    items: [
      { text: '节流', link: '/', activeMatch: '^/nav' },
      {
        text: '羊毛福利',
        items: [
          { text: '羊毛线报', link: '/节流/羊毛线报' },
          { text: '福利活动', link: '/节流/福利活动' },
          { text: '教育优惠', link: '/节流/教育优惠' },
          { text: '免费机场', link: '/节流/免费机场' },
          { text: '账号共享', link: '/节流/账号共享' },
        ],
      },
    ],
    activeMatch: '^/',
  },
  {
    text: '共享的资源',
    items: [
      {
        text: '资源共享',
        items: [
          { text: '软件资源', link: '/资源/软件资源' },
          { text: '影视资源', link: '/资源/影视资源' },
          { text: 'iPad资源', link: '/资源/文件资源' },
          { text: '', link: '/资源/文件资源' },
          { text: '图片壁纸', link: '/资源/图片壁纸' },
          { text: '小说资源', link: '/资源/小说资源' },
        ],
      },
      {
        text: '海纳百川',
        link: '/开源/提升自我',
      },
      { text: '在线工具', link: '/开源/经验分享' },
      { text: '经验分享', link: '/开源/经验分享' },
    ],
    activeMatch: '^/efficiency',
  },
  {
    text: '97',
    link: '/pages/feeds-sub/index',
  },
]
