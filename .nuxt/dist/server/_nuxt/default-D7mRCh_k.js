import { _ as __nuxt_component_0 } from "./nuxt-link-_xPtPqk2.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { k as useColorMode } from "../server.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/defu/dist/defu.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/git/nuxt-blog/node_modules/hookable/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/unctx/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed(() => colorMode.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "theme-toggle p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
        title: unref(isDark) ? "切换到亮色模式" : "切换到暗色模式"
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
            _push2(` 潮流周刊 `);
          } else {
            return [
              createTextVNode(" 潮流周刊 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-gray-500 dark:text-slate-400 mt-0.5">记录多彩生活见闻</p></div><nav class="flex items-center gap-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors",
        "active-class": "text-gray-900 dark:text-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 首页 `);
          } else {
            return [
              createTextVNode(" 首页 ")
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
            _push2(` 关于 `);
          } else {
            return [
              createTextVNode(" 关于 ")
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
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-gray-100 mt-12" }, _attrs))}><div class="container mx-auto px-4 py-8 max-w-3xl text-center text-gray-500 text-sm"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 潮流周刊 - 记录多彩生活见闻</p><p class="mt-2"> Powered by <a href="https://nuxt.com" target="_blank" class="text-blue-600 hover:underline">Nuxt 3</a></p><div class="flex justify-center gap-4 mt-4"><a href="https://github.com" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors"> GitHub </a><a href="/rss.xml" target="_blank" class="text-gray-400 hover:text-gray-600 transition-colors"> RSS </a></div></div></footer>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-D7mRCh_k.js.map
