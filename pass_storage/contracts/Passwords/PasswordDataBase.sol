pragma solidity ^0.5.10;

import '../Helpers/DataBaseParent.sol';

contract PasswordDataBase is DataBaseParent {
    mapping(uint => Password) public Passwords;
    uint[] public passwordIds;
    mapping(uint => uint[]) public userPasswordIds;

    struct Password{
        uint id;
        uint userId;
        string passHash;
    }

    uint latestPasswordId = 0;
    
    function createPassword (uint _userId, string _passHash) public payable returns(uint){
        latestPasswordId++;

        Passwords[latestPasswordId] = Password(latestPasswordId, _userId, _passHash);
        userPasswordIds[_userId].push(latestPasswordId);
        passwordIds.push(latestPasswordId);

        return latestPasswordId;
    }

    function getPasswordIdsFromUser (uint _userId) view public returns(uint[]) { // retrieve all the passwords from a user
        return userPasswordIds[_userId];
    }
}