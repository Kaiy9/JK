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
.节流jieliu.xyz
├── .vitepress/                    # VitePress 配置与主题目录（或 docs/.vitepress）
│   ├── config.ts                  # VitePress 主配置（站点设置）
│   ├── index.ts                   # 主题入口（可选）
│   ├── theme/                     # 自定义主题文件夹（覆盖默认主题）
│   │   ├── index.ts               # 主题导出 / 注册逻辑
│   │   ├── styles/                # 主题样式（全局 CSS / Less / Sass）
│   │   └── components/            # 自定义组件（PostList、首页组件等）
│   │       └── PostList.vue
│   └── public/                    # 主题专用静态资源（可与项目 public 合并）
├── posts/                         # 文章目录（可以在根或 docs/ 下）
│   └── thoughts/                  # 随想 / 随笔（示例）
│       ├── index.md
│       ├── 光不在彼方.md
│       └── 电子音乐.md
├── pages/                         # 额外页面（about、project 等）
├── public/                        # 静态资源（图片、favicon 等）
├── package.json
└── README.md                      # 项目说明（当前文件）
```

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
