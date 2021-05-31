import React from 'react'

import { withRouter } from 'next/router'
import { Page, Center } from '../components/Layout'
import ListPasswords from "../components/ListPasswords"
import Footer from "../components/Footer"

import { getPasswordIdsFromUser, getPassword } from '../web3/passwords'

export default class PasswordPage extends React.Component {
    state = {
        passwords: [],
    }

    componentDidMount () {
        this.getPasswordsIds()
    }

    getPasswordsIds = async () => {
        const passwordIds = await getPasswordIdsFromUser()

        const passwordsBuffer = []

        for (const id in passwordIds){
            var id2 = id
            id2++  // ugly workarround
            const response4 = await getPassword(id2)
            console.log("id is: ", id2)
            console.log("password is: ", response4)
            passwordsBuffer[id] = response4
          }

        console.log(passwordsBuffer)

        this.setState({
            passwords: passwordsBuffer
        })
    }

    render() {
        const { passwords } = this.state
        console.log(passwords)
        return (
          <Page>
            <Center style={{
              maxWidth: 560, 
            }}> 
            <div>
                <h2>
                Your passwords:
                </h2>
                <ListPasswords passwords={passwords} />
            </div>      
            </Center>
            <Footer solid={true} />
    
            <style jsx>{`
              h2 {
                font-size: 18px;
                font-weight: 600;
                margin-top: 70px;
              }
            `}</style>
    
          </Page>
        )
      }

}
