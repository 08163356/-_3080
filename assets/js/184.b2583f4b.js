(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{523:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("个人需求：")]),s._v(" "),n("h3",{attrs:{id:"需求-怎么获取gerrit中个人comment的change"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需求-怎么获取gerrit中个人comment的change"}},[s._v("#")]),s._v(" 需求：怎么获取gerrit中个人comment的change")]),s._v(" "),n("h4",{attrs:{id:"方法一-界面search"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一-界面search"}},[s._v("#")]),s._v(" 方法一：界面search")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("status:merged commentby:self reviewedby:self\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("status:merged commentby:self\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("commentby:'USER'\n")]),s._v(" "),n("p",[s._v("Changes containing a top-level or inline comment by 'USER'. The special case of "),n("code",[s._v("commentby:self")]),s._v(" will find changes where the caller has commented.")]),s._v(" "),n("h4",{attrs:{id:"方法二-上面的方法查找不全面-使用ssh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二-上面的方法查找不全面-使用ssh"}},[s._v("#")]),s._v(" 方法二：上面的方法查找不全面，使用ssh")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ssh -p <port> username@gerrit_server gerrit --help\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("命令再用--help可以查询使用方式，比如")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" ssh -p <port> username@gerrit_server gerrit query --help \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查询相关的comment")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ssh -p 29418 luxing3@10.11.92.87 gerrit QUERY comments \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/zndxall/p/16374851.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("gerrit 命令之query统计提交记录"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ssh -p 29418 username@gerritip gerrit query  --help\ngerrit query QUERY ... [--] [--all-approvals] [--all-reviewers] [--comments] [--commit-message] [--current-patch-set] [--dependencies] [--files] [--format FMT] [--help (-h)] [--patch-sets] [--start (-S) N] [--submit-records]\n\n QUERY               : Query to execute\n --                  : end of options\n --all-approvals     : Include information about all patch sets and approvals\n --all-reviewers     : Include all reviewers\n --comments          : Include patch set and inline comments\n --commit-message    : Include the full commit message for a change\n --current-patch-set : Include information about current patch set\n --dependencies      : Include depends-on and needed-by information\n --files             : Include file list on patch sets\n --format FMT        : Output display format\n --help (-h)         : display this help text\n --patch-sets        : Include information about all patch sets\n --start (-S) N      : Number of changes to skip\n --submit-records    : Include submit and label status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://review.opendev.org/Documentation/user-search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档(官网)有用"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("其他部分相关参数：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("age:'AGE'\n \n    可查询给定时间之前的change信息，如 age：1d 即为查询1天前的所有change信息，以change的最后更新时间为基准\n \n    s, sec, second, seconds\n \n    m, min, minute, minutes\n \n    h, hr, hour, hours\n \n    d, day, days (1 day is treated as 24 hours)\n \n    w, week, weeks (1 week is treated as 7 days)\n \n    mon, month, months (1 month is treated as 30 days)\n \n    y, year, years (1 year is treated as 365 days)\n \n \nchange:'ID'\n     \n    查询指定change-id的change信息\n \nconflicts:'ID'\n \n    查询指定conflicts-id的change信息\n \nowner:'USER', o:'USER'\n \n    查询指定owner的change信息\n \nownerin:'GROUP'\n \n    查询指定group人员提交的change信息\n \nreviewer:'USER', r:'USER'\n \n    查询指定审核人员的change信息\n \nreviewerin:'GROUP'\n \n    查询指定group人员审核的change信息\n \ncommit:'SHA1'\n \n    Changes where 'SHA1' is one of the patch sets of the change.\n \nproject:'PROJECT', p:'PROJECT'\n \n    查询指定项目下的change信息\n \nprojects:'xx'\n     \n    查询项目名以xx开头的所有项目的chage信息\n \nparentproject:'PROJECT'\n     \n    查询指定项目及其子项目的change信息\n \nbranch:'BRANCH'\n     \n    查询指定分支的change信息\n \ntopic:'TOPIC'\n \n    查询指定topic的change信息，常与‘branch’，‘project’连用\n \nref:'xxx'\n     \n    查询目标分支与 xxx匹配的change信息\n \ntr:'ID', bug:'ID'\n \n    查询提交信息中包含‘bug’的change信息\n \nmessage:'MESSAGE'\n     \n    查询提交信息包含‘MESSAGE’的change信息\n \ncomment:'TEXT'\n \n    查询comment信息包含指定字符串的 change信息\n \nstatus：xxx\n     \n    查询指定状态的change\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);