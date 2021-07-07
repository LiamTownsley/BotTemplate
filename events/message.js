const { MessageEmbed } = require('discord.js');
const { getPrefix } = require('../modules/database');

module.exports = (client, message) => {
    try {
        const prefix = getPrefix(message.guild.id);
        if (message.channel.type !== 'text') return;
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        if (!command) return;

        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
    }
};