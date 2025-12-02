const { pronounceSuccessSignature } = require('./superbot-signature');
const config = require('./reussitess-global-config.json');

function runBot(country = "France") {
  if (!config.supportedCountries.includes(country)) {
    console.log("Ce pays n'est pas encore pris en charge.");
    return;
  }
  console.log(`Activation du bot pour : ${country}`);
  console.log(config.excellenceMessage);
  pronounceSuccessSignature();
}

module.exports = { runBot };
