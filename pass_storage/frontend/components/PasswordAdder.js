import React from 'react'
import { createPassword } from "../web3/passwords"
import Button from './Button'
var cryptico = require("cryptico");

function CryptoObj(passPhrase)
{
   this.bits = 1024; 
   this.passPhrase = passPhrase;
   this.rsaKey = cryptico.generateRSAKey(this.passPhrase,this.bits);
   this.rsaPublicKey = cryptico.publicKeyString(this.rsaKey);

   this.encrypt = function(message){
     var result = cryptico.encrypt(message,this.rsaPublicKey);
     return result.cipher;
   };

   this.decrypt = function(message){
     var result = cryptico.decrypt(message, this.rsaKey);
     return result.plaintext;
   };
}

const Input = ({ title, value, onChange }) => (
    <div>
      <label>
        {title}
      </label>
  
      <input value={value} onChange={onChange} />
  
      <style jsx>{`
        div {
          border-bottom: 1px solid rgba(0,0,0,0.13);
          margin: 0 -14px;
          padding: 0 14px;
        }
        div:first-of-type {
          border-top: 1px solid rgba(0,0,0,0.13);
        }
        label {
          font-size: 13px;
          color: rgba(81,81,112,0.66);
          text-transform: uppercase;
          display: block;
          margin-top: 8px;
        }
        input {
          width: 100%;
          box-sizing: border-box;
          font-size: 17px;
          padding-top: 8px;
          padding-bottom: 13px;
          border: none;
        }
        input:focus {
          border: none;
          outline: none;
        }
      `}</style>
    </div>
  )

export default class PasswordModal extends React.Component {
    state = {
      password: "",
        usernameForPass: "",
        url: "",
        superPassword: "",
    }

    updateField = (fieldName, e) => {
        const newState = {}
        newState[fieldName] = e.target.value
    
        this.setState(newState)
    }

    password = async () => {
        const { onClose } = this.props

        const { password, usernameForPass, url, superPassword } = this.state

        const encryptor = new CryptoObj(superPassword)
        const _passHash = encryptor.encrypt(password)

        await createPassword(_passHash, usernameForPass, url)
        alert("Password has been added to the blockchain!")

        onClose()
    }

    render () {
        const { onClose } = this.props
        const { password } = this.state.password
        const { usernameForPass } = this.state.usernameForPass
        const { url } = this.state.url
        const { superPassword } = this.state.superPassword

        const disabled = (password === "" || usernameForPass === "" || url === "" || superPassword === "")

        return (
            <div>
                <h3>
                    Add a new password to the blockchain
                </h3>

                <Input 
                    title="Password" 
                    onChange={e => this.updateField("password", e)} 
                />

                <Input
                    title="Super Password"
                    onChange={e => this.updateField("superPassword", e)}
                />

                <Input 
                    title="Username associated with your password" 
                    onChange={e => this.updateField("usernameForPass", e)} 
                />

                <Input 
                    title="link to website where you have the password" 
                    onChange={e => this.updateField("url", e)} 
                />

                <footer>
                    <Button 
                        onClick={this.password}
                        disabled={disabled}
                    >
                        Add Password
                    </Button>
                </footer>

                <style jsx>{`
                textarea {
                    box-sizing: border-box;
                    margin: 0px;
                    margin-top: 10px;
                    border: 2px solid rgba(107,108,139,0.58);
                    border-radius: 7px;
                    width: 100%;
                    padding: 11px;
                    font-size: 16px;
                }
                textarea:focus {
                    outline: none;
                }
                `}</style>
            </div>
        )
    }
}