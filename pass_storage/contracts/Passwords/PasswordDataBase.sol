pragma solidity ^0.4.23;

import '../Helpers/DataBaseParent.sol';

contract PasswordDataBase is DataBaseParent {
    mapping(uint => Password) private Passwords;
    uint[] private passwordIds;
    mapping(uint => uint[]) private userPasswordIds;

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

    function getPassword (uint _userId, uint _passId) view public onlyManager returns(string memory _passHash) {
        if (_userId == Passwords[_passId].userId){
            _passHash = Passwords[_passId].passHash;
            return _passHash;
        }
        _passHash = "nice try, you cannot get other's people passwords";    
        return _passHash;
    }
}