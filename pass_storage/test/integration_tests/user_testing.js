// const { assert } = require('console')
const web3 = require('web3')
const { utils: {stringToHex}, } = web3

const UserDataBase = artifacts.require('UserDataBase')
const UserManager = artifacts.require('UserManager')

contract('Users', () => {
    it("can create a user following the normal procedure", async () => {
        const manager = await UserManager.deployed()
        const response = await manager.createUser("mihaiborsu","Mihai","Borsu")
        console.log(response) 
        assert.isOk(response)
    })
    it("can create a user by skipping the manager", async () => {
        const dataBase = await UserDataBase.deployed()
        const response = await dataBase.createUser("0x3df50e294080d2824eabd22287db603545208fde","0x8ecfc0523094031ab335b74cce2a7b81","0x8ecfc0523094031ab335b74cce2a7b80","0x8ecfc0523094031ab335b74cce2a7b79")
        assert.isOk(response)
    })
})