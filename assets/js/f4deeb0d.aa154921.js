"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[3903],{4137:(e,t,i)=>{i.d(t,{Zo:()=>w,kt:()=>u});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},w=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,w=o(e,["components","mdxType","originalType","parentName"]),d=p(i),b=n,u=d["".concat(s,".").concat(b)]||d[b]||c[b]||r;return i?a.createElement(u,l(l({ref:t},w),{},{components:i})):a.createElement(u,l({ref:t},w))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},9516:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=i(7462),n=(i(7294),i(4137));const r={},l="Create the HabitDetailView",o={unversionedId:"habit-detail-view/habit-detail-view",id:"habit-detail-view/habit-detail-view",title:"Create the HabitDetailView",description:"This View is used for adding or editing a new Habit",source:"@site/docs/9-habit-detail-view/1-habit-detail-view.mdx",sourceDirName:"9-habit-detail-view",slug:"/habit-detail-view/habit-detail-view",permalink:"/swiftui-realm-app-workshop/docs/habit-detail-view/habit-detail-view",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-realm-app-workshop/blob/main/docs/9-habit-detail-view/1-habit-detail-view.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Habit Detail View",permalink:"/swiftui-realm-app-workshop/docs/category/habit-detail-view"},next:{title:"Adding and Editing Habits",permalink:"/swiftui-realm-app-workshop/docs/habit-detail-view/habit-detail-view-edit"}},s={},p=[{value:"Creating the file",id:"creating-the-file",level:2},{value:"Injecting Habit and Habits",id:"injecting-habit-and-habits",level:2},{value:"Fixing the preview",id:"fixing-the-preview",level:2},{value:"A simple layout",id:"a-simple-layout",level:2}],w={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},w,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-the-habitdetailview"},"Create the HabitDetailView"),(0,n.kt)("p",null,"This View is used for adding or editing a new Habit"),(0,n.kt)("h2",{id:"creating-the-file"},"Creating the file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"we'll create a new SwiftUI View named ",(0,n.kt)("inlineCode",{parentName:"li"},"HabitDetailView.swift")," in the ",(0,n.kt)("inlineCode",{parentName:"li"},"UI")," group ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/HabitDetailView.swift'",title:"'/UI/HabitDetailView.swift'"},'import SwiftUI\n\nstruct HabitDetailView: View {\n    var body: some View {\n        Text("Hello, World!")\n    }\n}\n\nstruct HabitDetailView_Previews: PreviewProvider {\n    static var previews: some View {\n        HabitDetailView()\n    }\n}\n')),(0,n.kt)("h2",{id:"injecting-habit-and-habits"},"Injecting Habit and Habits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"we want to create new habits and to add these new habits to the existing list of habits, so we'll inject two parameters in our view, and add the ",(0,n.kt)("inlineCode",{parentName:"li"},"import RealmSwift")," at the beginning.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/HabitDetailView.swift'",title:"'/UI/HabitDetailView.swift'"},"import RealmSwift\n\nstruct HabitDetailView: View {\n\n    @ObservedRealmObject var habit: Habit = Habit()\n    @ObservedRealmObject var habits: Habits\n    // ...\n}\n")),(0,n.kt)("h2",{id:"fixing-the-preview"},"Fixing the preview"),(0,n.kt)("p",null,"As now we're injecting two parameters in our view, we need to pass these to the Preview:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/HabitDetailView.swift'",title:"'/UI/HabitDetailView.swift'"},'struct HabitDetailView_Previews: PreviewProvider {\n    \n    static var previews: some View {\n        let realm =  realmWithData()\n        \n        return HabitDetailView(habit: Habit(name: "Exercise", desc: "Good for you!"), \n                               habits: realm.objects(Habits.self).first!)\n    }\n}\n')),(0,n.kt)("h2",{id:"a-simple-layout"},"A simple layout"),(0,n.kt)("p",null,"We'll use a couple TextFields that will show any existing data (if the injected ",(0,n.kt)("inlineCode",{parentName:"p"},"Habit")," has it) and they'll allow us to edit those fields."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title='/UI/HabitDetailView.swift'",title:"'/UI/HabitDetailView.swift'"},'List {\n    Section {\n        TextField("Name", text: $habit.name, prompt: Text("Enter habit name"))\n        TextField("Description", text: $habit.desc, prompt: Text("Enter habit description"))\n    }   \n}.navigationTitle("New Habit")\n')))}c.isMDXComponent=!0}}]);