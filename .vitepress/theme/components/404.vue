<script setup lang="ts">
import { withBase, useRouter } from "vitepress";

const router = useRouter();

const ns = "error-page";
</script>

<template>
  <div :class="[ns, 'page-container']">
    <div :class="`${ns}__content`">
      <img :src="withBase('/404.png')" :class="`${ns}__img`" alt="404" />
      <div :class="`${ns}__detail`">
        <h2>404</h2>
        <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
        <button @click="router.go('/')">返回首页</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$namespace: error-page;

.#{$namespace} {
  // 改为正常文档流，不再固定定位
  width: 100%;
  min-height: 54vh; // 减少最小高度，为底部脚页留出空间
  padding: 40px 20px; // 添加内边距
  
  // 背景色
  background-color: var(--vp-c-bg);
  
  // 垂直居中，但不占满整个视口
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px; // 减少间距，让内容更紧凑
    max-width: 90%;
    text-align: center;
    margin-top: -60px; // 向上偏移，让内容更靠上
  }

  &__img {
    max-width: 250px; // 稍微减小图片尺寸
    height: auto;
    flex-shrink: 0;
  }

  &__detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px; // 减少间距

    h2 {
      font-size: 52px; // 稍微减小字体
      color: var(--vp-c-text-1);
      line-height: 1;
      margin: 0;
    }
    
    h4 {
      margin: 0;
      font-size: 18px;
      font-weight: normal;
      color: var(--vp-c-text-2);
      line-height: 1.4;
    }

    button {
      color: #ffffff;
      background-color: #395ae3;
      box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
      font-size: 14px;
      width: 100px;
      height: 32px;
      padding: 4px 15px;
      border-radius: 6px;
      outline: none;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      line-height: 1.5714285714285714;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;

      &:hover {
        background-color: #5a79f4;
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    min-height: 50vh; // 移动端进一步减少高度
    padding: 30px 15px;
    
    &__content {
      flex-direction: column;
      gap: 40px; // 减少移动端间距
      margin-top: -40px; // 移动端向上偏移
    }

    &__img {
      max-width: 180px; // 移动端减小图片
    }

    &__detail {
      gap: 12px;
      
      h2 {
        font-size: 42px;
      }
      
      h4 {
        font-size: 16px;
        padding: 0 20px;
      }
    }
  }

  @media (max-width: 480px) {
    min-height: 45vh;
    padding: 20px 10px;
    
    &__content {
      gap: 30px;
      margin-top: -30px;
    }

    &__img {
      max-width: 140px;
    }

    &__detail {
      gap: 10px;
      
      h2 {
        font-size: 36px;
      }
      
      h4 {
        font-size: 14px;
      }
    }
  }
}

// 页面容器样式，确保正常文档流
.page-container {
  position: relative;
  width: 100%;
}
</style>

