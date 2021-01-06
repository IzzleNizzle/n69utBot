const { token } = require('../config.json')
const Discord = require('discord.js')
const { ping } = require('./ping')

// Create an instance of a Discord client
const client = new Discord.Client()

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!')
})

// Create event listeners for messages
ping(client)

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(token)