webpackJsonp([3],{166:function(e,t,r){r(257);var n=r(5)(r(222),r(278),"data-v-5184b294",null);e.exports=n.exports},179:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(63),i=r.n(n);t.default={name:"scroller",props:["title","type","items"],components:{Rating:i.a},data:function(){return{}}}},181:function(e,t,r){t=e.exports=r(164)(),t.push([e.i,".scroller[data-v-483d99dc]{padding-top:1rem}.header[data-v-483d99dc]{height:2.6rem;line-height:2.6rem;padding:0 1.6rem}.header a[data-v-483d99dc]{float:right;font-size:1.44rem}.header a[data-v-483d99dc]:last-child{color:#337ab7}.header h2[data-v-483d99dc]{display:inline-block}.content[data-v-483d99dc]{box-sizing:content-box}.content ul[data-v-483d99dc]{padding:.8rem 0}.hasCover[data-v-483d99dc]{overflow-x:auto;white-space:nowrap;text-align:center}.hasCover .title[data-v-483d99dc]{display:block;max-width:100%;margin-top:1rem;line-height:1.6rem;font-size:1.6rem;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.hasCover li[data-v-483d99dc]{display:inline-block;width:10rem;margin-left:1rem}.hasCover li[data-v-483d99dc]:first-child{padding-left:.8rem}.hasCover img[data-v-483d99dc]{height:15rem}.onlyString[data-v-483d99dc]{overflow-x:auto;white-space:nowrap}.onlyString li[data-v-483d99dc]{display:inline-block;margin:0 0 .8rem 1.6rem;font-size:1.6rem;border:.1rem solid;border-radius:.4rem;vertical-align:middle}.onlyString a[data-v-483d99dc]{height:5rem;line-height:5rem;padding:0 2.4rem;letter-spacing:.16rem;overflow:auto;display:block;text-align:center}.onlyString li[data-v-483d99dc]:empty{width:100%;display:block;height:.1rem;border:0;margin:0}","",{version:3,sources:["/Users/lanleilin/Desktop/_code/formGit/joiFrontVue/joiFrontVue/src/components/Scroller.vue"],names:[],mappings:"AACA,2BACE,gBAAkB,CACnB,AACD,yBACE,cAAe,AACf,mBAAoB,AACpB,gBAAkB,CACnB,AACD,2BACI,YAAa,AACb,iBAAmB,CACtB,AACD,sCACM,aAAe,CACpB,AACD,4BACI,oBAAsB,CACzB,AACD,0BACE,sBAAwB,CACzB,AACD,6BACI,eAAkB,CACrB,AACD,2BACE,gBAAiB,AACjB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,kCACI,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,iBAAkB,AAClB,WAAY,AACZ,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,gBAAkB,CACrB,AACD,8BACI,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CACrB,AACD,0CACI,kBAAqB,CACxB,AACD,+BACI,YAAc,CACjB,AACD,6BACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,gCACI,qBAAsB,AACtB,wBAA0B,AAC1B,iBAAkB,AAClB,mBAAqB,AACrB,oBAAsB,AACtB,qBAAuB,CAC1B,AACD,+BACI,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,sBAAwB,AACxB,cAAe,AACf,cAAe,AACf,iBAAmB,CACtB,AACD,sCACI,WAAY,AACZ,cAAe,AACf,aAAe,AACf,SAAU,AACV,QAAU,CACb",file:"Scroller.vue",sourcesContent:["\n.scroller[data-v-483d99dc] {\n  padding-top: 1rem;\n}\n.header[data-v-483d99dc] {\n  height: 2.6rem;\n  line-height: 2.6rem;\n  padding: 0 1.6rem;\n}\n.header a[data-v-483d99dc] {\n    float: right;\n    font-size: 1.44rem;\n}\n.header a[data-v-483d99dc]:last-child {\n      color: #337ab7;\n}\n.header h2[data-v-483d99dc] {\n    display: inline-block;\n}\n.content[data-v-483d99dc] {\n  box-sizing: content-box;\n}\n.content ul[data-v-483d99dc] {\n    padding: 0.8rem 0;\n}\n.hasCover[data-v-483d99dc] {\n  overflow-x: auto;\n  white-space: nowrap;\n  text-align: center;\n}\n.hasCover .title[data-v-483d99dc] {\n    display: block;\n    max-width: 100%;\n    margin-top: 1rem;\n    line-height: 1.6rem;\n    font-size: 1.6rem;\n    color: #111;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-wrap: normal;\n}\n.hasCover li[data-v-483d99dc] {\n    display: inline-block;\n    width: 10rem;\n    margin-left: 1rem;\n}\n.hasCover li[data-v-483d99dc]:first-child {\n    padding-left: 0.8rem;\n}\n.hasCover img[data-v-483d99dc] {\n    height: 15rem;\n}\n.onlyString[data-v-483d99dc] {\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.onlyString li[data-v-483d99dc] {\n    display: inline-block;\n    margin: 0 0 0.8rem 1.6rem;\n    font-size: 1.6rem;\n    border: solid 0.1rem;\n    border-radius: 0.4rem;\n    vertical-align: middle;\n}\n.onlyString a[data-v-483d99dc] {\n    height: 5rem;\n    line-height: 5rem;\n    padding: 0 2.4rem;\n    letter-spacing: 0.16rem;\n    overflow: auto;\n    display: block;\n    text-align: center;\n}\n.onlyString li[data-v-483d99dc]:empty {\n    width: 100%;\n    display: block;\n    height: 0.1rem;\n    border: 0;\n    margin: 0;\n}\n"],sourceRoot:""}])},183:function(e,t,r){var n=r(181);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(165)("23c02592",n,!0)},186:function(e,t,r){r(183);var n=r(5)(r(179),r(188),"data-v-483d99dc",null);e.exports=n.exports},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroller"},[r("div",{staticClass:"header"},[r("h2",[e._v(e._s(e.title))]),e._v(" "),r("a",{attrs:{href:"#"}},[e._v("更多")])]),e._v(" "),r("div",{staticClass:"content"},[e._t("promItem"),e._v(" "),"hasCover"===e.type?r("ul",{staticClass:"hasCover"},e._l(e.items,function(t,n){return r("li",{key:n},[r("router-link",{attrs:{to:"subject/"+t.id,append:""}},[t.images?r("img",{attrs:{src:t.images.large,alt:""}}):e._e(),e._v(" "),r("span",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),t.rating?r("rating",{attrs:{rating:t.rating}}):e._e()],1)],1)})):e._e(),e._v(" "),"onlyString"===e.type?r("ul",{staticClass:"onlyString"},e._l(e.items,function(t,n){return r("li",{key:n,staticStyle:{"border-color":"#FFAC2D"}},[t.line?e._e():r("a",{style:{color:t.color},attrs:{href:t.href}},[e._v(e._s(t.title))])])})):e._e()],2)])},staticRenderFns:[]}},194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"types",data:function(){return{baseUri:"https://m.douban.com/",items:[{title:"经典",href:"movie/classic"},{title:"冷门佳片",href:"movie/underrated"},{title:"Joi高分",href:"movie/doubantop"},{title:"动作",href:"movie/action"},{title:"喜剧",href:"movie/comedy"},{title:"爱情",href:"movie/love"},{title:"悬疑",href:"movie/mystery"},{title:"恐怖",href:"movie/horror"},{title:"科幻",href:"movie/scifi"},{title:"治愈",href:"movie/sweet"},{title:"文艺",href:"movie/artfilm"},{title:"成长",href:"movie/youth"},{title:"动画",href:"movie/animation"},{title:"华语",href:"movie/chinese"},{title:"欧美",href:"movie/western"},{title:"韩国",href:"movie/korean"},{title:"日本",href:"movie/japanese"}]}}}},199:function(e,t,r){t=e.exports=r(164)(),t.push([e.i,".types[data-v-e2efda72]{margin-top:1rem}.types h2[data-v-e2efda72]{height:2.6rem;line-height:2.6rem;padding:0 1.6rem;display:inline-block}.type-list[data-v-e2efda72]{margin:1.6rem 0 0 1.6rem;overflow:hidden}.type-list li[data-v-e2efda72]{float:left;box-sizing:border-box;width:50%;padding-right:1.8rem;height:4.2rem;line-height:4.2rem;font-size:1.6rem;border-top:.1rem solid #eee;border-right:.1rem solid #eee}.type-list li a[data-v-e2efda72]{color:#337ab7}.type-list li[data-v-e2efda72]:nth-child(2n){padding-left:1.8rem}.type-list span[data-v-e2efda72]{color:#ccc;float:right;font-weight:700;display:inline-block;border-right:.1rem solid #ccc;border-bottom:.1rem solid #ccc;width:.8rem;height:.8rem;transform:rotate(-45deg);margin-top:1rem}","",{version:3,sources:["/Users/lanleilin/Desktop/_code/formGit/joiFrontVue/joiFrontVue/src/components/Types.vue"],names:[],mappings:"AACA,wBACE,eAAiB,CAClB,AACD,2BACI,cAAe,AACf,mBAAoB,AACpB,iBAAkB,AAClB,oBAAsB,CACzB,AACD,4BACE,yBAA0B,AAC1B,eAAiB,CAClB,AACD,+BACI,WAAY,AACZ,sBAAuB,AACvB,UAAW,AACX,qBAAsB,AACtB,cAAe,AACf,mBAAoB,AACpB,iBAAkB,AAClB,4BAA8B,AAC9B,6BAAgC,CACnC,AACD,iCACM,aAAe,CACpB,AACD,6CACI,mBAAqB,CACxB,AACD,iCACI,WAAY,AACZ,YAAa,AACb,gBAAkB,AAClB,qBAAsB,AACtB,8BAAgC,AAChC,+BAAiC,AACjC,YAAc,AACd,aAAe,AACf,yBAA0B,AAC1B,eAAiB,CACpB",file:"Types.vue",sourcesContent:["\n.types[data-v-e2efda72] {\n  margin-top: 1rem;\n}\n.types h2[data-v-e2efda72] {\n    height: 2.6rem;\n    line-height: 2.6rem;\n    padding: 0 1.6rem;\n    display: inline-block;\n}\n.type-list[data-v-e2efda72] {\n  margin: 1.6rem 0 0 1.6rem;\n  overflow: hidden;\n}\n.type-list li[data-v-e2efda72] {\n    float: left;\n    box-sizing: border-box;\n    width: 50%;\n    padding-right: 1.8rem;\n    height: 4.2rem;\n    line-height: 4.2rem;\n    font-size: 1.6rem;\n    border-top: solid 0.1rem #eee;\n    border-right: solid 0.1rem #eee;\n}\n.type-list li a[data-v-e2efda72] {\n      color: #337ab7;\n}\n.type-list li[data-v-e2efda72]:nth-child(2n) {\n    padding-left: 1.8rem;\n}\n.type-list span[data-v-e2efda72] {\n    color: #ccc;\n    float: right;\n    font-weight: bold;\n    display: inline-block;\n    border-right: solid 0.1rem #ccc;\n    border-bottom: solid 0.1rem #ccc;\n    width: 0.8rem;\n    height: 0.8rem;\n    transform: rotate(-45deg);\n    margin-top: 1rem;\n}\n"],sourceRoot:""}])},205:function(e,t,r){var n=r(199);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(165)("54137506",n,!0)},213:function(e,t,r){r(205);var n=r(5)(r(194),r(218),"data-v-e2efda72",null);e.exports=n.exports},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"types"},[r("h2",[e._v("分类浏览")]),e._v(" "),r("div",{staticClass:"content"},[r("ul",{staticClass:"type-list"},[e._l(e.items,function(t){return r("li",[r("a",{attrs:{href:e.baseUri+t.href}},[e._v("\n          "+e._s(t.title)),r("span")])])}),e._v(" "),r("li")],2)])])},staticRenderFns:[]}},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(32),i=r.n(n),A=r(19),o=r(186),a=r.n(o),l=r(213),s=r.n(l),d=r(62),c=r.n(d);t.default={name:"book-view",components:{Scroller:a.a,Types:s.a,DownloadApp:c.a},data:function(){return{}},computed:i()({},r.i(A.c)({novel:function(e){return e.book.novel},reality:function(e){return e.book.reality},travel:function(e){return e.book.travel},bookTags:function(e){return e.book.bookTags}})),methods:{getBook:function(){this.$store.dispatch("getBook")}},created:function(){this.getBook()}}},242:function(e,t,r){t=e.exports=r(164)(),t.push([e.i,".promItem[data-v-5184b294]{overflow:hidden;margin:1.6rem 1.8rem .8rem 1.6rem}.corver[data-v-5184b294]{float:left;width:10rem;margin-right:1.5rem}.content[data-v-5184b294]{margin-right:1rem}.name[data-v-5184b294]{font-size:2rem;color:#494949;margin:1rem;max-width:100%;line-height:2.2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.price[data-v-5184b294]{float:right;color:#e76648;font-size:1.6rem;line-height:2.2rem}.info[data-v-5184b294]{font-size:1.3rem;font-weight:300;line-height:1.5;color:#9b9b9b}","",{version:3,sources:["/Users/lanleilin/Desktop/_code/formGit/joiFrontVue/joiFrontVue/src/views/BookView.vue"],names:[],mappings:"AACA,2BACE,gBAAiB,AACjB,iCAAoC,CACrC,AACD,yBACE,WAAY,AACZ,YAAa,AACb,mBAAqB,CACtB,AACD,0BACE,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,eAAgB,AAChB,mBAAoB,AACpB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,wBACE,YAAa,AACb,cAAe,AACf,iBAAkB,AAClB,kBAAoB,CACrB,AACD,uBACE,iBAAkB,AAClB,gBAAiB,AACjB,gBAAiB,AACjB,aAAe,CAChB",file:"BookView.vue",sourcesContent:["\n.promItem[data-v-5184b294] {\r\n  overflow: hidden;\r\n  margin: 1.6rem 1.8rem 0.8rem 1.6rem;\n}\n.corver[data-v-5184b294] {\r\n  float: left;\r\n  width: 10rem;\r\n  margin-right: 1.5rem;\n}\n.content[data-v-5184b294] {\r\n  margin-right: 1rem;\n}\n.name[data-v-5184b294] {\r\n  font-size: 2rem;\r\n  color: #494949;\r\n  margin: 1rem;\r\n  max-width: 100%;\r\n  line-height: 2.2rem;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\n}\n.price[data-v-5184b294] {\r\n  float: right;\r\n  color: #E76648;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\n}\n.info[data-v-5184b294] {\r\n  font-size: 1.3rem;\r\n  font-weight: 300;\r\n  line-height: 1.5;\r\n  color: #9B9B9B;\n}\r\n"],sourceRoot:""}])},257:function(e,t,r){var n=r(242);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(165)("3e1684a8",n,!0)},265:function(e,t,r){e.exports=r.p+"static/img/book_zw.fc645eb.jpg"},278:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movie-view has-header"},[n("scroller",{attrs:{title:"最受关注图书｜虚构类",type:"hasCover",items:e.novel}}),e._v(" "),n("scroller",{attrs:{title:"最受关注图书｜非虚构类",type:"hasCover",items:e.reality}}),e._v(" "),n("scroller",{attrs:{title:"Joi纸书",type:"hasCover",items:e.travel}},[n("div",{staticClass:"promItem",attrs:{slot:"promItem"},slot:"promItem"},[n("img",{staticClass:"corver",attrs:{src:r(265),alt:""}}),e._v(" "),n("div",{staticClass:"content"},[n("span",{staticClass:"price"},[e._v("¥ 68")]),e._v(" "),n("p",{staticClass:"name"},[e._v("造物")]),e._v(" "),n("p",{staticClass:"info"},[e._v("改变世界的万物图典，3000幅图里的发明与冒险")])])])]),e._v(" "),n("scroller",{attrs:{title:"发现好书",type:"onlyString",items:e.bookTags}}),e._v(" "),n("types"),e._v(" "),n("download-app")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.f1b5cde0eea5c6358ca2.js.map