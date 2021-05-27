import React from 'react'
import { getUserLoggedIn, createUser } from '../web3/users'
import { createPassword, getPassword, getPasswordIdsFromUser } from '../web3/passwords'
import { Page } from "../components/Layout"

export default class IndexPage extends React.Component {
   
      getUserLoggedIn = async () => {
      const response = await getUserLoggedIn()
      console.log(response)
    }

    createUser = async () => {
      const response2 = await createUser("user_name","given_name","family_name")
      console.log(response2)
    }

    createPassword = async () => {
      const response3 = await createPassword("SomePassHash4","pass_uname4","http://someurl.com")
      console.log(response3)
    }
    
    getPassword = async () => {
      const ids = await getPasswordIdsFromUser()
      for (const id in ids){
        var id2 = id
        id2++  // ugly workarround
        const response4 = await getPassword(id2)
        console.log("id is: ", id2)
        console.log("password is: ", response4)
      }
    }

    getPasswordIdsFromUser = async () => {
      const ids = await getPasswordIdsFromUser()
      console.log(ids) 
    }

    render() {
      return (
        <Page>
          <button onClick={this.getUserLoggedIn}>
            Get user details
          </button>
          <button onClick={this.createUser}>
            Create user 
          </button>
          <button onClick={this.createPassword}>
            Add password
          </button>
          <button onClick={this.getPassword}>
            Get passwords
          </button>
          <button onClick={this.getPasswordIdsFromUser}>
            Get passwords id's from logged in user
          </button>
        </Page>
      )
    }
  }