<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- 顶部导航 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main class="flex-grow container mx-auto px-4 py-8 max-w-3xl">
      <slot />
    </main>

    <!-- 底部信息 -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// 默认布局
</script>
