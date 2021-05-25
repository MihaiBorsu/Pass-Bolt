import { eth, getInstance } from './provider'
import UserManager from './artifacts/UserManager.json'
import UserDataBase from './artifacts/UserDataBase.json'

export const getUser = async () => {
    // const dataBase = await getInstance(UserDataBase)
    // const user_profile = await dataBase.profiles.call(id) 
    
    // // to be modified to call the getter in userManager, 
    // // to implement getter in user manager, 
    // // to make profiles private after this and retsst contracts

    // return user_profile
    return "getUser not implemented yet"
}

export const createUser = async (username) => {
    const manager = await getInstance(UserManager)
    try {
        await ethereum.enable()
        const wallets = eth.getAccounts() // get the whole 10 wtherium accounts with 100 fake eth on each on development network
        const response = await manager.createUser(
                username,
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