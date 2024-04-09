(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{614:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"一、问题一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、问题一"}},[a._v("#")]),a._v(" 一、问题一：")]),a._v(" "),s("h3",{attrs:{id:"_1-情景一描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-情景一描述"}},[a._v("#")]),a._v(" 1.情景一描述")]),a._v(" "),s("p",[a._v("我的域名是：blog.axingit.com")]),a._v(" "),s("p",[a._v("github服务器的ip是：https://08163356.github.io/aXingknowledgeRepo_3080")]),a._v(" "),s("p",[a._v("但是在浏览器浏览的时候blog.axingit.com无法和GitHub page绑定，当我解绑了之后，再输入github pange地址https://08163356.github.io/aXingknowledgeRepo_3080的时候，访问的还是blog.axingit.com")]),a._v(" "),s("h3",{attrs:{id:"_2-情景二描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-情景二描述"}},[a._v("#")]),a._v(" 2.情景二描述")]),a._v(" "),s("p",[a._v("之前绑定过axingit.top到github且在手机上访问过，但是失效了，目前在手机上再访问github page。现在解除github page后，在手机上访问github page的地址：https://08163356.github.io/aXingknowledgeRepo_3080就会定向到axing,top，且出现的是涩涩的内容。")]),a._v(" "),s("h4",{attrs:{id:"出现地点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现地点"}},[a._v("#")]),a._v(" 出现地点")]),a._v(" "),s("ul",[s("li",[a._v("[ ] 以前访问过这个我自己网址的浏览器")]),a._v(" "),s("li",[a._v("[ ] wx直接点击访问，然后被提示有风险，然后被封了")])]),a._v(" "),s("h2",{attrs:{id:"二、解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、解决方案"}},[a._v("#")]),a._v(" 二、解决方案")]),a._v(" "),s("p",[a._v("1.换个服务器")]),a._v(" "),s("p",[a._v("2.清除cookie缓存")]),a._v(" "),s("p",[a._v("3.想办法将blog.axingit.com和https://08163356.github.io/aXingknowledgeRepo_3080绑定在一起")]),a._v(" "),s("p",[a._v("4，清除缓存的DNS(没用)")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("win+cmd\nipconfig /flushdns\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("5.使用匿名模式浏览")]),a._v(" "),s("h2",{attrs:{id:"三、原理解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、原理解析"}},[a._v("#")]),a._v(" 三、原理解析：")]),a._v(" "),s("p",[a._v("由于你上次保存通过blog.axingit.com访问了github page，你自己的电脑+附近的路由中已经有了对应的映射关系，或者叫缓存。")]),a._v(" "),s("h2",{attrs:{id:"四、是一道面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、是一道面试题"}},[a._v("#")]),a._v(" 四、是一道面试题：")]),a._v(" "),s("p",[a._v("当输入url的时候整个网络发生了什么")]),a._v(" "),s("p",[a._v("个人描述：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("应用层首先是浏览器输入框读取url\n网络层通过dns进行解析获取ip地址\n然后通过ip地址生成报文发送到网卡\n网卡发送给附近的路由器进行寻址\n通过arp协议层层转发\n报文通过运营商产生计费\n运营商会先反向代理去寻找哪台服务器优先响应\n最终选定服务器\n然后判断是什么协议\n如果是tcp协议的话会通过三次握手四次挥手进行通信\n如果是udp协议的话直接建立连接开始通信 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("网络答案：")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/mingchengtx/article/details/106000231#:~:text=%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%EF%BC%9A%E8%BE%93%E5%85%A5url%E5%90%8E%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%8C%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E%E5%90%84%E5%B1%82%E4%B9%8B%E9%97%B4%E7%9A%84%E4%BD%9C%E7%94%A8%201%201.DNS%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%20%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8DNS%E7%BC%93%E5%AD%98%E4%B8%AD%E6%90%9C%E7%B4%A2%20...%202%202.%E5%BB%BA%E7%AB%8BTCP%E8%BF%9E%E6%8E%A5%20%E4%B8%BB%E6%9C%BA%E6%B5%8F%E8%A7%88%E5%99%A8%E9%80%9A%E8%BF%87DNS%E8%A7%A3%E6%9E%90%E5%BE%97%E5%88%B0%E4%BA%86%E7%9B%AE%E6%A0%87%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84IP%E5%9C%B0%E5%9D%80%E5%90%8E%EF%BC%8C%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%BB%BA%E7%AB%8BTCP%E8%BF%9E%E6%8E%A5%E3%80%82,7%206%20%E6%B5%8F%E8%A7%88%E5%99%A8%E6%98%BE%E7%A4%BA%E9%A1%B5%E9%9D%A2%20...%208%207%20%E8%8E%B7%E5%8F%96%E5%85%B6%E4%BB%96%E5%86%85%E5%AE%B9%20",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考答案"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"五、其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、其他问题"}},[a._v("#")]),a._v(" 五、其他问题")]),a._v(" "),s("h3",{attrs:{id:"dns-probe-finished-nxdomain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-probe-finished-nxdomain"}},[a._v("#")]),a._v(" DNS_PROBE_FINISHED_NXDOMAIN")]),a._v(" "),s("p",[a._v("是dns解析错误，没有找到对应的域名")]),a._v(" "),s("h3",{attrs:{id:"域名和其他域名绑定到一起是发生在网络传输中的哪一个阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名和其他域名绑定到一起是发生在网络传输中的哪一个阶段"}},[a._v("#")]),a._v(" 域名和其他域名绑定到一起是发生在网络传输中的哪一个阶段？")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("当多个域名绑定到一起时，这种绑定是在 DNS（域名系统）解析阶段发生的。\n\nDNS解析是将域名转换为与之关联的IP地址的过程。当用户在浏览器中输入一个域名时，浏览器首先会向本地DNS解析器发送一个查询请求。本地DNS解析器会根据自身的缓存或向上级DNS服务器发送请求来获取域名对应的IP地址。\n\n在这个过程中，如果多个域名被绑定到同一个IP地址上，DNS解析器会返回相同的IP地址给用户的浏览器。这样，浏览器就可以通过该IP地址连接到相应的服务器，无论用户输入哪个绑定的域名，最终都会访问到同一个服务器。\n\n因此，域名之间的绑定是通过在DNS解析过程中将多个域名映射到相同的IP地址来实现的。这使得多个域名可以共享同一个服务器和网站内容。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);