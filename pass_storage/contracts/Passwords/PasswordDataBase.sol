pragma solidity ^0.4.19;

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
    
    function createPassword (uint _userId, string _passHash) public onlyManager returns(uint){
        latestPasswordId++;

        Passwords[latestPasswordId] = Password(latestPasswordId, _userId, _passHash);
        userPasswordIds[_userId].push(latestPasswordId);
        passwordIds.push(latestPasswordId);

        return latestPasswordId;
    }

    function getPasswordIdsFromUser (uint _userId) view public onlyManager returns(uint[]) { // retrieve all the passwords from a user
        return userPasswordIds[_userId];
    }
}