const { discord, client, Prefix, Token, HelpMenu, PromoMenu, YouTubeMenu, InstagramMenu, WebMenu, TwitterMenu, CPPPricing, CPricing, PyPricing, DDPricing, VEPricing, WebDevPricing, Cursos } = require("./Modulos/Variables.js")

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("BlueBot funcionando con host en Replit \n Version: Alpha 1");   
  res.end(); 
}).listen(8082);

client.on('ready', () => {
    console.log('La instancia de Slash Commands esta viva!!!');

        client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "help",
            description: "Te muestra el menú de ayuda con todos los commandos y opciones"
        }
    });

    
    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "promo",
            description: "Te muestra las redes y donde informarte del Proyecto"
        }
    });

    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "web",
            description: "Enlace a la página web actual del proyecto!"
        }
    });

    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "twtr",
            description: "Cuenta de Twitter de Gasware Programming"
        }
    });

    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "ig",
            description: "Cuenta de Instagram de Gasware Programming"
        }
    });
    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "youtube",
            description: "Canal de Youtube de Gasware Programming"
        }
    }); 

    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "bug",
            description: "Has encontrado un Bug o error! Usa este comando para reportarlo y lo leeremos cuanto antes para arreglarlo!"
        }
    });

    
    client.api.applications(client.user.id).guilds('826004185303875585').commands.post({
        data: {
            name: "price",
            description: "Utiliza este comando para ver los precios de los cursos",

            options: [
                {
                    name: "curso",
                    description: "Content of the embed",
                    type: 3,
                    required: false
                }
            ]
        }
    });

    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if(command == 'promo') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, PromoMenu)
                }
            });
        }

                if(command == 'twtr') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, TwitterMenu)
                }
            });
        }

                if(command == 'ig') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, InstagramMenu)
                }
            });
        }

                if(command == 'youtube') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, YouTubeMenu)
                }
            });
        }

                if(command == 'web') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, WebMenu)
                }
            });
        }

                        if(command == 'help') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, HelpMenu)
                }
            });
        }


                if(command == 'bug') {
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: "Woah! Has encontrado un bug, por favor contactame cuanto antes @GlueDevs™ Ltd.#6154"
                }
            });
        }
        

        if(command == "price") {
            const description = args.find(arg => arg.name.toLowerCase() == "curso").value;
            const embed = new discord.MessageEmbed()
                .setTitle("Echo!")
                .setDescription(description)
                .setAuthor(interaction.member.user.username);
            if(description == "C++"){
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, CPPPricing)
                }
            });
          }else{
            if(description == "C"){
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, CPricing)
                }
            });
            }else{
              if(description == "Python"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, PyPricing)
                 }
                });
              }else{
                if(description == "EdicionDeVideo"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, VEPricing)
                  }
                 });
                }else{
                  if(description == "Web"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, WebDevPricing)
                  }
                 });
                 }else{
                   if(description == "2D"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, DDPricing)
                  }
                 });
                  }else{
                    if(description == "WebDev"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, WebDevPricing)
                  }
                 });
                }else{ 
                if(description == "help"){
                 client.api.interactions(interaction.id, interaction.token).callback.post({
                   data: {
                   type: 4,
                    data: await createAPIMessage(interaction, Cursos)
                  }
                 });
                }
                }
                  } 
                 }
                } 
              }
            }
          }
        }
        //-----------------
    });
});

async function createAPIMessage(interaction, content) {
    const apiMessage = await discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();
    
    return { ...apiMessage.data, files: apiMessage.files };
}

client.login(Token)
