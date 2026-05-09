import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './server.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unified/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/remark-parse/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/remark-rehype/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/remark-gfm/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/rehype-external-links/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/rehype-raw/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/detab/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/hast-util-to-string/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/github-slugger/index.js';
import 'file:///Users/mac/git/nuxt-blog/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/git/nuxt-blog/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u5173\u4E8E - \u6F6E\u6D41\u5468\u520A",
      meta: [
        { name: "description", content: "\u5173\u4E8E\u6F6E\u6D41\u5468\u520A\uFF0C\u4E86\u89E3\u5468\u520A\u7684\u5185\u5BB9\u548C\u4F5C\u8005" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page max-w-3xl mx-auto" }, _attrs))}><h1 class="text-3xl font-semibold text-gray-900 mb-8">\u5173\u4E8E\u5468\u520A</h1><div class="prose lg:prose-lg"><p class="text-lg leading-relaxed text-gray-700 mb-6"> \u6B22\u8FCE\u6765\u5230\u6F6E\u6D41\u5468\u520A\uFF01\u8FD9\u662F\u4E00\u4E2A\u8BB0\u5F55\u751F\u6D3B\u3001\u6280\u672F\u548C\u601D\u8003\u7684\u5730\u65B9\u3002 </p><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">\u5173\u4E8E\u6211</h2><p> \u6211\u662F\u4E00\u540D\u5DE5\u7A0B\u5E08\uFF0C\u70ED\u7231\u6280\u672F\uFF0C\u4E5F\u70ED\u7231\u751F\u6D3B\u3002\u521B\u5EFA\u8FD9\u4E2A\u5468\u520A\u7684\u521D\u8877\u662F\u8BB0\u5F55\u6BCF\u5468\u770B\u5230\u7684\u6709\u8DA3\u5185\u5BB9\u3001\u5B66\u5230\u7684\u77E5\u8BC6\uFF0C\u4EE5\u53CA\u751F\u6D3B\u4E2D\u7684\u611F\u609F\u3002 </p><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">\u5468\u520A\u5185\u5BB9</h2><p>\u5468\u520A\u5185\u5BB9\u6DB5\u76D6\uFF1A</p><ul><li><strong>\u6280\u672F\u89C1\u95FB</strong> - \u5206\u4EAB\u6709\u8DA3\u7684\u6280\u672F\u6587\u7AE0\u3001\u5F00\u6E90\u9879\u76EE</li><li><strong>\u751F\u6D3B\u968F\u7B14</strong> - \u8BB0\u5F55\u751F\u6D3B\u4E2D\u7684\u70B9\u6EF4\u611F\u609F</li><li><strong>\u9605\u8BFB\u7B14\u8BB0</strong> - \u5206\u4EAB\u9605\u8BFB\u4E66\u7C4D\u7684\u601D\u8003\u548C\u6536\u83B7</li><li><strong>\u5DE5\u5177\u63A8\u8350</strong> - \u53D1\u73B0\u597D\u7528\u7684\u5DE5\u5177\u548C\u8D44\u6E90</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">\u6280\u672F\u6808</h2><p>\u8FD9\u4E2A\u5468\u520A\u535A\u5BA2\u4F7F\u7528\u4EE5\u4E0B\u6280\u672F\u6784\u5EFA\uFF1A</p><ul><li><strong>Nuxt 3</strong> - \u57FA\u4E8E Vue 3 \u7684\u5168\u6808\u6846\u67B6</li><li><strong>Nuxt Content</strong> - \u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u652F\u6301 Markdown</li><li><strong>Tailwind CSS</strong> - \u5B9E\u7528\u4F18\u5148\u7684 CSS \u6846\u67B6</li><li><strong>TypeScript</strong> - \u7C7B\u578B\u5B89\u5168\u7684 JavaScript</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">\u8BA2\u9605\u65B9\u5F0F</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8BA2\u9605\u5468\u520A\uFF1A</p><ul><li>RSS \u8BA2\u9605\uFF1A<code>/rss.xml</code></li><li>\u76F4\u63A5\u8BBF\u95EE\u7F51\u7AD9\uFF1A\u6536\u85CF\u9996\u9875</li></ul><h2 class="text-2xl font-medium text-gray-900 mt-8 mb-4">\u8054\u7CFB\u6211</h2><p>\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u5EFA\u8BAE\u6216\u60F3\u6CD5\uFF0C\u6B22\u8FCE\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8054\u7CFB\u6211\uFF1A</p><ul><li>GitHub\uFF1A<a href="https://github.com" target="_blank">@yourusername</a></li><li>\u90AE\u7BB1\uFF1A<a href="mailto:example@example.com">example@example.com</a></li></ul><div class="mt-12 pt-8 border-t border-gray-100"><p class="text-gray-500 text-sm"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u6F6E\u6D41\u5468\u520A - \u8BB0\u5F55\u591A\u5F69\u751F\u6D3B\u89C1\u95FB </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BEP-g0fi.mjs.map
