(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{777:function(e,o,t){"use strict";t.r(o);var l=t(7),r=Object(l.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("每个HTML元素都具有"),o("code",[e._v("clientHeight")]),e._v(" "),o("code",[e._v("offsetHeight")]),e._v(" "),o("code",[e._v("scrollHeight")]),e._v(" "),o("code",[e._v("offsetTop")]),e._v(" "),o("code",[e._v("scrollTop")]),e._v(" 这5个和元素高度、滚动、位置相关的属性，单凭单词很难搞清楚分别代表什么意思之间有什么区别。通过阅读它们的文档总结出规律如下：")]),e._v(" "),o("p",[o("code",[e._v("clientHeight")]),e._v("和"),o("code",[e._v("offsetHeight")]),e._v("属性和元素的滚动、位置没有关系它代表元素的高度，其中：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("clientHeight")]),e._v("：包括padding但不包括border、水平滚动条、margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。")]),e._v(" "),o("li",[o("code",[e._v("offsetHeight")]),e._v("：包括padding、border、水平滚动条，但不包括margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。")])]),e._v(" "),o("p",[e._v("接下来讨论出现有滚动条时的情况：")]),e._v(" "),o("p",[e._v("当本元素的子元素比本元素高且overflow=scroll时，本元素会scroll，这时：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("scrollHeight")]),e._v(": 因为子元素比父元素高，父元素不想被子元素撑的一样高就显示出了滚动条，在滚动的过程中本元素有部分被隐藏了，"),o("code",[e._v("scrollHeight")]),e._v("代表包括当前不可见部分的元素的高度。而可见部分的高度其实就是"),o("code",[e._v("clientHeight")]),e._v("，也就是"),o("code",[e._v("scrollHeight>=clientHeight")]),e._v("恒成立。在有滚动条时讨论scrollHeight才有意义，在没有滚动条时"),o("code",[e._v("scrollHeight==clientHeight")]),e._v("恒成立。单位px，只读元素。")]),e._v(" "),o("li",[o("code",[e._v("scrollTop")]),e._v(": 代表在有滚动条时，滚动条向下滚动的距离也就是元素顶部被遮住部分的高度。在没有滚动条时"),o("code",[e._v("scrollTop==0")]),e._v("恒成立。单位px，可读可设置。")]),e._v(" "),o("li",[o("code",[e._v("offsetTop")]),e._v(": 当前元素顶部距离最近父元素顶部的距离,和有没有滚动条没有关系。单位px，只读元素。")])]),e._v(" "),o("p",[e._v("最后附上这些属性的详细解释的文档：")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight",target:"_blank",rel:"noopener noreferrer"}},[e._v("clientHeight"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight",target:"_blank",rel:"noopener noreferrer"}},[e._v("offsetHeight"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop",target:"_blank",rel:"noopener noreferrer"}},[e._v("offsetTop"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight",target:"_blank",rel:"noopener noreferrer"}},[e._v("scrollHeight"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop",target:"_blank",rel:"noopener noreferrer"}},[e._v("scrollTop"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=r.exports}}]);