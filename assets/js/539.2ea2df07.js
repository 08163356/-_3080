(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{877:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"什么是eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是eslint"}},[s._v("#")]),s._v(" 什么是eslint")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://link.juejin.cn/?target=http%3A%2F%2Feslint.cn%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("ESLint"),n("OutboundLink")],1),s._v(" 是一个代码检查工具，用来检查你的代码是否符合指定的规范")]),s._v(" "),n("p",[s._v("规范")]),s._v(" "),n("ul",[n("li",[s._v("行业推荐的规范； 在创建项目时，我们使用的是 JavaScript ==Standard== Style 代码风格的规则")]),s._v(" "),n("li",[s._v("自定义的规范。你和你的团队可以自行约定一套规范")])]),s._v(" "),n("p",[s._v("参考文档\n")]),s._v(" "),n("p",[s._v("https://juejin.cn/post/7013326365852188679")]),s._v(" "),n("h3",{attrs:{id:"报错解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错解决"}},[s._v("#")]),s._v(" 报错解决：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Syntax Error: Error: No ESLint configuration found in\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因：")]),s._v(" "),n("p",[s._v("造成这种报错的原因是因为项目中缺少.eslintrc.js文件。添加上就可以了。")]),s._v(" "),n("h3",{attrs:{id:"添加-eslintrc-js文件方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加-eslintrc-js文件方法"}},[s._v("#")]),s._v(" 添加.eslintrc.js文件方法：")]),s._v(" "),n("ol",[n("li",[s._v("手动添加，直接手动添加.eslintrc.js文件在项目中，并进行相应的配置就行了。")]),s._v(" "),n("li",[s._v("使用命令添加，如果eslint是全局安装的话，使用命令eslint –init安装。")])]),s._v(" "),n("h3",{attrs:{id:"配置信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[s._v("#")]),s._v(" 配置信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('module.exports = {\n"env": {\n    "browser": true,\n    "es6": true,\n    "node": true\n},\n"extends": "eslint:recommended",\n"parserOptions": {\n    "ecmaVersion": 2015,\n    "sourceType": "module"\n},\n"rules": {\n    // 缩进\n    "indent": [\n        "error",\n        4 //我的是编辑器自动格式化，不是使用tabs，而是四个空格\n    ],\n    "linebreak-style": [\n        "error",\n        "windows"\n    ],\n    // 引号\n    "quotes": [\n        1,\n        "single"\n    ],\n    // 分号结尾\n    "semi": [\n        "error",\n        "always"\n    ],\n    "no-unused-vars": [2, {\n        // 允许声明未使用变量\n        "vars": "local",\n        // 参数不检查\n        "args": "none"\n    }],\n    // 最大空行100\n    "no-multiple-empty-lines": [0, { "max": 100 }],\n    "no-mixed-spaces-and-tabs": [0],\n    //不能使用console\n    "no-console": \'off\',\n    //未定义变量不能使用\n    "no-undef": 0,\n    //一行结束后面不要有空格\n    "no-trailing-spaces": 1,\n    //强制驼峰法命名\n    "camelcase": 2,\n    //对象字面量项尾不能有逗号\n    "comma-dangle": [2, "never"],\n    //this别名\n    "consistent-this": [2, "that"],\n}\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("p",[s._v("为什么引入外部js文件必须要代码审查？")]),s._v(" "),n("p",[s._v("不进行代码审查")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1. 关闭单一文件校验\n在文件头部添加如下内容：\n\n/* eslint-disable */\n2、如果对全局变量忽略，显然加注释的方法有些繁琐，解决方法：\n\n找到.eslintrc.js,添加 'globals': { '你的全局变量': null }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("参考文档：")]),s._v(" "),n("p",[s._v("https://blog.csdn.net/weixin_41688900/article/details/119043585")]),s._v(" "),n("p",[s._v("https://www.zhihu.com/question/462580729")]),s._v(" "),n("p",[s._v("https://segmentfault.com/a/1190000040036418")])])}),[],!1,null,null,null);n.default=t.exports}}]);