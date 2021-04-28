//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract HelloWorld {
    string myName = 'Mihai';

    function getMyName() public view returns(string memory) {
        return myName;
    }

    function changeMyName(string memory _newName) public {
        myName = _newName;
    }
}