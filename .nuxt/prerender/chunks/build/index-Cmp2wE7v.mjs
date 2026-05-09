import { _ as __nuxt_component_0 } from './nuxt-link-_xPtPqk2.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData, q as queryContent } from './query-DFlsgtIC.mjs';
import { u as useHead } from './server.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ohash/dist/index.mjs';
import './preview-CtOErSst.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
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
import 'file:///Users/mac/git/nuxt-blog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/git/nuxt-blog/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: weeklies } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "weeklies",
      () => queryContent("weekly").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (date) => {
      if (!date) return "";
      const d = new Date(date);
      return d.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    useHead({
      title: "\u6F6E\u6D41\u5468\u520A - \u8BB0\u5F55\u591A\u5F69\u751F\u6D3B\u89C1\u95FB",
      meta: [
        { name: "description", content: "\u6F6E\u6D41\u5468\u520A\uFF0C\u8BB0\u5F55\u5DE5\u7A0B\u5E08\u7684\u591A\u5F69\u751F\u6D3B\u89C1\u95FB" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "weekly-list" }, _attrs))}><div class="mb-12 text-center"><h1 class="text-3xl font-semibold text-gray-900 dark:text-slate-100 mb-2">\u6F6E\u6D41\u5468\u520A</h1><p class="text-gray-500 dark:text-slate-400">\u8BB0\u5F55\u591A\u5F69\u751F\u6D3B\u89C1\u95FB</p></div><div class="space-y-8"><!--[-->`);
      ssrRenderList(unref(weeklies), (weekly) => {
        _push(`<article class="weekly-card border-b border-gray-100 dark:border-slate-700 pb-8 last:border-0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: weekly._path,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-xl font-medium text-gray-900 dark:text-slate-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(weekly.title)}</h2><time class="text-sm text-gray-500 dark:text-slate-400 mb-3 block"${_scopeId}>${ssrInterpolate(formatDate(weekly.date))}</time>`);
              if (weekly.cover) {
                _push2(`<img${ssrRenderAttr("src", weekly.cover)}${ssrRenderAttr("alt", weekly.title)} class="w-full h-48 object-cover rounded-lg mb-4" loading="lazy"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (weekly.description) {
                _push2(`<p class="text-gray-600 dark:text-slate-300 leading-relaxed"${_scopeId}>${ssrInterpolate(weekly.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("h2", { class: "text-xl font-medium text-gray-900 dark:text-slate-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" }, toDisplayString(weekly.title), 1),
                createVNode("time", { class: "text-sm text-gray-500 dark:text-slate-400 mb-3 block" }, toDisplayString(formatDate(weekly.date)), 1),
                weekly.cover ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: weekly.cover,
                  alt: weekly.title,
                  class: "w-full h-48 object-cover rounded-lg mb-4",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                weekly.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-gray-600 dark:text-slate-300 leading-relaxed"
                }, toDisplayString(weekly.description), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div>`);
      if (!unref(weeklies) || unref(weeklies).length === 0) {
        _push(`<div class="text-center py-12 text-gray-400 dark:text-slate-500"><p>\u6682\u65E0\u5468\u520A\u5185\u5BB9\uFF0C\u8BF7\u5728 content/weekly/ \u76EE\u5F55\u4E2D\u6DFB\u52A0 Markdown \u6587\u4EF6</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cmp2wE7v.mjs.map
