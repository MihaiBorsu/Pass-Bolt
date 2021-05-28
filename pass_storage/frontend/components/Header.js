import React from 'react'
import Link from "next/link"

import { Center } from "./Layout"
import Logotype from "../icons/bps_logo.svg"
import { getUserLoggedIn } from "../web3/users"
import Nav from "./Nav"

export default class Header extends React.Component {

  state = {
    loggedIn: false,
    userInfo: {},
  }

  async componentDidMount() {
    try {
      const userInfo = await getUserLoggedIn()
      this.setState({
        loggedIn: true,
        userInfo,
      })
    }
    catch (err) {
      console.error("Couldn't find user data, maybe you did not create one yet?", err)
    }
  }

  render() {
    return (
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              <Logotype />
            </a>
          </Link>
          <nav>
            {true && (
              <Nav
                userInfo={userInfo}
              />
            )}
          </nav>
        </Center>

        <style jsx>{`
          header {
            background-color: #FFFFFF;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.14);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `}</style>
      </header>
    );
  }
}