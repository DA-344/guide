"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[451],{8624:function(e,n,o){o.d(n,{v:function(){return a}});var t=o(7294),r=o(7674),a=Object.assign({},r.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});n.Z=function(e){var n=e.options,o=void 0===n?a:n,i=e.children;return t.createElement(r.qs.Provider,{value:o},t.createElement(r.dZ,null,i))}},7596:function(e,n,o){o.r(n),o.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return h}});var t=o(7462),r=o(3366),a=(o(7294),o(3905)),i=o(7674),s=o(8624),d=["components"],l={title:"Error Handling",description:"All about handling errors."},c=void 0,m={unversionedId:"popular-topics/error-handling",id:"popular-topics/error-handling",title:"Error Handling",description:"All about handling errors.",source:"@site/docs/popular-topics/error-handling.mdx",sourceDirName:"popular-topics",slug:"/popular-topics/error-handling",permalink:"/popular-topics/error-handling",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/popular-topics/error-handling.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1677810329,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Error Handling",description:"All about handling errors."},sidebar:"defaultSidebar",previous:{title:"Cogs",permalink:"/popular-topics/cogs"},next:{title:"Intents",permalink:"/popular-topics/intents"}},p={},h=[{value:"About",id:"about",level:2},{value:'<span id="basic">Basic Handling</span>',id:"basic-handling",level:2},{value:'<span id="percommand">Per-Command Handling</span>',id:"per-command-handling",level:2},{value:'<span id="percog">Per-Cog Handling</span>',id:"per-cog-handling",level:2},{value:'<span id="global">Global Handling</span>',id:"global-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why does the example in per-cog handling have self at the start of its function signatures?",id:"why-does-the-example-in-per-cog-handling-have-self-at-the-start-of-its-function-signatures",level:4},{value:"How many errors can I handle in a single error handler?",id:"how-many-errors-can-i-handle-in-a-single-error-handler",level:4},{value:"Can I use more than one type of error handler at once?",id:"can-i-use-more-than-one-type-of-error-handler-at-once",level:4},{value:"What&#39;s the difference between slash and prefixed command error handling?",id:"whats-the-difference-between-slash-and-prefixed-command-error-handling",level:4}],u={toc:h};function g(e){var n=e.components,o=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"When using the library, errors are frequently raised due to various reasons. These reasons range from the Discord API\nfailing your bot's request due to missing permissions or an invalid syntax error."),(0,a.kt)("p",null,"Before going into error handling, it's best that you learn the basic ways of handling errors. A good resource is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_try_except.asp"},"W3Schools' Guide to Python Try-Except Statements"))),(0,a.kt)("h2",{id:"basic-handling"},(0,a.kt)("span",{id:"basic"},"Basic Handling")),(0,a.kt)("p",null,"The most basic way to handle errors is to tackle it at the source. This can be done like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./main.py"',title:'"./main.py"'},'# This code requires the `message_content` privileged intent for prefixed commands.\n\nimport asyncio\n\nimport discord\n\nintents = discord.Intents.default()\nintents.message_content = True\n\nbot = discord.Bot(intents=intents)\n\n\n@bot.slash_command(description="Gets some feedback.")\n@discord.option("name", description="Enter your name.")\nasync def feedback(ctx: discord.ApplicationContext, name: str):\n    try:\n        await ctx.respond(f"Hey, {name}! Send your feedback within the next 30 seconds please!")\n\n        def is_author(m: discord.Message):\n            return m.author.id == ctx.author.id\n\n        feedback_message = await bot.wait_for("message", check=is_author, timeout=30.0) \n        await ctx.send(f"Thanks for the feedback!\\nReceived feedback: `{feedback_message.content}`")\n    except asyncio.TimeoutError:\n        await ctx.send("Timed out, please try again!")\n\n\nbot.run("TOKEN")\n')),(0,a.kt)("p",null,"If you respond within 30 seconds, the interaction will look like so:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"dorukyum",command:!0,mdxType:"DiscordInteraction"},"feedback")),"Hey, Dorukyum! Send your feedback within the next 30 seconds please!"),(0,a.kt)(i.kK,{profile:"dorukyum",mdxType:"DiscordMessage"},"Great bot!"),(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Thanks for the feedback!",(0,a.kt)("br",null),"Received feedback: ",(0,a.kt)("code",null,"Great bot!"))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Otherwise, if you don't respond in time, the interaction will go as follows:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"dorukyum",command:!0,mdxType:"DiscordInteraction"},"feedback")),"Hey, Dorukyum! Send your feedback within the next 30 seconds please!"),(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Timed out, please try again!")),(0,a.kt)("br",null),(0,a.kt)("p",null,"This basic method of error handling can be extended to handle\nmany other errors including ones raised directly by py-cord."),(0,a.kt)("h2",{id:"per-command-handling"},(0,a.kt)("span",{id:"percommand"},"Per-Command Handling")),(0,a.kt)("p",null,"This type of error handling allows you to handle errors per each command you have on your bot.\nEach and every command can have it's own error handler made to handle specific errors that each command may raise!"),(0,a.kt)("p",null,"An example of per-command error handling is as follows:"),(0,a.kt)("admonition",{title:"Bridge Commands",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As of writing this guide page, bridge commands do not currently support per-command error handling. "),(0,a.kt)("p",{parentName:"admonition"},"For these types of commands, it is recommended to utilize global error handling\nuntil ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Pycord-Development/pycord/issues/1388"},"the feature")," is added.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./main.py"',title:'"./main.py"'},'import discord\nfrom discord.ext import commands\n\nbot = discord.Bot(owner_id=...)  # Your Discord user ID goes in owner_id\n\n\n@bot.slash_command(description="A private command...")\n@commands.is_owner()  # This decorator will raise commands.NotOwner if the invoking user doesn\'t have the owner_id\nasync def secret(ctx: discord.ApplicationContext):\n    await ctx.respond(f"Hey {ctx.author.name}! This is a secret command!")\n\n\n@secret.error\nasync def on_application_command_error(ctx: discord.ApplicationContext, error: discord.DiscordException):\n    if isinstance(error, commands.NotOwner):\n        await ctx.respond("Sorry, only the bot owner can use this command!")\n    else:\n        raise error  # Here we raise other errors to ensure they aren\'t ignored\n\n\nbot.run("TOKEN")\n')),(0,a.kt)("p",null,"If your ID is registered as the owner ID, you'll get the following:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"dorukyum",command:!0,mdxType:"DiscordInteraction"},"secret")),"Hey Dorukyum! This is a secret command!")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Any other user whose ID doesn't match the bot owner's will get the following:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"secret")),"Sorry, only the bot owner can use this command!")),(0,a.kt)("br",null),(0,a.kt)("p",null,"This local (per-command) error handler can also be used to handle the same types of errors that standard try-except\nstatements can handle. This is done by using the same method as above with the ",(0,a.kt)("inlineCode",{parentName:"p"},"isinstance")," built-in function."),(0,a.kt)("h2",{id:"per-cog-handling"},(0,a.kt)("span",{id:"percog"},"Per-Cog Handling")),(0,a.kt)("p",null,"Adding error handlers per-command can be quite the task in terms of work if you have a lot. If you have happened to\ngroup your commands in cogs, then you're in luck! You can create an error handler that is specific to a cog and\nhandles all errors raised by commands inside that cog."),(0,a.kt)("p",null,"Here's an example of a bot with a cog that implements its own error handling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./cogs/dm.py"',title:'"./cogs/dm.py"'},'# This cog is for DM only commands! Sadly, we only have 1 command here right now...\n\nimport discord\nfrom discord.ext import commands\n\n\nclass DM(commands.Cog):\n    def __init__(self, bot: commands.Bot):\n        self.bot = bot\n\n    @commands.command()\n    @commands.dm_only()  # This decorator will raise commands.PrivateMessageOnly if invoked in a guild context.\n    async def avatar(self, ctx: commands.Context):\n        embed = discord.Embed(\n            title="Avatar", \n            description=f"Here\'s your enlarged avatar, {ctx.author.name}!",\n            color=ctx.author.top_role.color\n        )\n        embed.set_image(url=ctx.author.display_avatar.url)\n        await ctx.send(embed=embed, reference=ctx.message)\n\n    async def cog_command_error(self, ctx: commands.Context, error: commands.CommandError):\n        if isinstance(error, commands.PrivateMessageOnly):\n            await ctx.send("Sorry, you can only use this in private messages!", reference=ctx.message)\n        else:\n            raise error  # Here we raise other errors to ensure they aren\'t ignored\n\n\ndef setup(bot: commands.Bot):\n    bot.add_cog(DM(bot))\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./main.py"',title:'"./main.py"'},'# This code requires the `message_content` privileged intent for prefixed commands.\n\n# This is the main file where we load the DM cog and run the bot.\n\nimport discord\nfrom discord.ext import commands\n\nintents = discord.Intents.default()\nintents.message_content = True \n\nbot = commands.Bot(command_prefix=commands.when_mentioned_or("!"))\nbot.load_extension("cogs.dm")\nbot.run("TOKEN")\n')),(0,a.kt)("p",null,"If you use this command in a DM context, you'll get the following:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"bob",mdxType:"DiscordMessage"},"!avatar"),(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"bob",highlight:!0,mdxType:"DiscordInteraction"},"!avatar")),(0,a.kt)(i._h,{embedTitle:"Avatar",image:"/img/bob.png",borderColor:s.v.profiles.bob.roleColor,mdxType:"DiscordEmbed"},"Here's your enlarged avatar, BobDotCom!"))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Otherwise, if used in a guild context:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"dorukyum",mdxType:"DiscordMessage"},"!avatar"),(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"dorukyum",highlight:!0,mdxType:"DiscordInteraction"},"!avatar")),"Sorry, you can only use this in private messages!")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Per-cog error handling comes in very handy as you can relegate all of your error handling to a single function instead\nof spreading it out across several per-command error handlers or inside the commands themselves."),(0,a.kt)("h2",{id:"global-handling"},(0,a.kt)("span",{id:"global"},"Global Handling")),(0,a.kt)("p",null,"If separating your error handling is not how you would like to handle errors, then global error handling is the way to\ngo. This method of handling allows you to relegate all handling to a single function that resides within your bot\ninstance."),(0,a.kt)("p",null,"A non-subclassed bot would implement this like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="./main.py"',title:'"./main.py"'},'import discord\nfrom discord.ext import commands\n\nbot = discord.Bot()\n\n\n@bot.slash_command(description="Get the bot\'s current latency!")\n@commands.cooldown(1, 30, commands.BucketType.user) \n# ^ This decorator allows one usage of the command every 30 seconds and raises commands.CommandOnCooldown if exceeded\nasync def ping(ctx: discord.ApplicationContext):\n    await ctx.respond(f"Pong! `{int(bot.latency*1000)} ms`.")\n\n\n@bot.event\nasync def on_application_command_error(ctx: discord.ApplicationContext, error: discord.DiscordException):\n    if isinstance(error, commands.CommandOnCooldown):\n        await ctx.respond("This command is currently on cooldown!")\n    else:\n        raise error  # Here we raise other errors to ensure they aren\'t ignored\n\n\nbot.run("TOKEN")\n')),(0,a.kt)("p",null,"If you've subclassed your bot, the ",(0,a.kt)("inlineCode",{parentName:"p"},"on_application_command_error")," event will be placed inside the subclass without a\n",(0,a.kt)("inlineCode",{parentName:"p"},"bot.event")," decorator and ",(0,a.kt)("inlineCode",{parentName:"p"},"bot.slash_command")," will be replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.slash_command"),"."),(0,a.kt)("p",null,"The error handling used above will yield this interaction if the command is used again too quickly:"),(0,a.kt)(s.Z,{mdxType:"DiscordComponent"},(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"ping")),"Pong! ",(0,a.kt)("code",null,"49")," ms."),(0,a.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,a.kt)("div",{slot:"interactions"},(0,a.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"ping")),"This command is currently on cooldown!")),(0,a.kt)("br",null),(0,a.kt)("p",null,"The only issue regarding global error handling is that, if you have a large amount of commands, the global handler may\nstart to get crammed with a lot of code. This is where all the previously mentioned handlers can take their place!"),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h4",{id:"why-does-the-example-in-per-cog-handling-have-self-at-the-start-of-its-function-signatures"},"Why does the example in per-cog handling have self at the start of its function signatures?"),(0,a.kt)("p",null,"This is a feature of classes and allows you to reference the cog object as ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," and get access to the bot object\npassed at initialization through ",(0,a.kt)("inlineCode",{parentName:"p"},"self.bot"),"."),(0,a.kt)("p",null,"If this is new to you, we recommend checking out these helpful resources to learn more about classes and cogs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_classes.asp"},"W3Schools' Guide to Python Classes & Objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./cogs"},"Our Cogs Guide Page"))),(0,a.kt)("h4",{id:"how-many-errors-can-i-handle-in-a-single-error-handler"},"How many errors can I handle in a single error handler?"),(0,a.kt)("p",null,"While all the examples in this guide page only handle one specific error and re-raise all others, all of these\nerror handlers can be extended to catch many errors."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"#basic"},"basic handling")," (i.e. try/except statements) you can do one of two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Explicitly handle the errors you know might get raised and then have a broad ",(0,a.kt)("inlineCode",{parentName:"li"},"except Exception as exc:")," statement\nas a catch-all."),(0,a.kt)("li",{parentName:"ul"},"Catch any and all errors via the catch-all statement mentioned above.")),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"#percommand"},"per-command"),", ",(0,a.kt)("a",{parentName:"p",href:"#percog"},"per-cog"),", and ",(0,a.kt)("a",{parentName:"p",href:"#global"},"global handling"),", you can use elif clauses with the\nbuilt-in isinstance function to catch specific errors. Atop of this, an else clause can be used to catch any other\nerrors you either don't want to handle or want to relegate to a different error handler."),(0,a.kt)("h4",{id:"can-i-use-more-than-one-type-of-error-handler-at-once"},"Can I use more than one type of error handler at once?"),(0,a.kt)("p",null,"Thankfully, all of these different ways of error handling can be mixed together, so you don't have to pick just one!\nFor commands that raise specific errors that no other commands will raise, you can use ",(0,a.kt)("a",{parentName:"p",href:"#percommand"},"per-command"),".\nFor cogs that raise specific errors that no other cogs will raise, use ",(0,a.kt)("a",{parentName:"p",href:"#percog"},"per-cog"),"! Lastly, for errors that\noccur frequently across all commands and cogs, use ",(0,a.kt)("a",{parentName:"p",href:"#global"},"global handling"),"! "),(0,a.kt)("p",null,"However, one important note to remember is that you should always raise the error again in an error handler if it\nisn't handled there! If you don't do this, the error will go ignored and your other handlers won't have a chance to\ndo their work!"),(0,a.kt)("h4",{id:"whats-the-difference-between-slash-and-prefixed-command-error-handling"},"What's the difference between slash and prefixed command error handling?"),(0,a.kt)("p",null,"Although most examples shown here use slash commands, the ",(0,a.kt)("a",{parentName:"p",href:"#percog"},"per-cog handling")," section presents a prefixed\ncommand. The main difference you may notice is the change in command signature. "),(0,a.kt)("p",null,"To make the distinguishing features apparent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slash commands use ",(0,a.kt)("inlineCode",{parentName:"li"},"on_application_command_error(ctx: discord.ApplicationContext, error: discord.DiscordException)"),"\nas presented in the ",(0,a.kt)("a",{parentName:"li",href:"#percommand"},"per-command")," and ",(0,a.kt)("a",{parentName:"li",href:"#global"},"global handling")," examples."),(0,a.kt)("li",{parentName:"ul"},"Prefixed commands use ",(0,a.kt)("inlineCode",{parentName:"li"},"on_command_error(ctx: commands.Context, error: commands.CommandError)")," as presented in the\n",(0,a.kt)("a",{parentName:"li",href:"#percog"},"per-cog handling")," example.")),(0,a.kt)("p",null,"This distinction is made as both types of commands need their own system for handling errors that are specific to\nthemselves."),(0,a.kt)("admonition",{title:"Related Topics",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../interactions/application-commands/slash-commands"},"Slash Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../extensions/commands/prefixed-commands"},"Prefixed Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./cogs"},"Cogs")))))}g.isMDXComponent=!0}}]);