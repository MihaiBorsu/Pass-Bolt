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
        string usernameForPass;
        string url;
    }

    uint latestPasswordId = 0;
    
    function createPassword (uint _userId, string _passHash, string usernameForPass, string url) public onlyManager returns(uint){
        latestPasswordId++;

        Passwords[latestPasswordId] = Password(latestPasswordId, _userId, _passHash, usernameForPass, url);
        userPasswordIds[_userId].push(latestPasswordId);
        passwordIds.push(latestPasswordId);

        return latestPasswordId;
    }

    function getPasswordIdsFromUser (uint _userId) view public onlyManager returns(uint[]) { // retrieve all the passwords from a user
        return userPasswordIds[_userId];
    }

    function getUsernameForPassword (uint _userId, uint _passId) view public onlyManager returns(string memory _usernameForPassword) {
        if (_userId == Passwords[_passId].userId){
            _usernameForPassword = Passwords[_passId].usernameForPass;
            return _usernameForPassword;
        }
        _usernameForPassword = "nice try, you cannot get other's people password's usernames";
        return _usernameForPassword;
    }

    function getUrl (uint _userId, uint _passId) view public onlyManager returns(string memory _url) {
        if (_userId == Passwords[_passId].userId){
            _url = Passwords[_passId].url;
            return _url;
        }
        _url = "nice try, you cannot get other's people url's";
        return _url;
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