import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 网站基本信息
const siteConfig = {
  title: '节流网',
  description: '节流网 - 羊毛 线报分享 Apple账号分享 薅羊毛 省钱技巧与理财 开源节流',
  link: 'https://jieliu.xyz',
  language: 'zh-CN',
  author: 'jieliu.xyz',
  email: '97@jieliu.xyz'
};

// 递归获取所有markdown文件
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') && file !== 'index.md') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 解析markdown文件获取文章信息
function parseMarkdownFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content: body } = matter(content);
    
    // 生成文章URL
    let url = filePath
      .replace(path.join(__dirname, '../posts'), '')
      .replace(/\\/g, '/')
      .replace('/README.md', '')
      .replace('.md', '');
    
    // 确保URL以/开头
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    
    return {
      title: frontmatter.title || '无标题',
      description: frontmatter.description || '',
      date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
      url: siteConfig.link + url,
      content: body.substring(0, 500) + '...' // 截取前500字符作为摘要
    };
  } catch (error) {
    console.error(`解析文件失败: ${filePath}`, error);
    return null;
  }
}

// 生成RSS XML
function generateRSSXML(articles) {
  const now = new Date().toUTCString();
  
  let rssItems = articles
    .sort((a, b) => b.date - a.date) // 按日期倒序排列
    .slice(0, 20) // 只取最新的20篇文章
    .map(article => {
      const pubDate = article.date.toUTCString();
      const description = article.description || article.content;
      
      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.url}</link>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid>${article.url}</guid>
    </item>`;
    }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.title}</title>
    <link>${siteConfig.link}</link>
    <description>${siteConfig.description}</description>
    <language>${siteConfig.language}</language>
    <managingEditor>${siteConfig.email} (${siteConfig.author})</managingEditor>
    <webMaster>${siteConfig.email} (${siteConfig.author})</webMaster>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteConfig.link}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;
}

// 主函数
function main() {
  try {
    console.log('开始生成RSS feed...');
    
    // 获取所有markdown文件
    const postsDir = path.join(__dirname, '../posts');
    const markdownFiles = getAllMarkdownFiles(postsDir);
    
    console.log(`找到 ${markdownFiles.length} 个markdown文件`);
    
    // 解析所有文章
    const articles = markdownFiles
      .map(parseMarkdownFile)
      .filter(article => article !== null);
    
    console.log(`成功解析 ${articles.length} 篇文章`);
    
    // 生成RSS XML
    const rssXML = generateRSSXML(articles);
    
    // 写入RSS文件
    const rssPath = path.join(__dirname, '../public/rss.xml');
    fs.writeFileSync(rssPath, rssXML, 'utf-8');
    
    console.log(`RSS feed已生成: ${rssPath}`);
    console.log(`包含 ${Math.min(articles.length, 20)} 篇最新文章`);
    
  } catch (error) {
    console.error('生成RSS feed失败:', error);
    process.exit(1);
  }
}

// 运行脚本
main();

