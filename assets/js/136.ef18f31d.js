(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{470:function(n,s,e){"use strict";e.r(s);var a=e(7),r=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v('\' 32 位系统为\n\' Declare  Function GetCommandLine Lib "kernel32" Alias "GetCommandLineW" () As Long\n\' Declare  Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (MyDest As Any, MySource As Any, ByVal MySize As Long)\n\' Declare  Function lstrlenW Lib "kernel32" (ByVal lpString As Long) As Long\n\' 64 位系统为\nPrivate Declare PtrSafe Function GetCommandLine Lib "kernel32" Alias "GetCommandLineW" () As LongPtr\nPrivate Declare PtrSafe Function lstrlenW Lib "kernel32" (ByVal lpString As LongPtr) As LongPtr\nPrivate Declare PtrSafe Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" (MyDest As Any, MySource As Any, ByVal MySize As LongPtr)')]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('\n \n\x3c!-- more --\x3e\nPrivate Sub Workbook_Open()\n    \n    Dim CmdRaw  As LongPtr\n    Dim CmdLine As String\n    Dim Msg     As String\n \n    CmdRaw = GetCommandLine\n    CmdLine = CmdToSTr(CmdRaw)\n    Dim paraPos%\n    On Error Resume Next \' 这句是必须的，防止非bat打开，下面代码会报错\n    paraPos = WorksheetFunction.Search("/batOpen", CmdLine, 1) \'检查打开方式\n     If paraPos > 0 Then\n        MsgBox "bat"\n        \'===============\n         \'===============\n    Else\n        MsgBox "man"\n    End If\n    \nEnd Sub\n \n\' 被调用的子函数 , 用来将命令行参数转换成字符串类型:\nFunction CmdToSTr(Cmd As LongPtr) As String\n    Dim Buffer() As Byte\n    Dim StrLen   As LongPtr\n    If Cmd Then\n        StrLen = lstrlenW(Cmd) * 2\n        If StrLen Then\n            ReDim Buffer(0 To CInt(StrLen - 1)) As Byte\n            CopyMemory Buffer(0), ByVal Cmd, StrLen\n            CmdToSTr = Buffer\n        End If\n    End If\nEnd Function\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);