(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{815:function(v,_,p){"use strict";p.r(_);var t=p(7),n=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("一、 作用域意识")]),v._v(" "),_("p",[v._v("1.避免全局查找")]),v._v(" "),_("p",[v._v("全局变量和函数相比于局部值始终是最费时间的，因为需要经历作用域链查找")]),v._v(" "),_("p",[v._v("只要函数中有引用超过两次的全局对象，就应该把这个对象保存为一个局部变量。")]),v._v(" "),_("p",[v._v("2．不使用with语句")]),v._v(" "),_("p",[v._v("with语句会创建自己的作用域，因此也会加长其中代码的作用域链。在with语句中执行的代码一定比在它外部执行的代码慢，因为作用域链查找时多一步。")]),v._v(" "),_("p",[v._v("二、 选择正确的方法")]),v._v(" "),_("p",[v._v("与其他语言一样，影响性能的因素通常涉及算法或解决问题的方法。很多能在其他编程语言中提升性能的技术和方法同样也适用于JavaScript。\n")]),v._v(" "),_("p",[v._v("1．避免不必要的属性查找")]),v._v(" "),_("p",[v._v("使用变量和数组相比访问对象属性效率更高，访问对象属性的算法复杂度是O（n）。访问对象的每个属性都比访问变量或数组花费的时间长，因为查找属性名要搜索原型链。简单来说，查找的属性越多，执行时间就越长。")]),v._v(" "),_("p",[v._v("特别要注意避免通过多次查找获取一个值，只要使用某个object属性超过一次，就应该将其保存在局部变量中。")]),v._v(" "),_("p",[v._v("2．优化循环")]),v._v(" "),_("p",[v._v("优化循环的基本步骤如下。")]),v._v(" "),_("p",[v._v("（1）简化终止条件。因为每次循环都会计算终止条件，所以它应该尽可能地快。这意味着要避免属性查找或其他O（n）操作。")]),v._v(" "),_("p",[v._v("（2）简化循环体。循环体是最花时间的部分，因此要尽可能优化。要确保其中不包含可以轻松转移到循环外部的密集计算。")]),v._v(" "),_("p",[v._v("（3）使用后测试循环。最常见的循环就是for和while循环，这两种循环都属于先测试循环。do-while就是后测试循环，避免了对终止条件初始评估，因此应该会更快。")]),v._v(" "),_("p",[v._v("//阅读到28.2.2 选择正确的方法中间")])])}),[],!1,null,null,null);_.default=n.exports}}]);