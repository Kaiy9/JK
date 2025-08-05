# RSS订阅功能实现

## 功能概述

已成功为您的VitePress博客网站添加了RSS订阅功能，RSS链接现在显示在GitHub链接旁边。

## 实现的功能

### 1. 社交链接中添加RSS订阅
- **位置**: 在GitHub链接旁边
- **图标**: 使用自定义RSS SVG图标
- **链接**: `/rss.xml`

### 2. RSS生成脚本
- **文件**: `scripts/generate-rss.js`
- **功能**: 自动扫描posts目录下的所有markdown文件，生成RSS XML
- **特性**: 
  - 支持frontmatter解析
  - 按时间倒序排列
  - 包含最新20篇文章
  - 自动生成文章摘要

### 3. 自动化构建
- **集成**: 已将RSS生成添加到构建流程中
- **命令**: `npm run generate:rss`
- **时机**: 每次构建时自动生成最新的RSS文件

## 修改的文件

### 1. `.vitepress/config.mts`
```typescript
socialLinks: [
  { icon: 'github', link: 'https://github.com/yqchilde/yqchilde.github.io' },
  { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.429 2.571c-.794 0-1.429.635-1.429 1.429v16c0 .794.635 1.429 1.429 1.429h17.143c.794 0 1.429-.635 1.429-1.429V4c0-.794-.635-1.429-1.429-1.429H3.429zm2.857 4.572h11.428c.794 0 1.429.635 1.429 1.428v8.572c0 .794-.635 1.428-1.429 1.428H6.286c-.794 0-1.429-.634-1.429-1.428V8.571c0-.793.635-1.428 1.429-1.428zm2.857 2.857v2.857h5.714V10H9.143zm0 4.286V14h5.714v-1.714H9.143z"/></svg>' }, link: '/rss.xml', ariaLabel: 'RSS订阅' }
],
```

### 2. `package.json`
```json
"scripts": {
  "generate:rss": "node ./scripts/generate-rss.js",
  "build": "npm run daily-notes && npm run generate:rss && vitepress build docs"
}
```

### 3. `scripts/generate-rss.js` (新增)
- ES模块格式的RSS生成脚本
- 自动扫描posts目录
- 生成标准RSS 2.0格式的XML文件

### 4. 文章元数据优化
- 为缺少frontmatter的文章添加了标题、描述和日期
- 优化了RSS中的文章显示效果

## 使用方法

### 本地开发
```bash
# 生成RSS文件
npm run generate:rss

# 启动开发服务器
npm run docs:dev
```

### 构建部署
```bash
# 构建（会自动生成RSS）
npm run build
```

### RSS订阅
- RSS链接: `https://jieliu.xyz/rss.xml`
- 用户可以在任何RSS阅读器中添加此链接来订阅您的博客

## 文件结构

```
ky/
├── .vitepress/
│   └── config.mts          # 添加了RSS社交链接
├── scripts/
│   └── generate-rss.js     # RSS生成脚本
├── public/
│   └── rss.xml            # 生成的RSS文件
├── posts/                 # 文章目录
├── package.json           # 添加了RSS生成命令
└── RSS功能说明.md         # 本说明文件
```

## 注意事项

1. **依赖**: 脚本使用了已有的`gray-matter`依赖来解析frontmatter
2. **权限**: 确保scripts目录下的文件有执行权限
3. **更新**: 每次发布新文章后，运行构建命令会自动更新RSS
4. **兼容性**: RSS文件符合RSS 2.0标准，兼容所有主流RSS阅读器

## 测试验证

可以使用以下RSS阅读器测试订阅功能：
- Feedly
- Inoreader
- RSS Guard
- 或任何支持RSS 2.0的阅读器

RSS链接: `https://jieliu.xyz/rss.xml`

