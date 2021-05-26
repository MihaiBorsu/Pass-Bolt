

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
        const response = await pManager.createPassword("someStringHash","mihai.borsu.pass","http://someurl.com")
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
    it("owner can retrive it's passwords based on known pass_id", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.getPassword.call(1)
        console.log("password is")
        console.log(response)
        assert.isOk(response)
    })
    it("owner can retrive it's passwords usernames based on knwn pass_id", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.getUsernameForPassword.call(1)
        console.log("username for password is")
        console.log(response)
        assert.isOk(response)
    })
    it("owner can retrive it's passwords url's based on known pass_id", async () => {
        const pManager = await PasswordManager.deployed()
        const response = await pManager.getUrl.call(1)
        console.log("urlfor password is")
        console.log(response)
        assert.isOk(response)
    })
})