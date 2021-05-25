import React from 'react'
import { getUser, createUser } from '../web3/users'
import { addPassword, getPassword } from '../web3/passwords'

export default class IndexPage extends React.Component {
   
    getUser = async () => {
      const response = await getUser()
      console.log(response)
    }

    createUser = async () => {
      const response = await createUser("Mihai")
      console.log(response)
    }

    addPassword = async () => {
      const response = await addPassword()
      console.log(response)
    }
    
    getPassword = async () => {
      const response = await getPassword()
      console.log(response)
    }

    render() {
      return (
        <div>
          <button onClick={this.getUser}>
            Get User with id 1
          </button>
          <button onClick={this.createUser}>
            Create user 
          </button>
          <button onClick={this.addPassword}>
            Add Password
          </button>
          <button onClick={this.getPassword}>
            Get Password
          </button>
        </div>
      )
    }
  }