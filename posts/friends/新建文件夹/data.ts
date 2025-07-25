import type { NavData } from '../../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://www.sojson.com/sojson/favicon16.png',
        title: 'SoJson在线解析',
        desc: 'JSON在线解析及格式化验证',
        link: 'https://www.sojson.com'
      }
    ]
  },
  {
    title: 'GG棒',
    items: [
      {
        title: 'UnitedShop',
        desc: '可以看看老外在卖啥',
        link: 'https://unitedshop.su/usercp/auth/login',
        badge: 'Mark'
      },
      {
        title: 'TGWiki',
        desc: '有Tg使用的问题或许可以在这里找到方案',
        link: 'https://tgnav.github.io/tgwiki',
        badge: 'Mark'
      },
    ]
  }
]
