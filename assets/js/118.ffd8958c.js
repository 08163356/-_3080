(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{456:function(n,s,a){"use strict";a.r(s);var t=a(7),e=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h3",{attrs:{id:"一、数据结构模式之chain-of-responsibility-职责链模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、数据结构模式之chain-of-responsibility-职责链模式"}},[n._v("#")]),n._v(" 一、数据结构模式之Chain of Responsibility（职责链模式）")]),n._v(" "),s("h4",{attrs:{id:"_1-模式定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-模式定义"}},[n._v("#")]),n._v(" 1.模式定义")]),n._v(" "),s("p",[n._v("使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递请求，直到有一个对象处理他为止。")]),n._v(" "),s("p",[n._v("理解：定义讲得很清楚，如果一个请求有多个对象都能处理的话，就把多个对象排个优先级，形成一条链，请求的时候逐一询问，直到找到能处理他的对象。（怎么排序肯定也是有学问在里面的吧）")]),n._v(" "),s("h4",{attrs:{id:"_2-要点总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-要点总结"}},[n._v("#")]),n._v(" 2.要点总结")]),n._v(" "),s("p",[n._v("Chain of Responsibility模式的应用场合在于“一个请求可能有多个接收者，但是最后真正的接收者只有一个“，这时候请求发送者与接收者的耦合有可能出现”变化脆弱”症状，职责链的目的就是将二者解耦，从而更好地应对变化。")]),n._v(" "),s("p",[n._v("应用Chain of Responsibility模式后，对象的职责分派将更具灵活性。我们可以在运行时动态添加/修改请求的处理职责")]),n._v(" "),s("p",[n._v("如果请求传递到职责链的末尾仍得不到处理，应该有一个合理的缺省机制。这也是每一个接受对象的责任，而不是发出请求对象的责任。")]),n._v(" "),s("h4",{attrs:{id:"_3-结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构"}},[n._v("#")]),n._v(" 3.结构")]),n._v(" "),s("h4",{attrs:{id:"_4-实现实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-实现实例"}},[n._v("#")]),n._v(" 4.实现实例")]),n._v(" "),s("div",{staticClass:"language-c++ line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('#include<iostream>\nusing namespace std;\n\nclass Handler\n{\nprotected:\n\tHandler *_successor;\n\npublic:\n\tvirtual void Handle(int value) = 0;\n\tvoid SetSuccessor(Handler *successor)\n\t{\n\t\tthis->_successor = successor;\n\t}\n};\n\nclass Handler_level_1: public Handler\n{\npublic:\n\tvirtual void Handle(int value)\n\t{\n\t\tif(value == 1)\n\t\t{\n\t\t\tcout<<"Handler_level_1 can handle"<<endl;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tcout<<"Handler_level_1 can\'t handle"<<endl;\n\t\t\tthis->_successor->Handle(value);\n\t\t}\n\t}\n};\n\nclass Handler_level_2: public Handler\n{\npublic:\n\tvoid Handle(int value)\n\t{\n\t\tif(value == 2)\n\t\t{\n\t\t\tcout<<"Handler_level_2 can handle"<<endl;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tcout<<"Handler_level_2 can\'t handle"<<endl;\n\t\t\t_successor->Handle(value);\n\t\t}\n\t}\n};\n\nclass Handler_level_end:public Handler\n{\npublic:\n\tvoid Handle(int value)\n\t{\n\t\tif(value == 3)\n\t\t{\n\t\t\tcout<<"Handler_level_3 can handle"<<endl;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tcout<<"No Handler can handle this value"<<endl;\n\t\t}\n\t}\n};\n\nint main()\n{\n\tHandler_level_1 *handle_1 = new Handler_level_1();\n\tHandler_level_2 *handle_2 = new Handler_level_2();\n\tHandler_level_end * handle_end = new Handler_level_end();\n\n\thandle_1->SetSuccessor(handle_2);\n\thandle_2->SetSuccessor(handle_end);\n\thandle_end->SetSuccessor(NULL);\n\n\thandle_1->Handle(1);\n\tcout<<endl;\n\thandle_1->Handle(2);\n\tcout<<endl;\n\thandle_1->Handle(3);\n\tcout<<endl;\n\thandle_1->Handle(4);\n\tcout<<endl;\n\t\n\tdelete handle_1;\n\tdelete handle_2;\n\tdelete handle_end;\n\tsystem("pause");\n\treturn 0;\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br")])]),s("p",[s("a",{attrs:{href:"http://www.voidcn.com/article/p-dkpnqxkn-ex.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("参考"),s("OutboundLink")],1)]),n._v(" "),s("h3",{attrs:{id:"二、散装知识点、问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、散装知识点、问题"}},[n._v("#")]),n._v(" 二、散装知识点、问题")]),n._v(" "),s("p",[n._v("1.该设计模式本质上是链表，现今可能不被认为是一种设计模式")]),n._v(" "),s("p",[n._v("2.现实中应用并不多，大多都是使用链表或者相应的框架。")]),n._v(" "),s("p",[n._v("3.三个数据结构模式，Composite模式是树形结构，Iterator是处理容器，使用泛型编程类模板实现，最后一个使用链表结构（后两者有些过时了，前者还能用到）")])])}),[],!1,null,null,null);s.default=e.exports}}]);