const Dispatcher = artifacts.require('Dispatcher')
const UserDataBase = artifacts.require("UserDataBase");
const PasswordDataBase = artifacts.require("PasswordDataBase");

module.exports = (deployer) => {
    deployer.deploy(Dispatcher)
    .then(() => {
        return Dispatcher.deployed()
    })
    .then(dispatcher => {
        return Promise.all([
            dispatcher.setAddress("UserDataBase", UserDataBase.address),
            dispatcher.setAddress("PasswordDataBase", PasswordDataBase.address),
        ])
    })
}
