const { Discord, Client, Prefix, Token, HelpMenu, PromoMenu, YouTubeMenu, InstagramMenu, WebMenu, TwitterMenu, CPPPricing, CPricing, PyPricing, DDPricing, VEPricing, WebDevPricing, Cursos } = require("./Modulos/Variables.js")

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
    if(message.channel.id == "910254745975943208" || message.channel.id == "914593976458293258"){
      message.react('👍');
    }
    //Reacciona con :+1: a todos los mensajes de #noticias
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
            if(args == "C++"){
              message.channel.send(CPPPricing)
              break
            }
            if(args == "C"){
              message.channel.send(CPricing)
              break
            }
           if(args == "Python"){
              message.channel.send(PyPricing)
              break
            }
           if(args == "EdicionDeVideo"){
              message.channel.send(VEPricing)
              break
            }
           if(args == "Web"){
              message.channel.send(WebDevPricing)
              break
            }
            if(args == "2D"){
              message.channel.send(DDPricing)
              break
            }
            if(args == "WebDev"){
              message.channel.send(WebDevPricing)
              break
            }
            if(args == "all"){
              message.channel.send(CPPPricing)
              message.channel.send(CPricing)
              message.channel.send(PyPricing)
              message.channel.send(VEPricing)
              message.channel.send(WebDevPricing)
              message.channel.send(DDPricing)
              break
            }
            if(args == "todos"){
              message.channel.send(CPPPricing)
              message.channel.send(CPricing)
              message.channel.send(PyPricing)
              message.channel.send(VEPricing)
              message.channel.send(WebDevPricing)
              message.channel.send(DDPricing)
              break
            }
            if(args == "" || args == null){
              message.reply(Cursos)
              break
            }
            message.reply("Has solicitado un curso que no existe, prueba a escribirlo de nuevo o contacta con el Staff")
            break
            
        case "bug":
            message.channel.send("Woah! Has encontrado un bug, por favor contactame cuanto antes @GlueDevs™ Ltd.#6154")
            break
        
    }

})
Client.login(Token)
