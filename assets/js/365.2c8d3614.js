(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{703:function(e,t,s){"use strict";s.r(t);var a=s(7),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("为什么会出现很多traverse并且耗费大量的时间")]),e._v(" "),t("p",[e._v("为什么在数据量多的时候打开页面就比数据量少的时候打开速度慢呢？")]),e._v(" "),t("p",[e._v("是不是因为使用了computed或者watch呢？")]),e._v(" "),t("p",[e._v("traverse函数的作用：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("traverse 的逻辑也很简单，它实际上就是对一个对象做深层递归遍历，因为遍历过程中就是对一个子对象的访问，会触发它们的 getter 过程，这样就可以收集到依赖，也就是订阅它们变化的 watcher，这个函数实现还有一个小的优化，遍历过程中会把子响应式对象通过它们的 dep id 记录到 seenObjects，避免以后重复访问。\n\n那么在执行了 traverse 后，我们再对 watch 的对象内部任何一个值做修改，也会调用 watcher 的回调函数了。\n\n对 deep watcher 的理解非常重要，今后工作中如果大家观测了一个复杂对象，并且会改变对象内部深层某个值的时候也希望触发回调，一定要设置 deep 为 true，但是因为设置了 deep 后会执行 traverse 函数，会有一定的性能开销，所以一定要根据应用场景权衡是否要开启这个配置。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),e._v(" "),t("p",[e._v("参考文档：")]),e._v(" "),t("p",[e._v("https://ustbhuangyi.github.io/vue-analysis/v2/reactive/computed-watcher.html#computed")])])}),[],!1,null,null,null);t.default=r.exports}}]);