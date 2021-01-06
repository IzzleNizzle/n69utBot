const { prefix } = require('../config.json')

const ping = client => {
    // Create an event listener for messages
    client.on('message', async message => {
        // If the message is "ping"
        if (message.content.startsWith(`${prefix} ping`)) {
            // Send "pong" to the same channel
            message.channel.send('use "mac10, dmr, or diamatti for latest meta builds"')
        }
        if (message.content.startsWith(`${prefix} mac10`)) {
            // Send "pong" to the same channel
            message.channel.send('https://cdn.discordapp.com/attachments/721571922726354947/796275928664637450/unknown.png')
        }
        if (message.content.startsWith(`${prefix} dmr`)) {
            // Send "pong" to the same channel
            message.channel.send('https://cdn.discordapp.com/attachments/721571922726354947/796270497062584320/unknown.png')
        }
        if (message.content.startsWith(`${prefix} diamatti`)) {
            // Send "pong" to the same channel
            message.channel.send('https://cdn.discordapp.com/attachments/721571922726354947/796270417375526955/unknown.png')
        }
    })
}

module.exports = { ping }
