const Dispatcher = artifacts.require('Dispatcher')
const UserDataBase = artifacts.require("UserDataBase");
const PasswordsDatabase = artifacts.require("PasswordsDatabase");

module.export = (deployer) => {
    deployer.deploy(Dispatcher)
    .then(() => {
        return Dispatcher.deployed()
    })
    .then(dispatcher => {
        return Promise.all([
            dispatcher.setAddress("UserDataBase"),
            dispatcher.setAddress("PasswordsDataBase"),
        ])
    })
}
