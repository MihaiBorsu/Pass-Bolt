import React from 'react'
import Button from './Button'

var cryptico = require("cryptico");

function CryptoObj(passPhrase) {
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

export default class CheckpointModal extends React.Component {
    state = {
        superPassword: "harcodedeSuperPassword",
        passwordHash: "",
    }

    updateField = (fieldName, e) => {
        const newState = {}
        newState[fieldName] = e.target.value
        this.setState(newState)
    }

    seePassword = () => {
        console.log("from storage got passEncrypted: ",localStorage.getItem("passwordHash"))

        if (this.state.passwordHash === "") {
          const passHash = localStorage.getItem("passwordHash")
          this.state.passwordHash = passHash
        }

        const superPass = this.state.superPassword


        var encryptor = new CryptoObj(superPass)
        console.log("pass encrypted id: ", this.state.passwordHash)
        console.log("superpassword is: ", superPass)
        var password = encryptor.decrypt(this.state.passwordHash)
        
        console.log("password after decription is: ", password)

        if (password) {
          return password
        }
    }

    render () {
        const { onClose } = this.props

        const { superPassword } = this.state.superPassword

        return (
            <div>
                <form onSubmit={this.seePassword()}>
                <Input
                    title="Super Password"
                    onChange={e => this.updateField("superPassword", e)}
                />

                <footer>
                    {/* <Button onClick={this.seePassword()}>
                        See your Password
                    </Button> */}
                    {/* <button onClick={this.seePassword()}></button> */}
                    <div className="top">
                        <p>
                            Your Password is: {this.seePassword()}
                        </p>
                    </div>
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
                </form>
            </div>
        )
    }
}