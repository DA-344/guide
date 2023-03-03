"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[5545],{8624:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(7294),o=n(7674),i=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?i:t,r=e.children;return a.createElement(o.qs.Provider,{value:n},a.createElement(o.dZ,null,r))}},6671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(7674),s=n(8624),l=["components"],d={title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide."},p=void 0,m={unversionedId:"more/contributing",id:"more/contributing",title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide.",source:"@site/docs/more/contributing.mdx",sourceDirName:"more",slug:"/more/contributing",permalink:"/more/contributing",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/more/contributing.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1677810329,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Contributing to the Guide",description:"Learn how to contribute to the Pycord Guide."},sidebar:"defaultSidebar",previous:{title:"Community Resources",permalink:"/more/community-resources"},next:{title:"Installing Git",permalink:"/more/git"}},c={},u=[{value:"Info",id:"info",level:2},{value:"Structure",id:"structure",level:2},{value:"Markdown Syntax",id:"markdown-syntax",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Discord Message Components",id:"discord-message-components",level:2},{value:"Slash Commands",id:"slash-commands",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Page Format",id:"page-format",level:2}],k={toc:u};function h(e){var t=e.components,d=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page outlines some of the basic syntax you need to know to contribute to the guide. We recommend you also check out:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/"},"Docusaurus's Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Pycord-Development/guide/blob/master/.github/CONTRIBUTING.md"},"Contributing Rules"))),(0,i.kt)("h2",{id:"info"},"Info"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus v2")," to generate our guide. All the guide pages are generated\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"mdx")," files in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/guide/tree/master/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"docs/"))," directory.\nMDX allows you to use JSX in your markdown content."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"Let's visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/guide/tree/master/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"docs/"))," directory and check its file structure."),(0,i.kt)("p",null,"We can see various folders and a few files in it. Let's talk a bit about the ",(0,i.kt)("inlineCode",{parentName:"p"},"introduction.mdx")," file. At the top, you can see something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Introduction\ndescription: ...\nsidebar_position: 1\n---\n")),(0,i.kt)("p",null,"Most pages have this at the top. The ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," defaults to the file name. Since the titles need to be Capitalized according to need while the file names are lowercased (sometimes, the file names are shorter than the title!), we set a title ourselves."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field is also important. This is the text shown in an embed when the page's link is shared on Discord, Twitter or other websites that support embedded links. Make sure to give a nice an interesting description!"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar_position")," field is pretty self-explanatory. It sets the position of the page in the sidebar. Most files in categories do not need this since they are sorted alphabetically."),(0,i.kt)("h2",{id:"markdown-syntax"},"Markdown Syntax"),(0,i.kt)("p",null,"This page quickly outlines some of the syntax that is used in markdown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx"},"Markdown syntax is pretty easy. You can add **bold**, _italic_ and _underline_ text. You can use ~~strikethrough~~. You can use `inline code blocks`.\n\n    ```python\n    print(\"We can use code blocks like this.\")\n    ```\n\nYou can add [links to other websites](https://pycord.dev). You can add images like this: ![alternate text that describes the image](https://pycord.dev/image.png).\n\n- You can create\n- unordered lists like this\n\n1. Or ordered lists\n2. Like this\n\n3. If you want markdown to automatically detect what number you are on, you can use `1.`\n4. Like this\n\n# Headers\n\n## Go\n\n### Like\n\n#### This\n\nYou can even use HTML in Markdown.\n\n<samp>This text is monospaced</samp>\nUse <br/> to add a break line.\n\n> We can use blockquotes too.\n\n2 ways to create tables:\n\n<table>\n    <tr>\n        <th>Header</th>\n        <th>Header</th>\n    </tr>\n    <tr>\n        <td>Cell</td>\n        <td>Cell</td>\n    </tr>\n</table>\n\n| Header | Header |\n| ------ | ------ |\n| Cell   | Cell   |\n\nHere's a line for us to start with.\n\nThis line is separated from the one above by two new lines, so it will be a _separate paragraph_.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the _same paragraph_.\n\nWe can use emojis too! :joy:\n\n- [x] We can have task lists too\n- [ ] This is a task\n- [ ] That's not done yet\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Preview"),(0,i.kt)("div",{class:"markdown-body"},(0,i.kt)("p",null,"Markdown syntax is pretty easy. You can add ",(0,i.kt)("strong",{parentName:"p"},"bold"),", ",(0,i.kt)("em",{parentName:"p"},"italic")," and ",(0,i.kt)("em",{parentName:"p"},"underline")," text. You can use ",(0,i.kt)("del",{parentName:"p"},"strikethrough"),". You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"inline code blocks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("We can use code blocks like this.")\n')),(0,i.kt)("p",null,"You can add ",(0,i.kt)("a",{parentName:"p",href:"https://pycord.dev"},"links to other websites"),". You can add images by adding ",(0,i.kt)("img",{alt:"alt text",src:n(7931).Z,width:"48",height:"48"}),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can create"),(0,i.kt)("li",{parentName:"ul"},"unordered lists like this")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Or ordered lists")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Like this")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you want markdown to automatically detect what number you are on, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"1."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Like this"),(0,i.kt)("h1",{parentName:"li",id:"headers"},"Headers"),(0,i.kt)("h2",{parentName:"li",id:"go"},"Go"),(0,i.kt)("h3",{parentName:"li",id:"like"},"Like"),(0,i.kt)("h4",{parentName:"li",id:"this"},"This"))),(0,i.kt)("p",null,"You can even use HTML in Markdown."),(0,i.kt)("samp",null,"This text is monospaced"),"Use ",(0,i.kt)("br",null)," to add a break line.",(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We can use blockquotes too.")),(0,i.kt)("p",null,"2 ways to create tables:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Header"),(0,i.kt)("th",null,"Header")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Cell"),(0,i.kt)("td",null,"Cell"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Header"),(0,i.kt)("th",{parentName:"tr",align:null},"Header"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cell"),(0,i.kt)("td",{parentName:"tr",align:null},"Cell")))),(0,i.kt)("p",null,"Here's a line for us to start with."),(0,i.kt)("p",null,"This line is separated from the one above by two new lines, so it will be a ",(0,i.kt)("em",{parentName:"p"},"separate paragraph"),"."),(0,i.kt)("p",null,"This line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the ",(0,i.kt)("em",{parentName:"p"},"same paragraph"),"."),(0,i.kt)("p",null,"We can use emojis too! \ud83d\ude02"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","We can have task lists too"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This is a task"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","That's not done yet")))),(0,i.kt)("h2",{id:"admonitions"},"Admonitions"),(0,i.kt)("p",null,"We can add warnings, notes, etc. with the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::note\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::tip\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::info\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::caution\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::danger\n\nSome **content** with _markdown_ `syntax`.\n\n:::\n\n:::important\n\nRemember that it's `:::important`, not `::: important` with a space!\n\n:::\n\n:::tip Cool Stuff\n\nYou can edit an admonition's title by adding text after the `:::` and name, like this!\n\n:::\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Preview"),(0,i.kt)("div",{class:"markdown-body"},(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),".")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Remember that it's ",(0,i.kt)("inlineCode",{parentName:"p"},":::important"),", not ",(0,i.kt)("inlineCode",{parentName:"p"},"::: important")," with a space!")),(0,i.kt)("admonition",{title:"Cool Stuff",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can edit an admonition's title by adding text after the ",(0,i.kt)("inlineCode",{parentName:"p"},":::")," and name, like this!")))),(0,i.kt)("h2",{id:"discord-message-components"},"Discord Message Components"),(0,i.kt)("p",null,"As most files already have the imports for these, it's not that hard to add them."),(0,i.kt)("p",null,"First, import the necessary components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  DiscordButton,\n  DiscordButtons,\n  DiscordInteraction,\n  DiscordMessage,\n  DiscordMessages,\n} from "discord-message-components/packages/react";\nimport "discord-message-components/packages/react/dist/style.css";\n\nimport DiscordComponent from "../../src/components/DiscordComponent";\n')),(0,i.kt)("p",null,"The div starts like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<DiscordComponent>\n\n</DiscordComponent>\n\n<br/>\n")),(0,i.kt)("p",null,"This is where you list a ",(0,i.kt)("inlineCode",{parentName:"p"},"DiscordMessage"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n    <DiscordMessage profile="bob">\n        Hello!\n    </DiscordMessage>\n</DiscordComponent>\n\n<br/>\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"bob",mdxType:"DiscordMessage"},"Hello!")),(0,i.kt)("br",null),(0,i.kt)("p",null,"It has a pretty straightforward syntax."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<br/>")," to the end of a component to make the content below it look better.")),(0,i.kt)("h3",{id:"slash-commands"},"Slash Commands"),(0,i.kt)("p",null,"To make a message authored by a slash command, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n  <DiscordMessage profile="robocord">\n    <div slot="interactions">\n      <DiscordInteraction profile="bob" command>\n        update\n      </DiscordInteraction>\n    </div>\n    Updated dependencies to the latest version!\n  </DiscordMessage>\n</DiscordComponent>\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"update")),"Updated dependencies to the latest version!")),(0,i.kt)("h3",{id:"buttons"},"Buttons"),(0,i.kt)("p",null,"To make a message with buttons, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<DiscordComponent>\n  <DiscordMessage profile="robocord">\n    <div slot="interactions">\n      <DiscordInteraction profile="bob" command>\n        work\n      </DiscordInteraction>\n    </div>\n    Work Done!\n    <div slot="actions">\n      <DiscordButtons>\n        <DiscordButton type="primary" emoji="\ud83d\udcdd">Work More</DiscordButton>\n        <DiscordButton type="secondary" emoji="\ud83d\udecf\ufe0f">Sleep</DiscordButton>\n      </DiscordButtons>\n    </div>\n  </DiscordMessage>\n</DiscordComponent>\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"work")),"Work Done!",(0,i.kt)("div",{slot:"actions"},(0,i.kt)(r.jr,{mdxType:"DiscordButtons"},(0,i.kt)(r.qD,{type:"primary",emoji:"\ud83d\udcdd",mdxType:"DiscordButton"},"Work More"),(0,i.kt)(r.qD,{type:"secondary",emoji:"\ud83d\udecf\ufe0f",mdxType:"DiscordButton"},"Sleep"))))),(0,i.kt)("h2",{id:"page-format"},"Page Format"),(0,i.kt)("p",null,"There are a few things you need to take care of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure that the spelling and grammar is perfect. We have a GitHub action configured that will warn you about spelling errors when you start a pull request. Make sure to commit your changes accordingly. "),(0,i.kt)("p",{parentName:"li"},"As for the grammar, you should try reading the changes you have done and wait for reviews from others.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A common mistake people make is incorrect header style. People often think that the less the important the topic is, the lower it's heading style should be."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n# Topic\n## Less Important Topic\n## Subtopic\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n# About\n[Introduction]\n\n## Installation\n[Content]\n\n### Windows\n[Content]\n")),(0,i.kt)("p",{parentName:"li"},"That's VERY wrong. Here's the correct example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n[Introduction]\n## Topic\n## Less Important Topic\n### Subtopic\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"[PAGE STARTS]\n[Introduction]\n\n## About\n[More Information]\n\n## Installation\n[Content]\n\n### Windows\n[Content]\n")),(0,i.kt)("p",{parentName:"li"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"---"),"s at the beginning have been skipped here."))))}h.isMDXComponent=!0},7931:function(e,t,n){t.Z=n.p+"assets/images/favicon-c4ddd97c90b2eec4bee85a60f235fa3c.ico"}}]);