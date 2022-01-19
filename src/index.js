require("dotenv").config()
const {Client, Intents} = require("discord.js")
const axios = require("Axios")
const client = new Client({intents: []})

client.once("ready", () => {
    console.log("Bereit")
    client.user.setActivity({name: "Auf Den Besten RP Server Hust ECOV", type:"PLAYING"})
})


client.login(process.env.DISCORD_BOT_TOKEN)

run = async (message) => {
    axios.get("https://api.altstats.net/api/v1/server/330")
    .then((res) => {
        console.log('RES:', res)
    })
    .catch((err) =>{
      console.error('ERR:', err)
    })

}