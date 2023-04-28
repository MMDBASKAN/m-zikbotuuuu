const { ready } = require("libsodium-wrappers");
const MainClient = require("./bott");
const client = new MainClient();

client.connect()
client.on("ready"   , ()  => {
client.user.setActivity("Medya👑");
})
module.exports = client; 