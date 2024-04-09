(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{894:function(s,t,a){"use strict";a.r(t);var r=a(7),v=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"兼容性的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性的方案"}},[s._v("#")]),s._v(" 兼容性的方案")]),s._v(" "),t("p",[s._v("方案一：Normalize CSS 可以看成是一种 Reset CSS 的替代方案。作用：")]),s._v(" "),t("ul",[t("li",[s._v("保护有用的浏览器默认样式，而不是完全去掉它们")]),s._v(" "),t("li",[s._v("一般化的样式：为大部分HTML元素提供")]),s._v(" "),t("li",[s._v("修复浏览器自身的bug并保证各浏览器的一致性")]),s._v(" "),t("li",[s._v("优化CSS可用性：用一些小技巧\n")]),s._v(" "),t("li",[s._v("解释代码：用注释和详细的文档来")])]),s._v(" "),t("p",[s._v("有时候浏览器的默认行为可通过：添加浏览器前缀的方式进行解决。")]),s._v(" "),t("h3",{attrs:{id:"浏览器前缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器前缀"}},[s._v("#")]),s._v(" 浏览器前缀：")]),s._v(" "),t("p",[s._v("常见的浏览器前缀有：Chrome和Safari的-webkit-、Firefox的-moz-、IE的-ms-等。")]),s._v(" "),t("ul",[t("li",[s._v("比如在IOS下，切换横屏的时候字体会自动变大，可以通过给html{ -webkit-text-size-adjust: 100%; 来解决这个问题。")]),s._v(" "),t("li",[s._v("再比如输入框在IE下会有一个关闭的图片号，可以通过给input[type=text]::-ms-clear{ display: none; }来解决这个问题。")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7140514257996611620",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("有时候不同浏览器下的默认样式是没办法统一的，例如表单的一些元素，如：复选框、单选框、下拉菜单等。")]),s._v(" "),t("p",[s._v("这时就需要"),t("strong",[s._v("完全模拟样式")]),s._v("才能解决。可以理解为将不同浏览器的样式都通过CSS的方式写成一种样式，样式不会随着浏览器改变而改变")]),s._v(" "),t("h3",{attrs:{id:"css-hack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-hack"}},[s._v("#")]),s._v(" CSS Hack")]),s._v(" "),t("p",[s._v("有时候我们需要为不同的浏览器甚至不同版本编写特定的 CSS样式，这个过程被称为 CSS hack！")]),s._v(" "),t("h3",{attrs:{id:"渐进增强与优雅降级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强与优雅降级"}},[s._v("#")]),s._v(" 渐进增强与优雅降级")]),s._v(" "),t("p",[t("strong",[s._v("渐进增强")]),s._v("是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。")]),s._v(" "),t("p",[t("strong",[s._v("优雅降级")]),s._v("是一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")]),s._v(" "),t("p",[s._v("举例说明，比如在高级浏览器中支持边框圆角（border-radius），而低版本浏览器不支持边框圆角，这时采用直角方式，这就是优雅降级，当然也可以采用图片模拟圆角的形式，也是属于优雅降级。")]),s._v(" "),t("p",[s._v("再比如高级浏览器支持阴影（box-shadow），而低版本浏览器不支持阴影，这时只是采用普通的边框代替，属于优雅降级。")]),s._v(" "),t("p",[s._v("简单来说，低版本浏览器的主要功能不受影响，布局没有严重的错乱问题即可。不用非要跟高级浏览器完全一致，这种思想便是优雅降级。一般可采用样式是否支持来进行覆盖操作，")]),s._v(" "),t("h3",{attrs:{id:"polyfill-垫片-处理css兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#polyfill-垫片-处理css兼容"}},[s._v("#")]),s._v(" Polyfill（垫片）处理CSS兼容")]),s._v(" "),t("p",[s._v("Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。")]),s._v(" "),t("p",[s._v("简单来说就是通过"),t("strong",[s._v("JavaScript方式")]),s._v("来解决CSS兼容性问题，通常需要引入一个JavaScript文件。")]),s._v(" "),t("h3",{attrs:{id:"postcss-工程化-处理css兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcss-工程化-处理css兼容"}},[s._v("#")]),s._v(" postcss（工程化）处理CSS兼容")]),s._v(" "),t("p",[s._v("前面介绍过的一些解决方案，像添加浏览器前缀，优雅降级，JavaScript处理CSS兼容等等，一般都需要手动去完成，而postcss是一种"),t("strong",[s._v("工程化")]),s._v("的方式去解决这些兼容性，从而达到自动化的处理。")]),s._v(" "),t("p",[s._v("PostCSS 是一个允许使用 JS 插件转换样式的工具。")]),s._v(" "),t("p",[s._v("这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。")]),s._v(" "),t("p",[s._v("常见的利用postcss来解决CSS兼容性的插件非常多，这里介绍一些：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Autoprefixer（自动化需要的属性添加浏览器厂商的私有前缀）\npostcss-color-rgba-fallback（IE8不支持rgba()颜色，转换成十六进制）\npostcss-opacity（给IE浏览器添加滤镜属性，作为降级处理）\npostcss-pseudoelements（让IE8中不仅支持一个冒号:，也支持::的伪元素）\npostcss-vmin（让IE9支持viewport相对单位vmin）\nnode-pixrem（让IE10以下不支持rem单位转成px单位）\npostcss-cssnext（让CSS高级新语法得到支持，优雅降级）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"其他问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[s._v("#")]),s._v(" 其他问题：")]),s._v(" "),t("p",[s._v("在这个地方"),t("strong",[s._v("quirksmode")]),s._v("，可以查看CSS样式的兼容性")]),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("h2",{attrs:{id:"随笔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#随笔"}},[s._v("#")]),s._v(" 随笔")]),s._v(" "),t("p",[s._v("我现在写文章就是看一看，炒一炒，还处在入门学习的阶段，自己去输出的时候并不是很多。")]),s._v(" "),t("p",[s._v("现在先多学多看吧，后续实践的机会大把")])])}),[],!1,null,null,null);t.default=v.exports}}]);