"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[6180],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),l=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||n;return a?i.createElement(m,c(c({ref:t},p),{},{components:a})):i.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>b,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=a(7462),r=(a(7294),a(4137));const n={},c="Tracking Habits",s={unversionedId:"tracking-habits/tracking-habits",id:"tracking-habits/tracking-habits",title:"Tracking Habits",description:"Create a new TrackDailyHabitsView",source:"@site/docs/11-tracking-habits/1-tracking-habits.mdx",sourceDirName:"11-tracking-habits",slug:"/tracking-habits/tracking-habits",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/tracking-habits/tracking-habits",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-device-sdk-app-lab/blob/main/docs/11-tracking-habits/1-tracking-habits.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tracking Habits",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/category/tracking-habits"},next:{title:"Using TrackDailyHabitsView in DaysView",permalink:"/swiftui-atlas-device-sdk-app-lab/docs/tracking-habits/using-it"}},o={},l=[{value:"Create a new TrackDailyHabitsView",id:"create-a-new-trackdailyhabitsview",level:2},{value:"Adjust the Preview",id:"adjust-the-preview",level:2}],p={toc:l},d="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tracking-habits"},"Tracking Habits"),(0,r.kt)("h2",{id:"create-a-new-trackdailyhabitsview"},"Create a new TrackDailyHabitsView"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/TrackDailyHabitsView.swift'",title:"'/UI/TrackDailyHabitsView.swift'"},'import SwiftUI\nimport RealmSwift\n\nstruct TrackDailyHabitsView: View {\n    @ObservedRealmObject var day: Day\n    \n    var body: some View {\n        List {\n            Section {\n                DatePicker(\n                        "Review Date",\n                        selection: $day.date,\n                        displayedComponents: [.date]\n                    )\n                .datePickerStyle(.compact)\n            }\n            Section {\n                ForEach($day.habits) { habit in\n                    HStack {\n                        VStack(alignment: .leading) {\n                            Text(habit.name.wrappedValue)\n                            Text(habit.desc.wrappedValue)\n                        }\n                        Toggle("", isOn: habit.done)\n                    }\n                }\n            }\n        }\n        .scrollContentBackground(.hidden)\n        .navigationTitle("\\(day.date.formatted(date: .numeric, time: .omitted))")\n    }\n}\n')),(0,r.kt)("h2",{id:"adjust-the-preview"},"Adjust the Preview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/TrackDailyHabitsView.swift'",title:"'/UI/TrackDailyHabitsView.swift'"},"struct TrackDailyHabitsView_Previews: PreviewProvider {\n    static var previews: some View {\n        let day = Day.createDayWithHabitsInRealm(realm: realmWithData())\n        \n        NavigationStack {\n            TrackDailyHabitsView(day: day)\n        }\n    }\n}\n")))}b.isMDXComponent=!0}}]);