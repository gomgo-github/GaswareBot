const { Token } = require("./Token.js")
const discord = require("discord.js");
const client = new discord.Client();
const Prefix = "gas!"

const HelpMenu = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle('Menu de ayuda')
    .setDescription('1. `gas!help`: comando genérico de ayuda, te muestra otros comandos y como usarlos.\n2. `gas!promo`: Te muestra las redes y donde informarte del Proyecto\n3. `gas!web`: Enlace a la página web actual del proyecto!\n4. `gas!twtr`: Cuenta de Twitter de Gasware Programming\n5. `gas!ig`: Cuenta de Instagram de Gasware Programming\n6. `gas!youtube`: Canal de Youtube de Gasware Programming\n7. `gas!price`: Precio actual de los Cursos\n8. `gas!staff`: Usuarios del Staff de Gasware Programming que te pueden ayudar si tienes algun problema\n9. `gas!bug`: Has encontrado un Bug! Usa este comando para reportarlo y lo leeremos cuanto antes para arreglarlo!')
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096');

const PromoMenu = new discord.MessageEmbed()
    .setColor('#ab84ff')
    .setTitle("Redes Sociales")
    .setThumbnail("https://cdn.discordapp.com/avatars/860541010689785886/47a50df05396060a5b6e61cdd5b71d53.png?size=1024")
    .setDescription("Estas son las redes sociales del Proyecto!")
    .addFields(
      {name: 'Twitter', value: 'https://twitter.com/Gasware1', inline: true },
      {name: 'Instagram', value: 'https://www.instagram.com/gaswareprogramming', inline: true },
      {name: 'YouTube', value: 'https://bit.ly/gaswareyt', inline: true },
      {name: 'Web', value: 'http://gasware.nicepage.io', inline: true }
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const YouTubeMenu = new discord.MessageEmbed()
    .setColor('#fc0707')
    .setTitle("Youtube")
    .setThumbnail("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2020%2F05%2F1200px-YouTube_logo.png&f=1&nofb=1")
    .setDescription("En nuestro Canal de YouTube podras encontrar tutoriales para seguir aprendiendo programación, recomendamos activar las notificaciones para saber cuando hay un vídeo nuevo!")
    .addFields(
      {name: 'YouTube', value: 'https://www.youtube.com/channel/UCxgx_mIyPZ2x_iUqFLYlUNw'}
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const TwitterMenu = new discord.MessageEmbed()
    .setColor('#077dfc')
    .setTitle("Twitter")
    .setThumbnail("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogok.org%2Fwp-content%2Fuploads%2F2014%2F08%2FTwitter-logo-bird_logo_2012.png&f=1&nofb=1")
    .setDescription("En Twitter podrás ver todas las noticias sobre el proyecto, Puede que tambien veas alguna oferta exclusiva!")
    .addFields(
      {name: 'Twitter', value: 'https://twitter.com/Gasware1'}
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const InstagramMenu = new discord.MessageEmbed()
    .setColor('#fc07aa')
    .setTitle("Instagram")
    .setThumbnail("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagnavitae.org%2Fwp-content%2Fuploads%2F2016%2F11%2Finstagram-logo-png-transparent-background-800x799.png&f=1&nofb=1")
    .setDescription("En Instagram tendras noticias y avances del Proyecto, si no quieres perdertelas ve a seguirnos!")
    .addFields(
      {name: 'Instagram', value: 'https://instagram.com/gaswareprogramming'}
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const WebMenu = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("Website")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250565764780052.png?size=1024")
    .setDescription("En nuestra web podras ver todos los avances y podras acceder a ellos!")
    .addFields(
      {name: 'Web', value: 'http://gasware.nicepage.io'}
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const CPPPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("C++")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250566091948062.png?size=1024")
    .setDescription("Nuestros cursos de C++ de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n5€/clase \no \n13€/3clases \n(14% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n7€/clase \no \n24€/4clases \n(15% de descuento)', inline: true},
      {name: 'Advanced', value: '8€/clase \no \n38€/6clases\n (21% de descuento)', inline: true},
      {name: 'COMPLETE', value: '70€/13clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const CPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("C")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250566163234867.png?size=1024")
    .setDescription("Nuestros cursos de C de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n5€/clase \no \n13€/3clases \n(14% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n6€/clase \no \n22€/4clases \n(9% de descuento)', inline: true},
      {name: 'COMPLETE', value: '30€/7clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const PyPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("Python")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250565966123128.png?size=1024")
    .setDescription("Nuestros cursos de Python de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n5€/clase \no \n13€/3clases \n(14% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n5€/clase \no \n13€/3clases \n(15% de descuento)', inline: true},
      {name: 'COMPLETE', value: '35€/7clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const DDPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("2D")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250565899010088.png?size=1024")
    .setDescription("Nuestros cursos de 2D de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n4€/clase \no \n10€/3clases \n(17% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n6€/clase \no \n22€/4clases \n(9% de descuento)', inline: true},
      {name: 'Advanced', value: '7€/clase \no \n33€/5clases\n (6% de descuento)', inline: true},
      {name: 'COMPLETE', value: '70€/12clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const VEPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("Edición de Vídeo")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250924658810911.png?size=80&size=1024")
    .setDescription("Nuestros cursos de Edición de Vídeo de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n5€/clase \no \n18€/4clases \n(10% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n7€/clase \no \n20€/3clases \n(5% de descuento)', inline: true},
      {name: 'Advanced', value: '10€/clase \no \n48€/5clases\n (4% de descuento)', inline: true},
      {name: 'COMPLETE', value: '90€/12clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const WebDevPricing = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("WebDev")
    .setThumbnail("https://cdn.discordapp.com/emojis/910250565764780052.png?size=1024")
    .setDescription("Nuestros cursos de WebDev de Nivel Básico a Maestro!")
    .addFields(
      {name: 'BASIC', value: '\n4€/clase \no \n15€/4clases \n(17% de descuento)', inline: true},
      {name: 'MEDIUM', value: '\n6€/clase \no \n40€/7clases \n(5% de descuento)', inline: true},
      {name: 'Advanced', value: '7€/clase \no \n33€/5clases\n (6% de descuento)', inline: true},
      {name: 'COMPLETE', value: '85€/14clases'},
    )
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')

const Cursos = new discord.MessageEmbed()
    .setColor('#000000')
    .setTitle("Precios")
    .setDescription("Para ver los precios tienes que decirme cual quieres ver:\ngas!price C++\ngas!price C\ngas!price Python\ngas!price 2D\n`gas!price EdicionDeVideo`: Sin tildes ni espacios!\ngas!price WebDev")
    .setTimestamp()
    .setFooter('GaswareBot', 'https://cdn.discordapp.com/icons/826004185303875585/df096aa8d63e9290702625b8c16768fb.png?size=4096')
module.exports = { discord, client, Prefix, Token, HelpMenu, PromoMenu, YouTubeMenu, InstagramMenu, WebMenu, TwitterMenu, CPPPricing, CPricing, PyPricing, DDPricing, VEPricing, WebDevPricing, Cursos }