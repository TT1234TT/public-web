(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myOpinion-myOpinionList"],{"04f5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{navList:["全部","待答复","已答复"],tabCurrentIndex:0,listData:[{time:"2020-02-02 09:25:00",state:1,content:"意见内容"},{time:"2020-02-02 09:25:00",state:1,content:"意见内容"},{time:"2020-02-02 09:25:00",state:2,content:"意见内容"}]}},onLoad:function(t){t.state&&(this.tabCurrentIndex=t.state)},methods:{goDetails:function(t){uni.navigateTo({url:"myOpinionDetails"})},tabClick:function(t){this.tabCurrentIndex=t}}};e.default=i},"083f":function(t,e,n){var i=n("7a7c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("e9a3a15c",i,!0,{sourceMap:!1,shadowMode:!1})},"0cbc":function(t,e,n){"use strict";var i=n("083f"),a=n.n(i);a.a},"5c29":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"nav-item",class:{current:t.tabCurrentIndex==i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(i)}}},[t._v(t._s(e))])})),1),n("v-uni-view",{staticStyle:{width:"100%",height:"88upx"}}),n("v-uni-view",{staticClass:"list"},t._l(t.listData,(function(e,i){return n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetails(i)}}},[n("v-uni-view",{staticClass:"acea-row row-between-wrapper item-top"},[n("v-uni-text",{staticClass:"color9"},[t._v(t._s(e.time))]),1==e.state?n("v-uni-text",{staticClass:"price-color state"},[t._v("待答复")]):t._e(),2==e.state?n("v-uni-text",{staticClass:"state"},[t._v("已答复")]):t._e()],1),n("v-uni-view",{staticClass:"content line1"},[t._v(t._s(e.content))])],1)})),1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"77a2":function(t,e,n){"use strict";n.r(e);var i=n("5c29"),a=n("a62c");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0cbc");var s,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"eef26474",null,!1,i["a"],s);e["default"]=c.exports},"7a7c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.navbar[data-v-eef26474]{width:100%;position:fixed;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-eef26474]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;position:relative}.navbar .nav-item.current[data-v-eef26474]{color:#17abe3}.navbar .nav-item.current[data-v-eef26474]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #17abe3}.list[data-v-eef26474]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.list .item[data-v-eef26474]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;margin-bottom:%?20?%;border-radius:%?6?%}.list .item .item-top[data-v-eef26474]{border-bottom:%?2?% solid #f5f5f5;padding-bottom:%?20?%}.list .item .state[data-v-eef26474]{font-size:%?30?%}.list .item .content[data-v-eef26474]{padding-top:%?20?%;font-size:%?30?%}',""]),t.exports=e},a62c:function(t,e,n){"use strict";n.r(e);var i=n("04f5"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);