(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{277:function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));n(58),n(6),n(4),n(9);var e=n(0);function o(t){return e.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(r,n){var e=n.props,data=n.data,o=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),r(e.tag,data,o)}})}},289:function(t,r,n){"use strict";n(58),n(6),n(4),n(9),n(278),n(131);var e=n(277),o=n(40);r.a=Object(e.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,c=r.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var r=l[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),c)}})},413:function(t,r,n){"use strict";n.r(r);var e=n(35),o=n(63),c=n.n(o),l=n(283),d=n(269),f=n(289),v=n(271),component=Object(e.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",{staticClass:"grey lighten-5"},[n("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},t._l(4,(function(r){return n("v-col",{key:r},[n("v-card",{staticClass:"pa-2",attrs:{tile:"",outlined:""}},[t._v("\n        col\n      ")])],1)})),1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},t._l(2,(function(r){return n("v-col",{key:r,attrs:{cols:1===r?8:4}},[n("v-card",{staticClass:"pa-2",attrs:{tile:"",outlined:""}},[t._v("\n        col-"+t._s(1===r?8:4)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{VCard:l.a,VCol:d.a,VContainer:f.a,VRow:v.a})}}]);