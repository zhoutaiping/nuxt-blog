<template>
  <footer class="border-t border-gray-100 mt-12">
    <div class="container mx-auto px-4 py-8 max-w-3xl text-center text-gray-500 text-sm">
      <p>© {{ new Date().getFullYear() }} 潮流周刊 - 记录多彩生活见闻</p>
      <p class="mt-2">
        Powered by <a href="https://nuxt.com" target="_blank" class="text-blue-600 hover:underline">Nuxt 3</a>
      </p>
      <div class="flex justify-center gap-4 mt-4">
        <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors">
          GitHub
        </a>
        <a href="/rss.xml" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors">
          RSS
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 底部信息组件
</script>
