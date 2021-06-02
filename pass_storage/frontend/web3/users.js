import { eth, getInstance } from './provider'
import UserManager from './artifacts/UserManager.json'
import Web3 from "web3"

const {
    utils: {
      hexToString,
    },
  } = Web3

export const getUserLoggedIn = async () => {
    const addrs = await eth.getAccounts()
    if ( !addrs || !addrs.length )
        return null

    const manager = await getInstance(UserManager)
    try { 
        await ethereum.enable()
        const wallets = await eth.getAccounts()
        const userExists = await manager.checkUserExists(
            { 
                from:  wallets[0]
            }
            )
        if (userExists) {
            const userManager = await getInstance(UserManager)
            await ethereum.enable()
            const wallets = await eth.getAccounts()

            const _username = await userManager.getUsername({
                from: wallets[0]
            })
            const _givenName = await userManager.getGivenName({
                from: wallets[0]
            })
            const _familyName = await userManager.getFamilyName({
                from: wallets[0]
            })
            return {
                username: hexToString(_username),
                givenName: hexToString(_givenName),
                familyName: hexToString(_familyName),
            }
        }
    } catch (err) {
        console.error(err)
    }
}

export const handleNoWallet = async () => {
    const noWallet = ( typeof web3 === "undefined" )

    if (noWallet) 
        return true
    else{
        const addrs = await eth.getAccounts()
    }

    return addrs.length === 0
}

export const createUser = async (username, givenName, familyName) => {
    const manager = await getInstance(UserManager)
    try {
        await ethereum.enable()
        const wallets = await eth.getAccounts()
        const response = await manager.createUser(
                username,
                givenName,
                familyName,
                {
                    from: wallets[0]
                }
            )
        return response
    }
    catch (err) {
        console.error("ERROR: ",err)
    }
}