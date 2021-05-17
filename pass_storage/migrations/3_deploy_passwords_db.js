const PasswordDataBase = artifacts.require("PasswordDataBase");

module.exports = function (deployer) {
  deployer.deploy(PasswordDataBase);

};
