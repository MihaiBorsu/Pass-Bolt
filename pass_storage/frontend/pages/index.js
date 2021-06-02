import React from 'react'
import { getUserLoggedIn, createUser } from '../web3/users'
import { createPassword, getPassword, getPasswordIdsFromUser } from '../web3/passwords'
import { Page, Center } from "../components/Layout"
import MetaMaskLogo from "../icons/metamask.svg"
import Button from "../components/Button"
import Modal from "../components/Modal"
import RegistrationForm from "../components/RegistrationForm"
import { getState } from "../components/Header"
import Footer from "../components/Footer"



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

    state = {
      showRegisterModal: false,
    }

    toggleRegisterModal = async () => {
      const { showRegisterModal } = this.state
  
      this.setState({
        showRegisterModal: !showRegisterModal,
      })
    }

    render() {
      const { showRegisterModal } = this.state
      return (
        <Page>
        <Center>
          <h2>
            A <mark>decentralized</mark> secure password storage service
          </h2>

          <div className="right-side">

            <Button style={{
              paddingLeft: 64, 
            }} onClick={this.toggleRegisterModal}>
              <MetaMaskLogo />
              Create your account
            </Button>

            <div className="disclaimer">
              <p>
                MetaMask will open and ask your permision to complete a transaction
              </p>
            </div>
            <div className="disclaimer">
              <p>
                The transaction costs a small amount of ether which will be charged from your metamask wallet
              </p>
            </div>
          </div>
        </Center>

        <style jsx global>{`
          html, body {
            min-height: 100%;
          }
          body {
            background-color: #262740;
            background-image: url("/static/images/background.png");
            background-size: cover;
            background-position: center center;
          }
        `}</style>

        {showRegisterModal && (
          <Modal
            onClose={this.toggleRegisterModal}
          >
            <RegistrationForm />
          </Modal>
        )}

        <Footer solid={true} />

        <style jsx>{`
          h2 {
            font-size: 50px;
            color: #FFFFFF;
            line-height: 78px;
            position: relative;
            text-transform: uppercase;
            max-width: 520px;
            display: inline-block;
            margin-top: 50px;
          }
          mark {
            color: inherit;
            background-color: #F26419;
            padding: 0 7px;
          }
          .right-side {
            float: right;
            position: relative;
            max-width: 320px;
            text-align: center;
            margin-top: 60px;
          }
          .right-side :global(svg) {
            position: absolute;
            margin-left: -46px;
            margin-top: -8px;
          }
          .disclaimer {
            font-size: 20px;
            color: rgba(255,255,255,0.8);
            line-height: 23px;
            font-weight: 400;
            margin-top: 23px;
          }
        `}</style>
      </Page>
      
      );
    }
  }