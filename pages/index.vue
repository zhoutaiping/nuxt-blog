<template>
  <div class="weekly-list">
    <!-- 页面标题 -->
    <div class="mb-12 text-center">
      <h1 class="text-3xl font-semibold text-gray-900 mb-2">潮流周刊</h1>
      <p class="text-gray-500">记录多彩生活见闻</p>
    </div>

    <!-- 周刊列表 -->
    <div class="space-y-8">
      <article
        v-for="weekly in weeklies"
        :key="weekly._path"
        class="weekly-card border-b border-gray-100 pb-8 last:border-0"
      >
        <NuxtLink :to="weekly._path" class="block">
          <!-- 期数和标题 -->
          <h2 class="text-xl font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {{ weekly.title }}
          </h2>

          <!-- 发布日期 -->
          <time class="text-sm text-gray-500 mb-3 block">
            {{ formatDate(weekly.date) }}
          </time>

          <!-- 封面图 -->
          <img
            v-if="weekly.cover"
            :src="weekly.cover"
            :alt="weekly.title"
            class="w-full h-48 object-cover rounded-lg mb-4"
            loading="lazy"
          />

          <!-- 简介 -->
          <p v-if="weekly.description" class="text-gray-600 leading-relaxed">
            {{ weekly.description }}
          </p>
        </NuxtLink>
      </article>
    </div>

    <!-- 空状态 -->
    <div v-if="!weeklies || weeklies.length === 0" class="text-center py-12 text-gray-400">
      <p>暂无周刊内容，请在 content/weekly/ 目录中添加 Markdown 文件</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 查询所有周刊内容，按日期倒序排列
const { data: weeklies } = await useAsyncData('weeklies', () =>
  queryContent('weekly')
    .sort({ date: -1 })
    .find()
)

// 格式化日期
const formatDate = (date: string | Date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 页面元数据
useHead({
  title: '潮流周刊 - 记录多彩生活见闻',
  meta: [
    { name: 'description', content: '潮流周刊，记录工程师的多彩生活见闻' }
  ]
})
</script>

<style scoped>
</style>
