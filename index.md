---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: "m-home-layout"

hero:
  name: JieLiu.xyz
  text: 线报资源分享
  tagline: 省钱第一站，从这里开始！
  image:
    src: /logo.png
    alt: 开源节流
  actions:
    - text: 日常笔记
      link: /博客/我的随笔
    - text: 开源
      link: /nav
      theme: alt
    - text: 网站导航
      link: /节流/福利活动
    - text: 节流
      link: /节流/福利活动
      theme: alt
features:
  - icon: 📖
    title: 我的博客
    details: 记录人生所写，帮助万千网友
    link: /blog
    linkText: 前往阅读
  - icon: 💡
    title: 羊毛线报
    details: 罗列免费羊毛，节流钱包收入
    link: /线报/福利活动
    linkText: 前往搞钱
  - icon: 🌍
    title: 网址导航
    details: 导航热门工具，便利打开网站
    link: /nav
    linkText: 前往导航
  - icon: 🚀
    title: 上网推荐
    details: 搜寻免费机场，搜索万能网站
    link: /节流/免费机场
    linkText: 前往获取
  - icon: 📚
    title: 资源分享
    details: 推荐共享资源，享受节流快乐
    link: /节流/羊毛线报
    linkText: 前往阅读
  - icon: 🛠️
    title: 情不知所起，一往而深。
    details: 开源是进步的阶梯，节流是阶梯的支撑
    link: /about
    linkText: 前往导航
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

/* 新加的！！！！！！！！！！
/* 新加的
/* 移动端适配 - 当宽度小于959px时 */
@media (max-width: 959px) {
  /* 改为单列布局 */
  .home-container {
    grid-template-columns: 1fr; /* 使用1fr而不是2fr */
    grid-template-areas: 
      "content" 
      "sidebar";
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  
  /* 减少移动端的间距 */
  .home-content-area,
  .home-sidebar {
    gap: 1.5rem;
    width: 100%;
  }
}

/* 小屏幕移动端进一步优化 */
@media (max-width: 480px) {
  .home-container {
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 0 0.5rem;
  }
  }
  

  .home-content-area,
  .home-sidebar {
    gap: 1rem;
  }


@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 50px !important;
  }
}
</style>
