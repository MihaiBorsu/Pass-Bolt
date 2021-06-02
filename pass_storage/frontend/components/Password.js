import Link from "next/link"
import Modal from "./Modal"
import SuperpassCheckpoint from "./SuperpassCheckpoint"
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

function CheckSuperpass(passwordHash) {
    let superPass = document.getElementById("superPass")
    // if(superPass && passwordHash){

    //     this.encryptor = new CryptoObj(superPass)
    //     this.passwordHash = passwordHash

    //     this.retrivePassword = function(){
    //         return this.encryptor.decrypt(this.passwordHash)
    //     }
    // }
    // return null
    return superPass
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

export default ({ password }) => { 

    const { passwordHash, passwordUserName, passwordUrl } = password
    console.log("inside password:    ", passwordHash)
    localStorage.setItem("passwordHash",passwordHash)
    return (
        <div className="password">

        <div className="info">

            <div className="top">
                <Link href={`${passwordUrl}`}>
                    <a className="username">
                    Link: {passwordUrl}
                    </a>
                </Link>
            </div>

            <div className="top">
                <p>
                    Username for your password: {passwordUserName}
                </p>
            </div>

            <div>
                <SuperpassCheckpoint />
                    
            </div>

        </div>

        <style jsx>{`
            .password {
            padding: 20px;
            border-bottom: 1px solid rgba(151,151,151,0.17);
            }
            .password:last-child {
            border-bottom: none;
            }
            .info {
            display: inline-block;
            vertical-align: top;
            margin-left: 20px;
            width: calc(100% - 62px);
            }
            .top {
            display: flex;
            }
            a {
            font-size: 17px;
            color: #5D5D65;
            font-weight: 600;
            flex-grow: 1;
            text-decoration: none;
            }
            a:hover {
            text-decoration: underline;
            }
            p {
            font-size: 16px;
            color: #444448;
            line-height: 24px;
            margin-top: 6px;
            }
            h3 {
                padding-bottom: 10px;
            }
            footer {
                text-align: right;
                padding-top: 16px;
            }
            @media (max-width: 400px) {
            .password {
                padding: 14px;
            }
            .password :global(.avatar) {
                width: 34px;
                height: 34px;
            }
            a {
                font-size: 15px;
            }
            p,
            time {
                font-size: 15px;
            }
            }
        `}</style>
        </div>
    )
    
}