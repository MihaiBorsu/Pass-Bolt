const UserManager = artifacts.require("UserManager");
const UserDataBase = artifacts.require("UserDataBase");
const Dispatcher = artifacts.require('Dispatcher')

module.exports = (deployer) => {
    deployer.deploy(UserManager)
    .then(() => {
        return UserManager.deployed()
    })
    .then(userMngr => {
        userMngr.setDispatcherAddress(Dispatcher.address)
        return Promise.all([
            Dispatcher.deployed(),
            UserDataBase.deployed(),
        ])
    })
    .then(([dispatcher, database]) => {
        return Promise.all([
            dispatcher.setAdresss("UserManager", UserManager.address),
            database.setManagerAdress(UserManager.address),
        ])
    })
}