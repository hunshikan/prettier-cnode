(function(t){function a(a){for(var n,r,c=a[0],o=a[1],l=a[2],d=0,p=[];d<c.length;d++)r=c[d],s[r]&&p.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==s[o]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="./";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0667":function(t,a,e){"use strict";var n=e("61ae"),s=e.n(n);s.a},"0877":function(t,a,e){"use strict";var n=e("6b71"),s=e.n(n);s.a},"0b6f":function(t,a,e){"use strict";var n=e("eded"),s=e.n(n);s.a},"1e9c":function(t,a,e){"use strict";var n=e("2080"),s=e.n(n);s.a},2080:function(t,a,e){},"2cc9":function(t,a,e){"use strict";var n=e("e30a"),s=e.n(n);s.a},"41ac":function(t,a,e){},"529a":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header"),e("main",[e("transition",{attrs:{name:"slide"}},[e("NavBar",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowNav,expression:"shouldShowNav"}],staticClass:"nav-bar"})],1),e("router-view",{staticClass:"content"})],1)],1)},i=[],r=(e("7f7f"),function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("header",[n("router-link",{attrs:{to:{name:"home",params:{tab:"all"}}}},[n("img",{staticClass:"logo",attrs:{alt:"CNode Logo",src:e("9b19")}})]),n("i",{staticClass:"material-icons grey500 menu-button",on:{click:t.onMenuClick}},[t._v(t._s(t.sharedState.isShowNav?"close":"menu"))])],1)}),c=[],o={state:{isShowNav:document.documentElement.clientWidth>=768,isWideDevice:document.documentElement.clientWidth>=768},setNavShow:function(t){this.state.isShowNav=t},setIsWideDevice:function(t){this.state.isWideDevice=t}},l={name:"Header",data:function(){return{sharedState:o.state}},methods:{onMenuClick:function(){o.setNavShow(!this.sharedState.isShowNav)}}},u=l,d=(e("0877"),e("2877")),p=Object(d["a"])(u,r,c,!1,null,"20992d4a",null),v=p.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("div",{staticClass:"nav-container",class:{"nav-fixed":t.fixNav}},[e("div",{staticClass:"subtitle"},[t._v("主题")]),e("ul",{staticClass:"nav-list"},t._l(t.cnodeNav,function(a){return e("router-link",{key:a.id,class:t.currentTab===a.id?"selected":"",attrs:{to:{name:"home",params:{tab:a.id}}}},[e("li",[e("i",{staticClass:"material-icons grey500"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.name))])])])}),1),e("div",{staticClass:"subtitle"},[t._v("其他")]),e("ul",{staticClass:"nav-list"},t._l(t.otherNav,function(a){return e("a",{key:a.link,attrs:{href:a.link}},[e("li",[e("i",{staticClass:"material-icons grey500"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.name))])])])}),0)])])},f=[],h=[{name:"全部",id:"all",icon:"vertical_split"},{name:"精华",id:"good",icon:"star"},{name:"分享",id:"share",icon:"share"},{name:"问答",id:"ask",icon:"contact_support"},{name:"招聘",id:"job",icon:"work"},{name:"客户端测试",id:"dev",icon:"code"}],_=[{name:"CNode API",link:"https://cnodejs.org/api",icon:"settings_input_hdmi"},{name:"Pretter CNode",link:"https://github.com/Gwokhov/prettier-cnode",icon:"storage"}],g={name:"NavBar",data:function(){return{cnodeNav:h,otherNav:_,currentTab:this.$route.params.tab?this.$route.params.tab:"all",fixNav:!1}},watch:{"$route.params.tab":function(t,a){t&&(this.currentTab=t,o.setNavShow(!1))}},mounted:function(){var t=this;window.addEventListener("scroll",function(a){window.scrollY>520?t.fixNav=!0:t.fixNav=!1})}},b=g,C=(e("2cc9"),Object(d["a"])(b,m,f,!1,null,"3c224eca",null)),D=C.exports,w={components:{Header:v,NavBar:D},data:function(){return{sharedState:o.state}},created:function(){window.addEventListener("resize",function(t){document.documentElement.clientWidth>=768?(o.setNavShow(!0),o.setIsWideDevice(!0)):(o.setNavShow(!1),o.setIsWideDevice(!1))})},computed:{shouldShowNav:function(){return this.sharedState.isWideDevice?"home"===this.$route.name||void 0:this.sharedState.isShowNav}}},y=w,k=(e("0667"),Object(d["a"])(y,s,i,!1,null,"0c6184e8",null)),x=k.exports,N=e("8c4f"),S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ArticleList")},$=[],A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.articleList?e("div",[e("ul",{staticClass:"article-list"},t._l(t.articleList,function(a){return e("li",{key:a.id,staticClass:"article"},[e("router-link",{attrs:{to:{name:"topic",params:{id:a.id,name:a.author.loginname}}}},[e("div",{staticClass:"article-base-info"},[e("span",{class:[a.top||a.good?"highlight-tab":"tab"]},[t._v(t._s(t._f("formatTab")(a)))]),e("span",{staticClass:"title"},[t._v(t._s(a.title))])]),e("div",{staticClass:"article-user-info"},[e("Avatar",{attrs:{"avatar-url":a.author.avatar_url,loginname:a.author.loginname}}),e("span",{staticClass:"author-name"},[t._v(t._s(a.author.loginname))]),e("span",{staticClass:"create-at"},[t._v("创建于")]),e("span",{staticClass:"create-date"},[t._v(t._s(t._f("formatDate")(a.create_at)))])],1),e("div",{staticClass:"state-info"},[e("span",{staticClass:"last-reply"},[t._v("最后回复："+t._s(t._f("formatDate")(a.last_reply_at)))]),e("span",{staticClass:"replies-and-views"},[e("span",{staticClass:"replies"},[t._v(t._s(a.reply_count)+" 回复")]),e("span",{staticClass:"views"},[t._v(t._s(a.visit_count)+" 阅读量")])])])])],1)}),0),e("Pagination",{on:{"page-update":t.onPageUpdate}})],1):t._e()},T=[],j=e("795b"),L=e.n(j),O=e("bc3a"),E=e.n(O);function P(t,a){return new L.a(function(e,n){E.a.get(t,{params:a}).then(function(t){t.data.success?e(t.data):n(t.data)}).catch(function(t){n(t)})})}var U=P,M="https://cnodejs.org/api/v1",W={articleList:M+"/topics",topic:M+"/topic",user:M+"/user"},I=function(t){var a=null;cancelAnimationFrame(a),a=requestAnimationFrame(function e(){var n=document.documentElement.scrollTop;n>0?(document.documentElement.scrollTop-=t,a=requestAnimationFrame(e)):cancelAnimationFrame(a)})},B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("router-link",{attrs:{to:{name:"user",params:{loginname:t.loginname}}}},[e("img",{attrs:{alt:t.loginname,src:t.avatarUrl,title:t.loginname}})])},H=[],R={name:"Avatar",props:["avatar-url","loginname"]},Y=R,F=(e("863b"),Object(d["a"])(Y,B,H,!1,null,"944f405a",null)),q=F.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"prev-next"},[e("a",{attrs:{id:"prev"},on:{click:function(a){return a.preventDefault(),t.onItemClick(a)}}},[t._v("上一页")])]),t._l(t.pages,function(a){return e("li",{key:a,staticClass:"num"},[e("a",{class:a===t.current?"highlight":"",on:{click:function(e){return e.preventDefault(),t.onItemClick(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"prev-next"},[e("a",{attrs:{id:"next"},on:{click:function(a){return a.preventDefault(),t.onItemClick(a)}}},[t._v("下一页")])])],2)])},J=[],G={name:"Pagination",data:function(){return{current:1}},computed:{pages:function(){var t=this.current;return t<=5?[1,2,3,4,5,6,7,8,"..."]:[1,"..",t-2,t-1,t,t+1,t+2,t+3,"..."]}},methods:{onItemClick:function(t){if("number"!==typeof t&&"string"!==typeof t)"next"===t.currentTarget.id?this.current++:!(this.current>1)||this.current--;else{if("..."===t||".."===t||t===this.current)return;this.current=t}this.$emit("page-update",this.current)}}},K=G,Q=(e("9f3b"),Object(d["a"])(K,z,J,!1,null,"7a68c9a1",null)),V=Q.exports,X=e("5a0c"),Z=e.n(X),tt=(e("a471"),e("4208")),at=e.n(tt);Z.a.locale("zh-cn"),Z.a.extend(at.a);var et={filters:{formatToDuration:function(t){return Z()(new Date(t)).fromNow()},formatDate:function(t){return Z()(new Date(t)).format("YYYY年MM月DD日")},formatTab:function(t){return!0===t.good?"精华":!0===t.top?"置顶":"ask"===t.tab?"问答":"share"===t.tab?"分享":"job"===t.tab?"招聘":"dev"===t.tab?"测试":"其他"}}},nt={name:"ArticleList",data:function(){return{articleList:null,currentPage:1,currentTab:this.$route.params.tab?this.$route.params.tab:"all"}},components:{Avatar:q,Pagination:V},methods:{getArticleList:function(){var t=this;U(W.articleList,{limit:20,page:this.currentPage,tab:this.currentTab}).then(function(a){t.articleList=a.data})},onPageUpdate:function(t){this.currentPage=t,this.getArticleList(),I(120)}},created:function(){this.getArticleList()},watch:{"$route.params.tab":function(t,a){t&&(this.currentTab=t,this.getArticleList(),I(100))}},mixins:[et]},st=nt,it=(e("5a96"),Object(d["a"])(st,A,T,!1,null,"48455b8f",null)),rt=it.exports,ct={name:"Home",components:{ArticleList:rt}},ot=ct,lt=Object(d["a"])(ot,S,$,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"topic"},[e("main",[e("Article",{staticClass:"article",attrs:{data:t.topicData}}),e("ReplyList",{staticClass:"reply-list",attrs:{data:t.replyData}})],1),e("UserSideBar",{staticClass:"side-bar"})],1)},pt=[],vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",[t.data?e("div",{staticClass:"article-info"},[e("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),e("div",{staticClass:"other"},[e("span",{class:[t.data.top||t.data.good?"highlight-tab":"tab"]},[t._v(t._s(t._f("formatTab")(t.data)))]),e("span",{staticClass:"author-name"},[t._v(t._s(t.data.author.loginname))]),e("span",{staticClass:"create-at"},[t._v("发布于 "+t._s(t._f("formatDate")(t.data.create_at)))]),e("span",{staticClass:"views"},[t._v("阅读量："+t._s(t.data.visit_count))])])]):t._e(),t.data?e("div",{staticClass:"article-content markdown-body",attrs:{id:"content"},domProps:{innerHTML:t._s(t.data.content)}}):t._e()])},mt=[],ft={name:"Article",props:["data"],components:{Avatar:q},mixins:[et]},ht=ft,_t=(e("0b6f"),Object(d["a"])(ht,vt,mt,!1,null,"2d88cae2",null)),gt=_t.exports,bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("section",{staticClass:"replies"},[e("div",{staticClass:"sub-header"},[t._v(t._s(t.data.length)+" 回复")]),e("ul",t._l(t.data,function(a,n){return e("li",{key:a.id,staticClass:"reply",class:a.ups.length>=10?"highlight-reply":""},[e("div",{staticClass:"reply-info"},[e("Avatar",{attrs:{"avatar-url":a.author.avatar_url,loginname:a.author.loginname}}),e("span",{staticClass:"name"},[t._v(t._s(a.author.loginname))]),e("span",{staticClass:"floor"},[t._v(t._s(n+1)+"楼")]),e("span",{staticClass:"date"},[t._v(t._s(t._f("formatToDuration")(a.create_at)))]),a.ups.length?e("span",{staticClass:"like"},[e("span",[t._v("👍")]),e("span",[t._v(t._s(a.ups.length))])]):t._e()],1),e("div",{staticClass:"reply-content markdown-body",domProps:{innerHTML:t._s(a.content)}})])}),0)]):t._e()},Ct=[],Dt={name:"ReplyList",props:["data"],components:{Avatar:q},mixins:[et]},wt=Dt,yt=(e("1e9c"),Object(d["a"])(wt,bt,Ct,!1,null,"4461bd96",null)),kt=yt.exports,xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.userData?e("aside",[e("section",[e("div",{staticClass:"sub-header"},[t._v("作者")]),e("div",{staticClass:"user-info"},[e("div",{staticClass:"avatar-and-name"},[e("Avatar",{attrs:{"avatar-url":t.userData.avatar_url,loginname:t.userData.loginname}}),e("span",{staticClass:"name"},[t._v(t._s(t.userData.loginname))])],1),e("div",{staticClass:"score"},[t._v(t._s(t.userData.score)+" 积分")])])]),t.userData.recent_topics.length?e("section",{staticClass:"recent-topics"},[e("div",{staticClass:"sub-header"},[t._v("作者最近创建话题")]),e("ul",t._l(t.recentTopics,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"topic",params:{id:a.id,name:a.author.loginname}}}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))])])],1)}),0)]):t._e(),t.userData.recent_replies.length?e("section",{staticClass:"recent-replies"},[e("div",{staticClass:"sub-header"},[t._v("作者最近回复话题")]),e("ul",t._l(t.recentReplies,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"topic",params:{id:a.id,name:a.author.loginname}}}},[e("span",{staticClass:"title"},[t._v(t._s(a.title))])])],1)}),0)]):t._e()]):t._e()},Nt=[],St={name:"UserSideBar",components:{Avatar:q},data:function(){return{userData:null}},methods:{getUserData:function(){var t=this;U("".concat(W.user,"/").concat(this.$route.params.name)).then(function(a){t.userData=a.data})}},created:function(){this.getUserData()},computed:{recentTopics:function(){return this.userData.recent_topics.slice(0,5)},recentReplies:function(){return this.userData.recent_replies.slice(0,5)}}},$t=St,At=(e("f691"),Object(d["a"])($t,xt,Nt,!1,null,"084264b7",null)),Tt=At.exports,jt={name:"Topic",components:{Article:gt,ReplyList:kt,UserSideBar:Tt},data:function(){return{topicData:null,replyData:null}},methods:{getTopicData:function(){var t=this;U("".concat(W.topic,"/").concat(this.$route.params.id)).then(function(a){t.topicData=a.data,t.replyData=a.data.replies})}},created:function(){this.getTopicData()},watch:{"$route.params.id":function(){this.getTopicData()},"$route.params.name":function(){this.getTopicData()}}},Lt=jt,Ot=(e("789c"),Object(d["a"])(Lt,dt,pt,!1,null,"875b0ce6",null)),Et=Ot.exports,Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.userData?e("div",[e("section",[e("div",{staticClass:"sub-header"},[t._v("主页")]),e("div",{staticClass:"user-info"},[e("div",{staticClass:"avatar-and-name"},[e("img",{attrs:{alt:t.userData.loginname,src:t.userData.avatar_url,title:t.userData.loginname}}),e("span",{staticClass:"name"},[t._v(t._s(t.userData.loginname))])]),e("div",{staticClass:"score"},[t._v(t._s(t.userData.score)+" 积分")]),e("div",{staticClass:"create-date"},[t._v("注册时间 "+t._s(t._f("formatDate")(t.userData.create_at)))])])]),e("section",{staticClass:"recent-topics"},[e("div",{staticClass:"sub-header"},[t._v("最近创建的话题")]),e("ul",t._l(t.userData.recent_topics,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"topic",params:{id:a.id,name:a.author.loginname}}}},[e("Avatar",{attrs:{"avatar-url":a.author.avatar_url,loginname:a.author.loginname}}),e("span",{staticClass:"title"},[t._v(t._s(a.title))]),e("span",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(a.last_reply_at)))])],1)],1)}),0)]),e("section",{staticClass:"recent-replies"},[e("div",{staticClass:"sub-header"},[t._v("最近参与的话题")]),e("ul",t._l(t.userData.recent_replies,function(a){return e("li",{key:a.id},[e("router-link",{attrs:{to:{name:"topic",params:{id:a.id,name:a.author.loginname}}}},[e("Avatar",{attrs:{"avatar-url":a.author.avatar_url,loginname:a.author.loginname}}),e("span",{staticClass:"title"},[t._v(t._s(a.title))]),e("span",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(a.last_reply_at)))])],1)],1)}),0)])]):t._e()},Ut=[],Mt={name:"User",components:{Avatar:q},data:function(){return{userData:null}},methods:{getUserData:function(){var t=this;U("".concat(W.user,"/").concat(this.$route.params.loginname)).then(function(a){t.userData=a.data})}},created:function(){this.getUserData()},watch:{"$route.params.loginname":function(){this.getUserData(),I(40)}},mixins:[et]},Wt=Mt,It=(e("96e0"),Object(d["a"])(Wt,Pt,Ut,!1,null,"eb2dc204",null)),Bt=It.exports;n["a"].use(N["a"]);var Ht=new N["a"]({routes:[{path:"/:tab?",name:"home",component:ut},{path:"/topic/:id&author=:name",name:"topic",component:Et},{path:"/user/:loginname",name:"user",component:Bt}]});n["a"].config.productionTip=!1,new n["a"]({router:Ht,render:function(t){return t(x)}}).$mount("#app")},"5a96":function(t,a,e){"use strict";var n=e("529a"),s=e.n(n);s.a},"5f02":function(t,a,e){},"61ae":function(t,a,e){},"6b71":function(t,a,e){},"6e59":function(t,a,e){},"789c":function(t,a,e){"use strict";var n=e("5f02"),s=e.n(n);s.a},"863b":function(t,a,e){"use strict";var n=e("6e59"),s=e.n(n);s.a},"96e0":function(t,a,e){"use strict";var n=e("41ac"),s=e.n(n);s.a},"9b19":function(t,a,e){t.exports=e.p+"img/logo.0c4b8f39.svg"},"9f3b":function(t,a,e){"use strict";var n=e("bd0b"),s=e.n(n);s.a},bd0b:function(t,a,e){},c719:function(t,a,e){},e30a:function(t,a,e){},eded:function(t,a,e){},f691:function(t,a,e){"use strict";var n=e("c719"),s=e.n(n);s.a}});
//# sourceMappingURL=app.d3165abb.js.map