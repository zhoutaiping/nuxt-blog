import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/git/nuxt-blog/node_modules/hookable/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/unctx/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/git/nuxt-blog/node_modules/defu/dist/defu.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "关于 - 潮流周刊",
      meta: [
        { name: "description", content: "关于潮流周刊，了解周刊的内容和作者" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page max-w-3xl mx-auto" }, _attrs))}><h1 class="text-3xl font-semibold text-gray-900 mb-8">关于周刊</h1><div class="prose lg:prose-lg"><p class="text-lg leading-relaxed text-gray-700 mb-6"> 欢迎来到潮流周刊！这是一个记录生活、技术和思考的地方。 </p><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">关于我</h2><p> 我是一名工程师，热爱技术，也热爱生活。创建这个周刊的初衷是记录每周看到的有趣内容、学到的知识，以及生活中的感悟。 </p><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">周刊内容</h2><p>周刊内容涵盖：</p><ul><li><strong>技术见闻</strong> - 分享有趣的技术文章、开源项目</li><li><strong>生活随笔</strong> - 记录生活中的点滴感悟</li><li><strong>阅读笔记</strong> - 分享阅读书籍的思考和收获</li><li><strong>工具推荐</strong> - 发现好用的工具和资源</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">技术栈</h2><p>这个周刊博客使用以下技术构建：</p><ul><li><strong>Nuxt 3</strong> - 基于 Vue 3 的全栈框架</li><li><strong>Nuxt Content</strong> - 内容管理系统，支持 Markdown</li><li><strong>Tailwind CSS</strong> - 实用优先的 CSS 框架</li><li><strong>TypeScript</strong> - 类型安全的 JavaScript</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">订阅方式</h2><p>你可以通过以下方式订阅周刊：</p><ul><li>RSS 订阅：<code>/rss.xml</code></li><li>直接访问网站：收藏首页</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">联系我</h2><p>如果你有任何建议或想法，欢迎通过以下方式联系我：</p><ul><li>GitHub：<a href="https://github.com" target="_blank">@yourusername</a></li><li>邮箱：<a href="mailto:example@example.com">example@example.com</a></li></ul><div class="mt-12 pt-8 border-t border-gray-100"><p class="text-gray-500 text-sm"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 潮流周刊 - 记录多彩生活见闻 </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BEP-g0fi.js.map
