<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
    <NuxtLoadingIndicator color="#3B82F6" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

// 全局设置
useHead({
  htmlAttrs: {
    lang: 'zh-CN',
    class: colorMode.value === 'dark' ? 'dark' : ''
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: colorMode.value === 'dark' ? '#0f172a' : '#ffffff' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ]
})
</script>
