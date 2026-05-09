import { _ as __nuxt_component_0 } from "./nuxt-link-_xPtPqk2.js";
import _sfc_main$1 from "./ContentRenderer-Dt9zDa2g.js";
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { a as useRoute, u as useHead } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-DFlsgtIC.js";
import "/Users/mac/git/nuxt-blog/node_modules/ufo/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/defu/dist/defu.mjs";
import "./ContentRendererMarkdown-zJEf8Kw2.js";
import "/Users/mac/git/nuxt-blog/node_modules/destr/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/scule/dist/index.mjs";
import "property-information";
import "./node-DPfXEbjB.js";
import "./preview-CtOErSst.js";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/h3/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/klona/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/git/nuxt-blog/node_modules/hookable/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/mac/git/nuxt-blog/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: weekly, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `weekly-${slug}`,
      () => queryContent("weekly", slug).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: allWeeklies } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-weeklies",
      () => queryContent("weekly").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const currentIndex = computed(() => {
      if (!allWeeklies.value || !weekly.value) return -1;
      return allWeeklies.value.findIndex((w) => w._path === weekly.value?._path);
    });
    const prevWeekly = computed(() => {
      if (currentIndex.value < 0 || !allWeeklies.value) return null;
      if (currentIndex.value >= allWeeklies.value.length - 1) return null;
      return allWeeklies.value[currentIndex.value + 1] ?? null;
    });
    const nextWeekly = computed(() => {
      if (currentIndex.value < 0 || !allWeeklies.value) return null;
      if (currentIndex.value <= 0) return null;
      return allWeeklies.value[currentIndex.value - 1] ?? null;
    });
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
      title: weekly.value ? `${weekly.value.title} - 潮流周刊` : "潮流周刊",
      meta: [
        {
          name: "description",
          content: weekly.value?.description || "潮流周刊，记录工程师的多彩生活见闻"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "weekly-detail max-w-3xl mx-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg> 返回列表 `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })
              ])),
              createTextVNode(" 返回列表 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<div class="text-center py-12 text-gray-400 dark:text-slate-500"> 加载中... </div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-12 text-gray-400 dark:text-slate-500"><p>周刊不存在或加载失败</p></div>`);
      } else if (unref(weekly)) {
        _push(`<article class="prose lg:prose-lg"><header class="mb-8 not-prose"><h1 class="text-3xl font-semibold text-gray-900 dark:text-slate-100 mb-4">${ssrInterpolate(unref(weekly).title)}</h1><div class="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400"><time>${ssrInterpolate(formatDate(unref(weekly).date))}</time>`);
        if (unref(weekly).tags) {
          _push(`<span class="flex gap-2"><!--[-->`);
          ssrRenderList(unref(weekly).tags, (tag) => {
            _push(`<span class="bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-gray-700 dark:text-slate-300">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></header>`);
        if (unref(weekly).cover) {
          _push(`<img${ssrRenderAttr("src", unref(weekly).cover)}${ssrRenderAttr("alt", unref(weekly).title)} class="w-full rounded-lg mb-8">`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(weekly),
          class: "prose dark:prose-invert"
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(weekly)) {
        _push(`<nav class="flex justify-between mt-12 pt-8 border-t border-gray-100 dark:border-slate-700 not-prose">`);
        if (unref(prevWeekly)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(prevWeekly)._path,
            class: "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` ← ${ssrInterpolate(unref(prevWeekly).title)}`);
              } else {
                return [
                  createTextVNode(" ← " + toDisplayString(unref(prevWeekly).title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<div></div>`);
        }
        if (unref(nextWeekly)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(nextWeekly)._path,
            class: "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(nextWeekly).title)} → `);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(nextWeekly).title) + " → ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</nav>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/weekly/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-YTQxg0Kq.js.map
