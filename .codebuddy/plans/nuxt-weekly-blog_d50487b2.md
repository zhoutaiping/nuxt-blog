---
name: nuxt-weekly-blog
overview: 使用 Nuxt 3 创建一个模仿 https://weekly.tw93.fun 的周刊类博客系统，包含极简设计风格、时间线布局、Markdown内容管理等功能
design:
  architecture:
    framework: react
    component: shadcn
  styleKeywords:
    - Minimalism
    - Clean
    - Content-First
    - Light
  fontSystem:
    fontFamily: PingFang SC
    heading:
      size: 24px
      weight: 600
    subheading:
      size: 18px
      weight: 500
    body:
      size: 16px
      weight: 400
  colorSystem:
    primary:
      - "#3B82F6"
      - "#1D4ED8"
    background:
      - "#FFFFFF"
      - "#F9FAFB"
    text:
      - "#111827"
      - "#6B7280"
    functional:
      - "#E5E7EB"
      - "#10B981"
todos:
  - id: init-project
    content: 初始化 Nuxt 3 项目，安装依赖（nuxt-content, tailwindcss）
    status: completed
  - id: config-nuxt
    content: 配置 nuxt.config.ts，启用 @nuxt/content 和 @nuxtjs/tailwindcss 模块
    status: completed
    dependencies:
      - init-project
  - id: create-layout
    content: 创建默认布局 default.vue，包含顶部导航和底部信息
    status: completed
    dependencies:
      - config-nuxt
  - id: create-index
    content: 创建首页 index.vue，实现周刊列表页（时间倒序、卡片样式）
    status: completed
    dependencies:
      - create-layout
  - id: create-detail
    content: 创建周刊详情页 weekly/[slug].vue，实现 Markdown 渲染
    status: completed
    dependencies:
      - create-layout
  - id: add-sample-content
    content: 添加示例周刊内容（Markdown 文件），验证功能完整性
    status: completed
    dependencies:
      - create-detail
  - id: style-polish
    content: 优化样式细节，确保极简风格和响应式适配
    status: completed
    dependencies:
      - add-sample-content
---

## 用户需求分析

用户希望使用 Nuxt 创建一个博客网站，模仿 https://weekly.tw93.fun（潮流周刊）的设计风格和功能。

## 产品概述

创建一个基于 Nuxt 3 的周刊类博客网站，采用极简克制、内容优先的设计风格，用于记录和展示定期更新的内容（如技术周刊、生活周刊等）。

## 核心功能

- **周刊列表页**：时间倒序展示所有周刊条目，每条包含期数、标题、发布日期、封面图/简介
- **周刊详情页**：展示单期周刊的完整内容，支持 Markdown 渲染
- **响应式布局**：适配桌面端和移动端
- **内容管理**：基于 Markdown 文件管理周刊内容，支持封面图、摘要、标签等元数据
- **导航功能**：首页、关于页等基础页面

## 技术栈选择

### 核心框架

- **Nuxt 3**：基于 Vue 3 的全栈框架，支持 SSR/SSG，适合博客类静态站点
- **TypeScript**：提供类型安全，提升代码可维护性
- **Tailwind CSS**：原子化 CSS 框架，快速实现极简风格设计

### 内容管理

- **Nuxt Content**：Nuxt 官方内容管理模块，支持 Markdown/MDC 渲染，自带文件路径基于文件系统路由

### 开发工具

- **pnpm**：高效的包管理器
- **ESLint + Prettier**：代码规范

## 实现方案

### 项目架构

采用 Nuxt 3 的目录结构约定，结合 Nuxt Content 的文件系统路由：

```
nuxt-blog/
├── content/
│   └── weekly/          # 周刊 Markdown 文件
│       ├── 001.md
│       ├── 002.md
│       └── ...
├── pages/
│   ├── index.vue        # 首页（周刊列表）
│   └── weekly/
│       └── [slug].vue   # 周刊详情页（动态路由）
├── components/          # 可复用组件
├── layouts/            # 布局组件
├── public/             # 静态资源
└── assets/             # 样式、图片等
```

### 数据流

1. Markdown 文件存储在 `content/weekly/` 目录
2. Nuxt Content 自动解析 Markdown 文件的元数据（frontmatter）
3. 首页通过 `queryContent('weekly').sort({ date: -1 })` 获取并按日期倒序展示
4. 详情页通过 `useRoute().params.slug` 匹配对应 Markdown 文件并渲染

### 关键技术决策

1. **选择 Nuxt Content 而非 CMS API**：周刊内容更新频率较低，Markdown 文件足以管理，且支持 Git 版本控制
2. **SSG 静态生成**：`nuxi generate` 生成纯静态 HTML，部署简单、加载速度快
3. **Tailwind CSS 实现极简风格**：通过有限的颜色变量和间距规范，确保设计一致性

## 实现要点

### 目录结构详情

```
/Users/mac/git/nuxt-blog/
├── content/
│   └── weekly/
│       └── [slug].md   # [NEW] 周刊内容文件，包含 frontmatter 和 Markdown 正文
├── pages/
│   ├── index.vue       # [NEW] 首页，周刊列表
│   ├── about.vue       # [NEW] 关于页面
│   └── weekly/
│       └── [slug].vue # [NEW] 周刊详情页
├── components/
│   ├── WeeklyCard.vue  # [NEW] 周刊卡片组件
│   ├── AppHeader.vue   # [NEW] 顶部导航
│   └── AppFooter.vue   # [NEW] 底部信息
├── layouts/
│   └── default.vue     # [NEW] 默认布局
├── assets/css/
│   └── main.css        # [NEW] 全局样式
├── nuxt.config.ts      # [NEW] Nuxt 配置文件
├── tailwind.config.ts  # [NEW] Tailwind 配置
├── tsconfig.json       # [NEW] TypeScript 配置
└── package.json        # [NEW] 项目依赖
```

### Markdown Frontmatter 规范

每篇周刊需包含以下元数据：

```
---
title: '第 XXX 期：标题'
date: '2026-01-01'
description: '本期简介，用于列表页展示'
cover: '/images/weekly-xxx-cover.jpg'
tags: ['技术', '生活']
---
```

## 性能优化

- 使用 Nuxt Content 的 `only()` 方法限制列表页查询字段，减少数据传输
- 图片使用 `nuxt/image` 模块进行优化（懒加载、WebP 格式）
- 启用 Nuxt 的自动代码分割和预加载

## 设计风格

模仿潮流周刊的极简克制风格，采用内容优先的设计理念。

### 整体风格

- **极简主义**：大量留白，无多余装饰元素
- **内容优先**：以文字和图片内容为核心，UI 元素退居次要位置
- **清新自然**：低饱和度配色，长时间阅读不疲劳

### 布局设计

#### 首页（周刊列表）

1. **顶部区域**：网站标题/Logo + 简短描述 + 导航链接
2. **内容区域**：单列流式布局，每期周刊为独立卡片

- 卡片结构：期数+标题 → 发布日期 → 封面图（可选）→ 摘要描述
- 卡片间距适中，通过留白分隔

3. **底部区域**：版权信息、GitHub 链接等

#### 详情页

1. **文章内容区**：Markdown 渲染，合理的行高和字号
2. **导航**：返回列表、上一篇/下一篇

### 交互设计

- 极简交互，无复杂动效
- 链接 hover 时有颜色变化或下划线
- 卡片 hover 时有轻微背景色变化

## 可用扩展

当前项目可使用以下扩展辅助开发：

### SubAgent

- **code-explorer**：用于多文件搜索和目录结构探索（本项目为新建，暂不需要）

### Skill

暂无需使用的技能。