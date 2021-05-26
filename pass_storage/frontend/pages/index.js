import React from 'react'
import { getUser, createUser } from '../web3/users'
import { createPassword, getPassword } from '../web3/passwords'

export default class IndexPage extends React.Component {
   
    getUser = async () => {
      const response = await getUser()
      console.log(response)
    }

    createUser = async () => {
      const response2 = await createUser("mihaiborsu_test2","Mihai_test2","Borsu_test2")
      console.log(response2)
    }

    createPassword = async () => {
      const response3 = await createPassword("SomePassHash")
      console.log(response3)
    }
    
    getPassword = async () => {
      const response4 = await getPassword()
      console.log(response4)
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
          <button onClick={this.createPassword}>
            Add Password
          </button>
          <button onClick={this.getPassword}>
            Get Password
          </button>
        </div>
      )
    }
  }