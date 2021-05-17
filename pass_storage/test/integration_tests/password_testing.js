

const PasswordDataBase = artifacts.require('PasswordDataBase')
const UserManager = artifacts.require('UserManager')
const PasswordManager = artifacts.require('PasswordManager')

contract('Passwords', () => {
    before( async () => {
        const uManager = await UserManager.deployed()
        const response = await uManager.createUser("userInsidePass","Mihai","Borsu")
    });

    it("creates a pass following the normal procedure pass_testing file", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.createPassword("someStringHash")
        assert.isOk(response)
    })
    it("should not create a password pretending to be someone else (or skipping the manager). this test should fail", async () => {
        const pDataBase = await PasswordDataBase.deployed()
        const response = await pDataBase.createPassword(1,"someStringHashAsPassword")
        assert.isOk(response)
    })
    it("owner can retrive it's passwords id's", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.getPasswordIdsFromUser.call()
        console.log("password, id's are")
        console.log(response)
        assert.isOk(response)
    })
    it("owner can retrive it's passwords based on known id", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.getPassword.call(2)
        console.log("password is")
        console.log(response)
        assert.isOk(response)
    })
})