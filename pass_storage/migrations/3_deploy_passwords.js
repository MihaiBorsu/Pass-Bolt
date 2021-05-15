const PasswordsDatabase = artifacts.require("PasswordsDatabase");

module.exports = function (deployer) {
  deployer.deploy(PasswordsDatabase);

};
