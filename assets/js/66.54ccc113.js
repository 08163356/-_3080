(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{402:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("代码如下")]),s._v(" "),a("blockquote",[a("div",{staticClass:"language-SH line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/OAD/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ci_test.png\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("im_file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/OAD/ci_test.png\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"luxing3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("passwd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Lx1010#1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.12"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fpath_pc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:\\ProgramerFiles\\TVSscreenshot"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$im_file")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("blockquote",[a("p",[s._v("rm $im_file\nfi")]),s._v(" "),a("p",[s._v("screenshot $fpath $fname")]),s._v(" "),a("p",[s._v("start="),a("code",[s._v("date '+%s'")]),s._v("\nend="),a("code",[s._v("expr $start + 5")]),s._v("\nwhile [ true ]\ndo\ncurrent="),a("code",[s._v("date '+%s'")]),s._v('\nif [ $current -gt $end ]; then\nbreak\nfi\nif [ -f "$im_file" ]; then\n# echo "n $n"\n# echo "-u $user"\n# echo "-p $passwd"\n# echo "ip $ip"\n# echo "fpath_pc $fpath_pc"\n# echo "fpath_f_name"\nftpput -u $user -p $passwd $ip $fpath_pc $im_file\nrm $im_file\necho done\nbreak\nfi\ndone')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"})])]),s._v(" "),a("p",[s._v("使用方法：")]),s._v(" "),a("p",[s._v("前提条件：")]),s._v(" "),a("p",[s._v("PC端搭建ftp服务，电视和PC连接至同一局域网 （或使用某个电视可以访问的ftp服务器）")]),s._v(" "),a("p",[s._v("串口输入 iptables -F")]),s._v(" "),a("p",[s._v("将脚本保存至电视，如/OAD/scrsht.sh")]),s._v(" "),a("p",[s._v("然后运行 /OAD/scrsht.sh "),a("ftpuser",[a("ftppasswd",[s._v(" <ftp_ip> <file_path_upload>")])],1)],1)])}),[],!1,null,null,null);a.default=n.exports}}]);