(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{1062:function(a,e,r){"use strict";r.r(e);var t=r(7),s=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"will-change的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#will-change的作用"}},[a._v("#")]),a._v(" will-change的作用")]),a._v(" "),e("p",[a._v("will-change 属性允许你提前告知浏览器你可能会对一个元素进行什么样的改变，这样它就可以提前设置适当的优化，避免了可能会对页面的响应性产生负面影响的启动成本。 这些元素可以更快地被改变和渲染，页面将能够迅速地更新，从而带来更流畅的体验")]),a._v(" "),e("p",[a._v("提升成 Composited Layer 的最佳方式是使用 CSS 的 will-change 属性，它的详细说明可以查看 MDN 的文档。")]),a._v(" "),e("p",[a._v("对于不支持的浏览器，最简单的 hack 方法，莫过于使用 3D 变形来提升为 Composited Layer 了。")]),a._v(" "),e("p",[a._v("尝试使用 will-change 属性来让固定区域避免重绘。")]),a._v(" "),e("p",[a._v("提升成 Composited Layer 的确会优化性能；但是，要知道创建一个新的 Composited Layer 必须要额外的内存和管理，这是非常昂贵的代价。所以，在内存资源有限的设备上，Composited Layer 带来的性能提升，很可能远远抵不上创建多个 Composited Layer 的代价。同时，由于每一个 Composited Layer 的位图都需要上传到 GPU；所以，不免需要考虑 CPU 和 GPU 之间的带宽以及用多大内存处理 GPU 纹理的问题。")]),a._v(" "),e("p",[a._v("Composited Layer 并不是越多越好。尤其是，千万不要通过下面的代码提升页面的所有元素，这样的资源消耗将是异常恐怖的。\n")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("* {\n  /* or transform: translateZ(0) */\n  will-change: transform;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("最小化提升，就是要尽量降低页面 Composited Layer 的数量。为了做到这一点，我们可以不把像 will-change 这样能够提升节点为 Composited Layer 的属性写在默认状态中。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.51cto.com/wpbars/2960486",target:"_blank",rel:"noopener noreferrer"}},[a._v("网页渲染性能优化 —— 性能优化下"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"transform的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transform的作用"}},[a._v("#")]),a._v(" Transform的作用")]),a._v(" "),e("p",[a._v("Transform字面意思就是变形，改变的意思，该元素应用于2D和3D转换，该属性允许我们i元素进行旋转、缩放、移动和倾斜。 在css3中transform主要包括以下几种： 旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000022850066",target:"_blank",rel:"noopener noreferrer"}},[a._v("Transform参考文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);