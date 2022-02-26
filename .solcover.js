const shell = require("shelljs");

module.exports = {
  istanbulReporter: ["html", "text"],
  providerOptions: {
    mnemonic: process.env.MNEMONIC,
  },
};
