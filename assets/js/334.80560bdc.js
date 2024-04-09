(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{675:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这几天面试了好几家，回顾下大概都有什么问题吧：")]),s._v(" "),n("p",[s._v("1.webworker如何确保内存不泄露")]),s._v(" "),n("p",[s._v("2.一个url输入到浏览器显示的整个过程")]),s._v(" "),n("p",[s._v("3.如果dom渲染的过程中遇到了js会怎么样")]),s._v(" "),n("p",[s._v("4.defer和async的区别")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("defer 和 async 是用于控制 <script> 标签加载和执行行为的属性。它们之间的主要区别如下：\n\n执行顺序：\n\ndefer：脚本的加载和执行是异步的，但是会按照它们在 HTML 文档中的顺序执行。即，多个带有 defer 属性的脚本会按照它们在文档中出现的顺序依次执行，而且会在 DOMContentLoaded 事件触发前执行。\nasync：脚本的加载和执行是异步的，不保证脚本的执行顺序，即使在文档中的顺序不同。脚本一旦下载完成，会立即执行，不会等待其他脚本的加载和执行，也不会等待 DOMContentLoaded 事件。\n页面渲染阻塞：\n\ndefer：脚本的加载不会阻塞页面的渲染。脚本会在 HTML 解析完成后、在 DOMContentLoaded 事件触发前执行。因此，页面的渲染和显示不会受到 defer 脚本的影响。\nasync：脚本的加载和执行不会阻塞页面的渲染。脚本会在下载完成后立即执行，而不会等待其他资源的加载和页面的渲染。\n依赖关系：\n\ndefer：脚本的执行顺序受到它们在 HTML 文档中的顺序的影响。如果有多个带有 defer 属性的脚本，并且它们之间存在依赖关系，那么它们会按照它们在文档中的顺序依次执行。\nasync：脚本的执行顺序不受控制，不保证脚本之间的依赖关系。如果有多个带有 async 属性的脚本，并且它们之间存在依赖关系，那么需要手动处理依赖关系，确保脚本按照正确的顺序执行。\n综上所述，defer 属性用于延迟脚本的执行，保持脚本的顺序，并在 HTML 解析完成后执行；async 属性用于异步加载和执行脚本，不保证脚本的顺序，并在下载完成后立即执行。根据具体的需求和脚本之间的依赖关系，可以选择适合的属性来优化脚本的加载和执行行为。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("5.浏览器渲染一个html页面的过程是什么样的")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/7209625823581618232",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("6.一个vue文件显示到网页的过程")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("先进行init，数据的初始化\n进行mount\n编译\n渲染\n生成虚拟dom\n将虚拟dom转换为真实的dom进行一个patch\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Vue 3中的一个.vue文件显示到网页的过程涉及多个步骤，包括文件解析、编译、渲染等。下面是这个过程的简化版概述：\n\n    文件解析：\n        用户在浏览器中输入URL或通过其他方式请求一个页面。\n        服务器返回相应的.vue文件内容。如果你的应用是客户端路由，服务器可能会返回一个HTML文件，其中包含一个指向你的Vue应用的<script>标签。\n\n    编译：\n        在Vue 3中，.vue文件通常包含模板（template）、脚本（script）和样式（style）三部分。\n        浏览器下载.vue文件后，会执行其中的<script>标签内的JavaScript代码。\n        Vue 3使用基于模板的编译策略，它会将模板编译成渲染函数或虚拟DOM（Virtual DOM）的Patch函数。\n\n    创建Vue实例：\n        JavaScript代码会创建一个新的Vue实例，这个过程包括定义数据（data）、方法（methods）、生命周期钩子（lifecycle hooks）等。\n        Vue实例会挂载到HTML文档中的某个元素上，这个元素在<script>标签的mount选项中指定。\n\n    依赖收集与响应式系统：\n        Vue 3使用Proxy作为其响应式系统的基础，它会在对象和数组上设置getter和setter，从而能够追踪数据的变化。\n        当数据发生变化时，Vue能够知道哪些组件依赖于这些数据，并触发相应的更新。\n\n    虚拟DOM与真实DOM的渲染：\n        Vue 3使用虚拟DOM来提高性能。虚拟DOM是真实DOM的轻量级描述。\n        Vue会根据虚拟DOM和数据来计算出最小的DOM更新操作。\n        然后，Vue将这些更新应用到真实DOM上，使得页面显示更新后的内容。\n\n    生命周期钩子的调用：\n        在Vue实例化和挂载过程中，不同的生命周期钩子会被调用，如onBeforeMount、onMounted等。\n        开发者可以在这些钩子中执行特定的逻辑，如数据获取、订阅事件等。\n\n    用户交互：\n        当用户与页面交互时，如点击按钮、输入文本等，Vue的事件处理系统会捕获这些事件。\n        事件处理器可能会修改数据，这些数据的变化会触发视图的响应式更新。\n\n    路由和状态管理：\n        如果应用使用了Vue Router和Vuex等库，它们会在后台管理路由和状态。\n        用户的导航行为会导致不同的组件被渲染，状态的变化也会触发视图的更新。\n\n整个过程是高度优化的，确保了应用的高性能和良好的用户体验。Vue 3引入了许多新特性和改进，如Composition API、更好的TypeScript集成、更快的虚拟DOM算法等，这些都使得开发和维护Vue应用更加高效和便捷。\n\ufeff\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("6.如何清除margin的边界、塌陷、浮动（和7类似）")]),s._v(" "),n("p",[s._v("7.BFC是什么，通过什么css属性会形成")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("BFC（Block Formatting Context）是块级格式化上下文，它是一个独立的渲染区域，具有一定的布局规则，可以决定该区域内块级盒子的布局方式及相对于其他元素的位置关系。在BFC中，盒子会垂直地一个接一个地放置，并且BFC的区域不会与float box重叠，同时BFC可以阻止内部的margin折叠。\n\n可以通过以下CSS属性创建BFC：\n\n    display：\n        设置元素的display属性为以下值之一可以创建BFC：\n            inline-block\n            table\n            table-cell\n            table-caption\n            flex\n            inline-flex\n            grid\n            inline-grid\n        需要注意的是，display: block; 并不会创建BFC，因为块级元素默认就具有BFC。\n\n    position：\n        当position属性的值为absolute或fixed，并且top、bottom、left、right中有至少一个值不为auto时，会创建BFC。\n\n    overflow：\n        当overflow属性的值不为visible时，会创建BFC。常见的值有hidden、auto、scroll。\n\n    float：\n        虽然float属性本身不会创建BFC，但它会影响元素的布局。当元素浮动后，其他元素的布局会围绕它进行，这有时会产生不可预期的效果。可以通过创建BFC来避免这种情况。\n\n创建BFC后，可以利用BFC的特性来解决一些布局问题，例如防止margin重叠、清除内部浮动、创建自适应两栏布局等。理解BFC的工作原理和如何创建BFC对于进行CSS布局和解决布局问题是非常重要的。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("8.遇到过比较难的问题是什么，如何解决的")]),s._v(" "),n("p",[s._v("9.什么场景会使用webworker")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("批量计算，几百上千条数据返回后继续排序、筛选、过滤、日期格式化等操作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("10.什么场景会使用canvas")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("主要是表格的绘制、2D动画的显示\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"11"}},[n("li")])])}),[],!1,null,null,null);n.default=t.exports}}]);