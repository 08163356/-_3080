(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{441:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、批量匹配删除博客中的format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、批量匹配删除博客中的format"}},[s._v("#")]),s._v(" 一、批量匹配删除博客中的format")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\\ntitle:(?:.|\\n)*?08163356\\n---\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、递归获取当前文件夹及其子文件夹的目录和文件名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、递归获取当前文件夹及其子文件夹的目录和文件名字"}},[s._v("#")]),s._v(" 二、递归获取当前文件夹及其子文件夹的目录和文件名字")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- more --\x3e\n@echo off\nset OUTPUT_FILE=output.txt\n\nREM 清空输出文件\ntype nul > %OUTPUT_FILE%\n\nREM 调用递归函数获取目录和文件\ncall :GetDirectoriesAndFiles "%CD%" >> %OUTPUT_FILE%\n\necho 目录列表已保存到 %OUTPUT_FILE%\nexit /b\n\n:GetDirectoriesAndFiles\nfor /f "delims=" %%d in (\'dir /ad /b "%~1"\') do (\n    echo D: %~1\\%%d\n    call :GetDirectoriesAndFiles "%~1\\%%d"\n)\n\nfor /f "delims=" %%f in (\'dir /a-d /b "%~1"\') do (\n    echo F: %~1\\%%f\n)\nexit /b\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"三、正则表达式匹配md文件名字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、正则表达式匹配md文件名字"}},[s._v("#")]),s._v(" 三、正则表达式匹配md文件名字")]),s._v(" "),a("p",[s._v("对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(./docs/性能优化/2.垃圾回收/1.GC ROOT是从什么地方开始的.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("目的：1.GC ROOT是从什么地方开始的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\\/([^/]+)(?=\\.md)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);