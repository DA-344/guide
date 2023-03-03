"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[5898],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,u=c["".concat(d,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3856:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),i=a(7294),o=a(3905),l=["components"],d={title:"Threads",description:"Threads with Pycord"},s=void 0,p={unversionedId:"popular-topics/threads",id:"popular-topics/threads",title:"Threads",description:"Threads with Pycord",source:"@site/docs/popular-topics/threads.mdx",sourceDirName:"popular-topics",slug:"/popular-topics/threads",permalink:"/popular-topics/threads",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/popular-topics/threads.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1677810329,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Threads",description:"Threads with Pycord"},sidebar:"defaultSidebar",previous:{title:"Subclassing Bots",permalink:"/popular-topics/subclassing-bots"},next:{title:"More",permalink:"/category/more"}},h={},c=[{value:"Creating a thread",id:"creating-a-thread",level:2},{value:"Creating thread from a message",id:"creating-thread-from-a-message",level:3},{value:"Creating thread in a channel",id:"creating-thread-in-a-channel",level:3},{value:"Deleting Threads",id:"deleting-threads",level:2},{value:"Editing Threads",id:"editing-threads",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why am I getting a <code>Forbidden</code> error when I try to create a thread?",id:"why-am-i-getting-a-forbidden-error-when-i-try-to-create-a-thread",level:3},{value:"Why am I getting an Unknown Message error when I try to create a thread?",id:"why-am-i-getting-an-unknown-message-error-when-i-try-to-create-a-thread",level:3}],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In programming, threads are a way to run multiple processes at the same time. In Discord, threads are\na way to keep multiple conversations going at the same time. Let's take a brief look at how to use threads in Pycord."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Not all the methods and attributes will be covered in this guide, but you can find them in our documentation!\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/models.html#discord.Thread"},"Check it out!"))),(0,o.kt)("h2",{id:"creating-a-thread"},"Creating a thread"),(0,o.kt)("p",null,"With a few simple lines of code, we can create threads in Pycord."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"All public threads need a starting message. This message will start the thread. However, private threads\n(which are unlocked with having your server boosted to Level 2), do not require a starting message.")),(0,o.kt)("h3",{id:"creating-thread-from-a-message"},"Creating thread from a message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Creating a Thread from a Message"',title:'"Creating',a:!0,Thread:!0,from:!0,'Message"':!0},'message = await ctx.send("My Starting Message")\nawait message.create_thread(name="thread name", auto_archive_duration=60)\n')),(0,o.kt)("p",null,"You may also use other ways to create the thread, for example, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"on_message")," events or by commands."),(0,o.kt)("h3",{id:"creating-thread-in-a-channel"},"Creating thread in a channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Creating a Thread from a Channel"',title:'"Creating',a:!0,Thread:!0,from:!0,'Channel"':!0},'channel = bot.get_channel(...) # define this!\nawait channel.create_thread(name="Thread Name", message=None, auto_archive_duration=60, type=None, reason=None)\n')),(0,o.kt)("p",null,"A thread type could be ",(0,o.kt)("inlineCode",{parentName:"p"},"news_thread"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"public_thread"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"private_thread"),". You may use it by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"type=discord.ChannelType.news_thread"),"."),(0,o.kt)("h2",{id:"deleting-threads"},"Deleting Threads"),(0,o.kt)("p",null,"Deleting Threads is simple. You need to get a thread and then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Deleting a Thread"',title:'"Deleting',a:!0,'Thread"':!0},"thread = bot.get_channel(thread_id) # you could use other ways to get a thread\nawait thread.delete()\n")),(0,o.kt)("h2",{id:"editing-threads"},"Editing Threads"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," (str) \u2013 The new name of the thread")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"archived")," (bool) \u2013 Whether to archive the thread or not.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"locked")," (bool) \u2013 Whether to lock the thread or not.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"invitable")," (bool) \u2013 Whether non-moderators can add other non-moderators to this thread. Only available for private threads.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"auto_archive_duration")," (int) \u2013 The new duration in minutes before a thread gets automatically archived for inactivity. Must be one of 60, 1440, 4320, or 10080.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"slowmode_delay")," (int) \u2013 Specifies the slow-mode rate limit for users in the thread, in seconds. A value of 0 disables slow-mode. The maximum value possible is 21600."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Editing a Thread"',title:'"Editing',a:!0,'Thread"':!0},'thread = bot.get_channel(id)\nawait thread.edit(\n    name="New Name",\n    archived=True,\n    locked=True,\n    slowmode_delay=10,\n    auto_archive_duration=60,\n)\n')),(0,o.kt)("p",null,"As you can see, threads are very simple. Once you learn how to use them, it's easy to create whatever you want."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"why-am-i-getting-a-forbidden-error-when-i-try-to-create-a-thread"},"Why am I getting a ",(0,o.kt)("inlineCode",{parentName:"h3"},"Forbidden")," error when I try to create a thread?"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbidden")," error occurs when the bot does not have the correct permissions to create threads."),(0,o.kt)("h3",{id:"why-am-i-getting-an-unknown-message-error-when-i-try-to-create-a-thread"},"Why am I getting an Unknown Message error when I try to create a thread?"),(0,o.kt)("p",null,"Getting an error looking something like ",(0,o.kt)("inlineCode",{parentName:"p"},"discord.ext.commands.errors.CommandInvokeError: Command\nraised an exception: HTTPException: 400 Bad Request (error code: 10008): Unknown Message"),"?"),(0,o.kt)("p",null,"There could be multiple reasons, some of them being:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The message does not exist"),(0,o.kt)("li",{parentName:"ul"},"The message already has a thread"),(0,o.kt)("li",{parentName:"ul"},"The message is in channel x, you are trying to start a thread in channel y."),(0,o.kt)("li",{parentName:"ul"},"The message was deleted.")),(0,o.kt)("admonition",{title:"Related Topics",type:"info"},(0,o.kt)(i.Fragment,null)))}u.isMDXComponent=!0}}]);