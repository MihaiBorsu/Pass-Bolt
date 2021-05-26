import { eth, getInstance } from './provider'
import UserManager from './artifacts/UserManager.json'
import UserDataBase from './artifacts/UserDataBase.json'
import Web3 from "web3"

export const getUserLoggedIn = async () => {
    const addrs = await eth.getAccounts()

    if (addrs === 0 || addrs.length === 0 )
        return null
    
        
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

export const getUser = async () => {
    // const dataBase = await getInstance(UserDataBase)
    // const user_profile = await dataBase.profiles.call(id) 
    
    // // to be modified to call the getter in userManager, 
    // // to implement getter in user manager, 
    // // to make profiles private after this and retsst contracts

    // return user_profile
    return "getUser not implemented yet"
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
    // return "createUser not implemente yet"
}