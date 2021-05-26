import { eth, getInstance } from './provider'
import PasswordDataBase from './artifacts/PasswordDataBase.json'
import PasswordManager from './artifacts/PasswordManager.json'

export const getPassword = async () => {
    return "getPassword to be implemented"
}

export const createPassword = async (passHash) => {
    const passManager = getInstance(PasswordManager)
    try {
        await ethereum.enable()
        const wallets = await eth.getAccounts()
        const response = await passManager.createPassword(
        
        )

        return response
    }
    catch (err) {
        console.error(err)
    }
}