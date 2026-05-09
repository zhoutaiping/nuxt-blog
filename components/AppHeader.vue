<template>
  <header class="border-b border-gray-100 dark:border-slate-700">
    <div class="max-w-3xl mx-auto px-4 py-6 flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-medium text-gray-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          潮流周刊
        </NuxtLink>
        <p class="text-sm text-gray-500 dark:text-slate-400 mt-0.5">记录多彩生活见闻</p>
      </div>

      <nav class="flex items-center gap-5">
        <NuxtLink to="/" class="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors" active-class="text-gray-900 dark:text-slate-100">
          首页
        </NuxtLink>
        <NuxtLink to="/about" class="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors" active-class="text-gray-900 dark:text-slate-100">
          关于
        </NuxtLink>
        <a href="/rss.xml" target="_blank" class="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors">
          RSS
        </a>
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// 顶部导航组件
</script>
