const { Discord, Client, Prefix, Token, HelpMenu, PromoMenu, YouTubeMenu, InstagramMenu, WebMenu, TwitterMenu } = require("./Modulos/Variables.js")

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("BlueBot funcionando con host en Replit \n Version: Alpha 1");   
  res.end(); 
}).listen(8080);

Client.on('ready', () => {
    console.log('Estoy listo!')
    Client.user.setPresence({
        status: "online",
        activity: {
            name: "gas!help para comandos - WIP BOT",
            type: "PLAYING"
        }
    })
})

Client.on('message', message => {
    const args = message.content.slice(Prefix.length).trim().split(' ');
    const command = args.shift()
    if (!message.content.startsWith(Prefix) || message.author.bot || message.channel instanceof Discord.DMChannel ) return;

    switch(command.toLowerCase()){
        case "help":
            message.channel.send(HelpMenu)
            break
        case "promo":
            message.channel.send(PromoMenu)
            break
        case "web":
            message.channel.send(WebMenu)
            break
        case "twtr":
            message.channel.send(TwitterMenu)
            break       
        case "ig":
            message.channel.send(InstagramMenu)
            break               
        case "youtube":
            message.channel.send(YouTubeMenu)
            break               
        case "price":
            message.channel.send("Perdon, eso aún no lo sé")
            break
        case "staff":
            message.channel.send("WIP")
            break
        case "bug":
            message.channel.send("Woah! Has encontrado un bug, por favor contactame cuanto antes @GlueDevs™ Ltd.#6154")
            break
    }

})
Client.login(Token)
