import { _ as __nuxt_component_0 } from './nuxt-link-_xPtPqk2.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, computed, unref, useSSRContext } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///Users/mac/git/nuxt-blog/node_modules/vue/server-renderer/index.mjs';
import { k as useColorMode } from './server.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed(() => colorMode.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "theme-toggle p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
        title: unref(isDark) ? "\u5207\u6362\u5230\u4EAE\u8272\u6A21\u5F0F" : "\u5207\u6362\u5230\u6697\u8272\u6A21\u5F0F"
      }, _attrs))}>`);
      if (unref(isDark)) {
        _push(`<svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ThemeToggle = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-gray-100 dark:border-slate-700" }, _attrs))}><div class="max-w-3xl mx-auto px-4 py-6 flex justify-between items-center"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-medium text-gray-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6F6E\u6D41\u5468\u520A `);
          } else {
            return [
              createTextVNode(" \u6F6E\u6D41\u5468\u520A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-gray-500 dark:text-slate-400 mt-0.5">\u8BB0\u5F55\u591A\u5F69\u751F\u6D3B\u89C1\u95FB</p></div><nav class="flex items-center gap-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors",
        "active-class": "text-gray-900 dark:text-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9996\u9875 `);
          } else {
            return [
              createTextVNode(" \u9996\u9875 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors",
        "active-class": "text-gray-900 dark:text-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5173\u4E8E `);
          } else {
            return [
              createTextVNode(" \u5173\u4E8E ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="/rss.xml" target="_blank" class="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"> RSS </a>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`</nav></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-100 mt-12" }, _attrs))}><div class="container mx-auto px-4 py-8 max-w-3xl text-center text-gray-500 text-sm"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u6F6E\u6D41\u5468\u520A - \u8BB0\u5F55\u591A\u5F69\u751F\u6D3B\u89C1\u95FB</p><p class="mt-2"> Powered by <a href="https://nuxt.com" target="_blank" class="text-blue-600 hover:underline">Nuxt 3</a></p><div class="flex justify-center gap-4 mt-4"><a href="https://github.com" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors"> GitHub </a><a href="/rss.xml" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors"> RSS </a></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_AppFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="flex-grow container mx-auto px-4 py-8 max-w-3xl">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D7mRCh_k.mjs.map
