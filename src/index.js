const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log("bot is ready");
});

client.on("messageCreate", (message) => {
  console.log("message sent");
});

client.login(config.token);
