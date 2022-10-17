"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[6914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"Paginator FAQ"},s="Paginator FAQ",l={unversionedId:"extensions/pages/paginator-faq",id:"extensions/pages/paginator-faq",title:"Paginator FAQ",description:"-   What's the difference between Paginator.send() and Paginator.respond()?",source:"@site/docs/extensions/pages/paginator-faq.mdx",sourceDirName:"extensions/pages",slug:"/extensions/pages/paginator-faq",permalink:"/extensions/pages/paginator-faq",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/extensions/pages/paginator-faq.mdx",tags:[],version:"current",lastUpdatedBy:"BobDotCom",lastUpdatedAt:1648762355,formattedLastUpdatedAt:"Mar 31, 2022",frontMatter:{title:"Paginator FAQ"},sidebar:"defaultSidebar",previous:{title:"Paginator Basics",permalink:"/extensions/pages/paginator-basics"},next:{title:"Tasks",permalink:"/extensions/tasks/"}},u={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paginator-faq"},"Paginator FAQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"What's the difference between ",(0,i.kt)("inlineCode",{parentName:"strong"},"Paginator.send()")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"Paginator.respond()"),"?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.send()")," is used to send a channel message (DMChannel or TextChannel) with the paginator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.respond()")," is used to send an interaction response (or followup) message with the paginator."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How can the bot send a paginator to a different destination than where it was invoked?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," parameter in ",(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.send()")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.respond()"),"."),(0,i.kt)("li",{parentName:"ul"},"You can also set the ",(0,i.kt)("inlineCode",{parentName:"li"},"target_message")," parameter to control what's shown as a response where the paginator was originally invoked.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.respond()"),", this parameter is required if ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," is set, as an interaction requires being responded to."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How can I change the paginator's behavior without re-creating and re-sending it?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.update()")," method."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How can I make the bot actually do something with the contents of a page?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the (upcoming) ",(0,i.kt)("inlineCode",{parentName:"li"},"Paginator.page_action()")," method.  ")))))}m.isMDXComponent=!0}}]);