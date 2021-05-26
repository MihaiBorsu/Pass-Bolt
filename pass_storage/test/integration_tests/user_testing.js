const web3 = require('web3')
const { utils: {hexToString}, } = web3
const { utils: {stringToHex}, } = web3

const UserDataBase = artifacts.require('UserDataBase')
const UserManager = artifacts.require('UserManager')

contract('Users', () => {
    it("creates a user following the normal procedure", async () => {
        const manager = await UserManager.deployed()
        const response = await manager.createUser("mihaiborsu","Mihai","Borsu")
        assert.isOk(response)
    })
    it("tries to create user by skipping the manager, but fails with VM error", async () => {  
        const dataBase = await UserDataBase.deployed()
        const response = await dataBase.createUser("0x3df50e294080d2824eabd22287db603545208fde",stringToHex("mihai.borsu"),stringToHex("Mihai"),stringToHex("Borsu")) //0x8ecfc0523094031ab335b74cce2a7b79
        assert.isOk(response)
    })
    it("tries to retrive user directly but fails", async () => {
        const dataBase = await UserDataBase.deployed()
        const response = await dataBase.profiles.call(1)
        console.log(hexToString(response[1]))
        assert.isOk(response)
    })
    it("can get username", async () => {
        const manager = await UserManager.deployed()
        const response = await manager.getUsername()
        console.log(hexToString(response))
        assert.isOk(response)
    })
    it("can get givenName", async () => {
        const manager = await UserManager.deployed()
        const response = await manager.getGivenName()
        console.log(hexToString(response))
        assert.isOk(response)
    })
    it("can get familyName", async () => {
        const manager = await UserManager.deployed()
        const response = await manager.getFamilyName()
        console.log(hexToString(response))
        assert.isOk(response)
    })
})