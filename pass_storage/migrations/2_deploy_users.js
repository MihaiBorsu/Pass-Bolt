const UserDataBase = artifacts.require("UserDataBase");

module.exports = function (deployer) {
  deployer.deploy(UserDataBase);

};
