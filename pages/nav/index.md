---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
---

<style src="/.vitepress/theme/style/nav.css"></style>

<script setup>
import { NAV_DATA } from './data.ts'
</script>

# 网站导航

:::  INFO

 整理一些生活工作中常用的一些网站


<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
