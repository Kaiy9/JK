import { createContentLoader } from 'vitepress'

export default createContentLoader('thoughts/*.md', {
  transform(rawData) {
    return rawData
      .filter(post => post.frontmatter.publish !== false)
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map(post => ({
        title: post.frontmatter.title || post.url.split('/').pop().replace('.html', ''),
        date: post.frontmatter.date || '',
        url: post.url,
        publish: post.frontmatter.publish ?? true
      }))
  }
})

