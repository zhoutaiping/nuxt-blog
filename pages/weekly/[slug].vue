<template>
  <div class="weekly-detail max-w-3xl mx-auto">
    <!-- 返回链接 -->
    <NuxtLink to="/" class="inline-flex items-center text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors mb-8">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      返回列表
    </NuxtLink>

    <!-- 加载状态 -->
    <div v-if="pending" class="text-center py-12 text-gray-400 dark:text-slate-500">
      加载中...
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="text-center py-12 text-gray-400 dark:text-slate-500">
      <p>周刊不存在或加载失败</p>
    </div>

    <!-- 周刊内容 -->
    <article v-else-if="weekly" class="prose lg:prose-lg">
      <!-- 标题和元信息 -->
      <header class="mb-8 not-prose">
        <h1 class="text-3xl font-semibold text-gray-900 dark:text-slate-100 mb-4">{{ weekly.title }}</h1>
        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400">
          <time>{{ formatDate(weekly.date) }}</time>
          <span v-if="weekly.tags" class="flex gap-2">
            <span
              v-for="tag in weekly.tags"
              :key="tag"
              class="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-gray-700 dark:text-slate-300"
            >
              {{ tag }}
            </span>
          </span>
        </div>
      </header>

      <!-- 封面图 -->
      <img
        v-if="weekly.cover"
        :src="weekly.cover"
        :alt="weekly.title"
        class="w-full rounded-lg mb-8"
      />

      <!-- Markdown 内容渲染 -->
      <ContentRenderer :value="weekly" class="prose dark:prose-invert" />
    </article>

    <!-- 导航链接 -->
    <nav v-if="weekly" class="flex justify-between mt-12 pt-8 border-t border-gray-100 dark:border-slate-700 not-prose">
      <NuxtLink
        v-if="prevWeekly"
        :to="prevWeekly._path"
        class="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
      >
        ← {{ prevWeekly.title }}
      </NuxtLink>
      <div v-else></div>

      <NuxtLink
        v-if="nextWeekly"
        :to="nextWeekly._path"
        class="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
      >
        {{ nextWeekly.title }} →
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
// 周刊内容类型定义
interface Weekly {
  _path?: string
  _id?: string
  title: string
  date: string
  description?: string
  cover?: string
  tags?: string[]
  body?: unknown
}

const route = useRoute()
const slug = route.params.slug as string

// 获取当前周刊内容
const { data: weekly, pending, error } = await useAsyncData<Weekly | null>(`weekly-${slug}`, () =>
  queryContent<Weekly>('weekly', slug).findOne()
)

// 获取上一篇和下一篇周刊
const { data: allWeeklies } = await useAsyncData<Weekly[]>('all-weeklies', () =>
  queryContent<Weekly>('weekly')
    .sort({ date: -1 })
    .find()
)

const currentIndex = computed<number>(() => {
  if (!allWeeklies.value || !weekly.value) return -1
  return allWeeklies.value.findIndex(w => w._path === weekly.value?._path)
})

const prevWeekly = computed<Weekly | null>(() => {
  if (currentIndex.value < 0 || !allWeeklies.value) return null
  if (currentIndex.value >= allWeeklies.value.length - 1) return null
  return allWeeklies.value[currentIndex.value + 1] ?? null
})

const nextWeekly = computed<Weekly | null>(() => {
  if (currentIndex.value < 0 || !allWeeklies.value) return null
  if (currentIndex.value <= 0) return null
  return allWeeklies.value[currentIndex.value - 1] ?? null
})

// 格式化日期
const formatDate = (date: string | Date | undefined) => {
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
  title: weekly.value ? `${weekly.value.title} - 潮流周刊` : '潮流周刊',
  meta: [
    {
      name: 'description',
      content: weekly.value?.description || '潮流周刊，记录工程师的多彩生活见闻'
    }
  ]
})
</script>
