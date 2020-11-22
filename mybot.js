const Discord = require("discord.js");
const client = new Discord.Client();

client.login("SuperSecretBotToken");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } if (message.content.startsWith("eqilux")) {
      message.channel.send("<@241791032314953728>");
  } if (message.content.startsWith("devs")) {
      message.channel.send("<@241791032314953728> &\n<@680506811031355413>");
});
