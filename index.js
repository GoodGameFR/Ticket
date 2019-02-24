const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setGame("Besoin d'aide ? | +new");
    console.log("Le bot pour les ticket est maintenant en ligne !");
});

bot.login("NTQ4NDU5ODY0MDQ5OTc1MzAx.D1Fovg.eVyftwK1WBuB6aQoze_aBKxR03E")


bot.on('message', message => {
    if (message.content === prefix + "new"){
        var embed = new Discord.RichEmbed()
            .setTitle(`**Bonjour ${message.author.username} !**`)
            .setDescription("Une personne de notre staff va vous repondre dans quelques instant ! Veuillez patientez.")
            .setColor("0xDF0101")
            .setFooter("Aujourd'hui | En Attente...")
        message.channel.sendEmbed(embed);
        console.log("Commande +new effectué en attente !");
        message.guild.channels.find("name", "discussion-staff").send(`**${message.author.username}** _a besoin d'aide !_`);
    }

    if (message.content === prefix + "annule"){
        var embed = new Discord.RichEmbed()
            .setTitle(`**Bonjour ${message.author.username} !**`)
            .setDescription("Voulez-vous vraiment annuler le ticket ?")
            .setColor("0xDF0101")
            .setFooter("oui | non")
        message.channel.sendEmbed(embed);
        console.log("Commande +annule effectué avec succès !");
        message.guild.channels.find("name", "discussion-staff").send(`**${message.author.username}** _demande d'annulation !_`);
    }

    if (message.content === "oui"){
        var embed = new Discord.RichEmbed()
            .setTitle("**Ticket annulé**")
            .setDescription(`${message.author.username} Votre ticket a bien été annulé avec succès !`)
            .setColor("0xDF0101")
            .setFooter("Ticket | Annulé")
        message.channel.sendEmbed(embed);
        console.log("Commande +annule effectué avec succès");
        message.guild.channels.find("name", "discussion-staff").send(`**${message.author.username}** _à annulé son ticket !_`);
    }
});