# 节流网
---

## 快速开始

**环境准备**
- Node.js >= 16 推荐
- Git（用于部署到 GitHub）

**本地开发**
```bash
# 安装依赖（在项目根目录）
npm install

# 本地启动（开发模式）
npm run dev
# 或（pnpm）
pnpm dev

# 打包生成静态文件
npm run build

# 本地预览打包结果（可选）
npm run serve
```

> 注意：如果你的 VitePress 配置目录在 `docs/.vitepress`（即把整个站点放在 docs 里），请在 `docs` 下运行脚本或在 package.json 脚本里指定工作目录。

---
- 节流网
  - 限报活动福利资源
  - 学习各种教程

如果你觉得博客对你有帮助，可以帮忙点个 `star` 或者打赏犒劳一下

![鼓励作者](/public/sponsor/wechat-color.jpg)


## 项目结构

```

```
JK/
├── .git/                  # Git 版本控制目录
├── .github/               # GitHub Actions 或其他 GitHub 相关配置
├── .vitepress/            # VitePress 配置目录
│   ├── components.d.ts
│   ├── config.mts         # VitePress 主配置文件
│   ├── configs/           # 配置文件（如导航、头部信息等）
│   └── theme/             # 自定义主题文件
├── CNAME                  # 自定义域名配置
├── README.md              # 当前文件
├── RSS功能说明.md         # RSS 功能详细说明
├── components.d.ts
├── docsearch.json
├── index.md               # 网站首页 Markdown 文件
├── package.json           # 项目依赖和脚本配置
├── pages/                 # 独立页面目录 (如关于、联系、隐私等)
│   ├── about/
│   ├── contact/
│   ├── friends/
│   ├── home/
│   ├── nav/
│   └── privacy/
├── pnpm-lock.yaml         # pnpm 锁定文件
├── posts/                 # 博客文章目录
│   ├── 97.md
│   ├── blog/              # 博客文章分类
│   ├── install.md
│   ├── thoughts/          # 思考类文章
│   ├── 代理工具.md
│   ├── 博客.md
│   ├── 免费机场.md
│   ├── 工具/              # 工具类文章
│   ├── 教程/              # 教程类文章
│   ├── 节流/              # 节流类文章
│   └── 资源/              # 资源类文章
├── public/                # 静态资源目录 (图片、CSS、JS、favicon 等)
│   ├── FiraCode-Regular.woff2
│   ├── blog/
│   ├── donate/
│   ├── favicon.ico
│   ├── icons/
│   ├── login/
│   ├── logo.png
│   ├── rss.xml            # 生成的 RSS Feed 文件
│   ├── sponsor/
│   └── svg/
├── scripts/               # 辅助脚本目录
│   ├── daily-notes.js
│   ├── generate-recommended-data.js
│   ├── generate-rss.js    # RSS 生成脚本
│   ├── generate-site-data.js
│   └── update-friend.js
├── vite.config.ts         # Vite 配置文件
└── wrangler.jsonc         # Cloudflare Wrangler 配置文件 (可能用于部署到 Cloudflare Workers/Pages)



**说明：**
- `.vitepress/` 包含站点配置与主题自定义。如果你将站点放在 `docs/`，目录会变为 `docs/.vitepress/`。
- `posts/` 是你写文章的位置；PostList 等组件会读取这里的 Markdown 文件（通过 `import.meta.glob`）。

---

## 目录与文件的详细解释

### `.vitepress/config.ts`（或 config.js）
- 站点基础信息（`title`, `description`, `base`）
- `themeConfig`：导航栏（navbar）、侧边栏（sidebar）、社交链接等
- `head`：自定义 `<head>`（meta、favicon、第三方脚本）

### `.vitepress/theme/` 详解
- `index.ts`：主题的主入口文件，可用于全局注册组件、引入样式或 wrap 当前页面。
- `components/`：放置自定义 Vue 组件，如：
  - `PostList.vue`：文章列表组件（读取 posts 目录并展示）
  - `RecommendedReading.vue`：推荐阅读
  - `RecentComments.vue`：最新评论（如果你有后端或第三方评论）
- `styles/`：全局样式或主题变量（例如覆盖 VitePress CSS 变量）

### `posts/thoughts/*.md`（文章）
- 每篇文章建议包含 frontmatter（元信息），例如：
```yaml
---
