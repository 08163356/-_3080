(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{479:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"method-一键对比excel异同-陆兴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-一键对比excel异同-陆兴"}},[s._v("#")]),s._v(" [Method]一键对比excel异同--陆兴")]),s._v(" "),e("h3",{attrs:{id:"一、背景简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、背景简介"}},[s._v("#")]),s._v(" 一、背景简介")]),s._v(" "),e("p",[s._v("测试过程中常常出现不一样的表格，他们有这样的特点：中间某一列部分内容一致，但是A表格中的数据B表格中没有，有成百上千行的excel需要找出不同或者相同的数据，并进行标记。")]),s._v(" "),e("h3",{attrs:{id:"二、实现思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、实现思路"}},[s._v("#")]),s._v(" 二、实现思路")]),s._v(" "),e("h3",{attrs:{id:"三、show-me-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、show-me-code"}},[s._v("#")]),s._v(" 三、show me code")]),s._v(" "),e("div",{staticClass:"language-vbscript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Sub 数据对比()\n    Dim i As Integer\n    Dim j As Integer\n    For i = 2 To 64        \'员工基础报表数据范围\n        For j = 2 To 203    \'员工待遇统计表数据范围\n         If Sheets("APP Baseline").Cells(i, 2) = Sheets("URL new").Cells(j, 2) Then\n            If Sheets("APP Baseline").Cells(i, 2) = Sheets("URL new").Cells(j, 2) Then\n\n               Sheets("APP Baseline").Cells(i, 7) = "不存在"   \'存在时进行标记\n            End If\n         End If\n        Next j\n    Next i\nEnd Sub\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"四、使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、使用方法"}},[s._v("#")]),s._v(" 四、使用方法")])])}),[],!1,null,null,null);e.default=n.exports}}]);