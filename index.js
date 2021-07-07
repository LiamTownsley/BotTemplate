require('dotenv').config();

const { Client, Collection } = require('discord.js');
const client = new Client();
client.commands = new Collection();

const { readdirSync } = require('fs');

const commands = readdirSync('./commands').filter(files => files.endsWith('.js'));
for (const file of commands) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

readdirSync('./events/').forEach(event => {
    client.on(event.split('.')[0], require(`./events/${event}`).bind(null, client));
});

require('./modules/database').setup();

client.login();