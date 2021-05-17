const PasswordManager = artifacts.require("PasswordManager");
const PasswordDataBase = artifacts.require("PasswordDataBase");
const Dispatcher = artifacts.require('Dispatcher')

module.exports = (deployer) => {
    deployer.deploy(PasswordManager)
    .then(() => {
        return PasswordManager.deployed()
    })
    .then(passwordMngr => {
        passwordMngr.setDispatcherAddress(Dispatcher.address)
        return Promise.all([
            Dispatcher.deployed(),
            PasswordDataBase.deployed(),
        ])
    })
    .then(([dispatcher, database]) => {
        return Promise.all([
            dispatcher.setAddress("PasswordManager", PasswordManager.address),
            database.setManagerAdress(PasswordManager.address),
        ])
    })
}