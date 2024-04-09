(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{824:function(e,r,t){"use strict";t.r(r);var s=t(7),n=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("问题：")]),e._v(" "),r("p",[e._v("如何在promise then中设置变量")]),e._v(" "),r("p",[e._v("知识点：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://so.csdn.net/so/search?q=Promise&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promise"),r("OutboundLink")],1),e._v(" 是抽象的异步处理对象")]),e._v(" "),r("p",[e._v("Promise 有三个状态：")]),e._v(" "),r("p",[e._v("Fulfilled: has-resolved, 表示成功解决，这时会调用 onFulfilled.\nRejected: has-rejected, 表示解决失败，此时会调用 onRejected.\nPending: unresolve, 表示待解决，既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态.\n上面我们提到 Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject.")]),e._v(" "),r("p",[e._v("resolve函数的作用是，将 Promise 对象的状态从 未处理 变成 处理成功 (unresolved => resolved)， 在异步操作成功时调用，并将异步操作的结果作为参数传递出去。")]),e._v(" "),r("p",[e._v("reject函数的作用是，将 Promise 对象的状态从 未处理 变成 处理失败 (unresolved => rejected), 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。")]),e._v(" "),r("p",[e._v("Promise 实例生成以后，可以用 then 方法和 catch 方法分别指定 resolved 状态和 rejected 状态的回调函数。")]),e._v(" "),r("p",[e._v("构造方法中的两个参数resolve, reject即是改变promise的状态，resolve 方法把 Promise 的状态置为完成态（Resolved），这时 then 方法就能捕捉到变化，并执行“成功”情况的回调，resolve, reject可抛出结果，作为then方法中函数的参数。then可接受两个参数，第一个处理Resolved状态的函数，第二个处理Rejected函数。如果只想处理成功，或者失败，对应参数可设置为null,只有一个参数则表示状态改变就执行，不区分状态结果。")]),e._v(" "),r("p",[e._v("另外")]),e._v(" "),r("p",[e._v("catch()方法，它可以和 then 的第二个参数一样，用来指定 reject 的回调，另一个作用是，当执行 resolve 的回调（也就是上面 then 中的第一个参数）时，如果抛出异常了（代码出错了），那么也不会报错卡死 js，而是会进到这个 catch 方法中。")]),e._v(" "),r("p",[e._v("all()方法，Promise 的 all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调, 会把所有异步操作的结果放进一个数组中传给 then。")]),e._v(" "),r("p",[e._v("race()方法，race 按字面解释，就是赛跑的意思。race 的用法与 all 一样，只不过 all 是等所有异步操作都执行完毕后才执行 then 回调。而 race 的话只要有一个异步操作执行完毕，就立刻执行 then 回调。")]),e._v(" "),r("p",[e._v("注意：其它没有执行完毕的异步操作仍然会继续执行，而不是停止。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/u013967628/article/details/86569262",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);