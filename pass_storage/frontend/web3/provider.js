import Web3 from "web3"
import truffle_contract from "truffle-contract"

const provider = () => {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider
  } else {
    console.error("You need to install MetaMask for this app to work!")
  }
}

export const getInstance = artifact => {
  const truffle_contract_object = truffle_contract(artifact)
  truffle_contract_object.setProvider(provider())
  return truffle_contract_object.deployed();
}

export const eth = new Web3(provider()).eth