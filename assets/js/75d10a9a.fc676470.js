"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[4619],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={},l="Habit model class",o={unversionedId:"create-models/habit",id:"create-models/habit",title:"Habit model class",description:"This represents one Habit, like Walking, Journaling, Meditating, etc.",source:"@site/docs/4-create-models/1-habit.mdx",sourceDirName:"4-create-models",slug:"/create-models/habit",permalink:"/swiftui-realm-app-workshop/docs/create-models/habit",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-realm-app-workshop/blob/main/docs/4-create-models/1-habit.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Models",permalink:"/swiftui-realm-app-workshop/docs/category/create-models"},next:{title:"Habits model class",permalink:"/swiftui-realm-app-workshop/docs/create-models/habits"}},s={},c=[{value:"Complete listing",id:"complete-listing",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"habit-model-class"},"Habit model class"),(0,a.kt)("p",null,"This represents one Habit, like Walking, Journaling, Meditating, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Model")," group (right click in the file navigator and select ",(0,a.kt)("inlineCode",{parentName:"li"},"New Group"),")"),(0,a.kt)("li",{parentName:"ul"},"create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Habit")," model class",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"add ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"desc")," properties (as ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),") and ",(0,a.kt)("inlineCode",{parentName:"li"},"done")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"Bool"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/Model/Habit.swift'",title:"'/Model/Habit.swift'"},'import RealmSwift\n\nclass Habit: Object {\n    @Persisted(primaryKey: true) var _id: ObjectId\n    \n    @Persisted var name = ""\n    @Persisted var desc = ""\n    @Persisted var done = false\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"let's add a ",(0,a.kt)("inlineCode",{parentName:"li"},"convenience")," init")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/Model/Habit.swift'",title:"'/Model/Habit.swift'"},'convenience init(name: String = "", desc: String = "", done: Bool = false) {\n    self.init()\n    self.name = name\n    self.desc = desc\n    self.done = done\n}\n')),(0,a.kt)("h2",{id:"complete-listing"},"Complete listing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/Model/Habit.swift'",title:"'/Model/Habit.swift'"},'import RealmSwift\n\nclass Habit: Object {\n    @Persisted(primaryKey: true) var _id: ObjectId\n\n    @Persisted var name = ""\n    @Persisted var desc = ""\n    @Persisted var done = false\n\n    convenience init(name: String, desc: String, done: Bool) {\n        self.init()\n        self.name = name\n        self.desc = desc\n        self.done = done\n    }\n}\n')))}m.isMDXComponent=!0}}]);