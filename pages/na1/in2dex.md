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
import MNav from './MNav.vue' 


# 工具导航

::: info
*  整理一些生活工作中常用的一些网站
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>