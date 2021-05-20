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
        assert.isOk(manager)
    })
    it("cannot create a user by skipping the manager", async () => {
        const dataBase = await UserDataBase.deployed()

        try {
            const response = await dataBase.createUser(0x1234,"mihai.borsu@gmail.com","Mihai","Borsu")
            assert.fail();
        }
        catch (err) {
            assert.isOk()
        }
    })
})