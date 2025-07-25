---
description: 导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
showArticleMetadata: false
editLink: false
showComment: false
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./style.scss"></style>

# 友情链接

::: 信息

来推荐你的网站，与我们平等交换链接，互相共享。


<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>