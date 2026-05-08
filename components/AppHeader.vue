<template>
  <header class="border-b border-gray-100">
    <div class="container mx-auto px-4 py-6 max-w-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <NuxtLink to="/" class="text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
          潮流周刊
        </NuxtLink>
        <p class="text-sm text-gray-500 mt-1">记录多彩生活见闻</p>
      </div>

      <nav class="flex flex-wrap gap-4 sm:gap-6">
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition-colors">
          首页
        </NuxtLink>
        <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 transition-colors">
          关于
        </NuxtLink>
        <a href="/rss.xml" target="_blank" class="text-gray-600 hover:text-gray-900 transition-colors">
          RSS
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// 顶部导航组件
</script>
