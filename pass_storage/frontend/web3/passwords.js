import { eth, getInstance } from './provider'
import PasswordManager from './artifacts/PasswordManager.json'
import Web3 from "web3"

const {
    utils: {
      hexToString,
    },
  } = Web3

export const getPassword = async (passId) => {
    try {
        const addrs = await eth.getAccounts()
        if (addrs === 0 || addrs.length === 0 )
            return null

        const passManager = await getInstance(PasswordManager)
        await ethereum.enable()
        const wallets = await eth.getAccounts()

        const passHash = await passManager.getPassword(
            passId,
            {
                from: wallets[0]
            })
        const passUsername = await passManager.getUsernameForPassword(
            passId,
            {
                from: wallets[0]
            })
        const passUrl = await passManager.getUrl(
            passId,
            {
                from: wallets[0]
            })

        return {
            passwordHash: passHash,
            passwordUserName: passUsername,
            passwordUrl: passUrl,
        }
    }
    catch (err) {
        console.error(err)
    }
}

export const getPasswordIdsFromUser = async () => {
    try {
        const addrs = await eth.getAccounts()
        if (addrs === 0 || addrs.length === 0 )
            return null

        const passManager = await getInstance(PasswordManager)
        await ethereum.enable()
        const wallets = await eth.getAccounts()

        const ids = await passManager.getPasswordIdsFromUser({
            from: wallets[0]
        })
        console.log("ids: ",ids)
        return ids
    }
    catch (err) {
        console.log(err)
    }
}

export const createPassword = async (passHash, passUsername, url) => {
    const passManager = await getInstance(PasswordManager)
    try {
        await ethereum.enable()
        const wallets = await eth.getAccounts()
        const response = await passManager.createPassword(
            passHash,
            passUsername,
            url,
            {
                from: wallets[0]
            }
        )

        return response
    }
    catch (err) {
        console.error(err)
    }
}