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

# 工具导航

::: info

- 🤔 整理本人生活工作中常用的一些站点
  :::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
