pragma solidity ^0.4.23;

import '../Helpers/ManagerParent.sol';
import '../Dispatcher.sol';
import '../Users/UserDataBase.sol';
import './PasswordDataBase.sol';


contract PasswordManager is ManagerParent {
    function createPassword (string _passHash, string usernameForPass, string url) public returns(uint) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        return _passwordDataBase.createPassword(_userId, _passHash, usernameForPass, url);
    }

    function getPasswordIdsFromUser () public view returns(uint[]) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        return _passwordDataBase.getPasswordIdsFromUser(_userId);
    }

    function getPassword (uint _passId) public view returns (string memory passHash) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        passHash = _passwordDataBase.getPassword(_userId, _passId);
        return passHash;
    }

    function getUsernameForPassword (uint _passId) public view returns (string memory _usernameForPassword) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        _usernameForPassword = _passwordDataBase.getUsernameForPassword(_userId, _passId);
        return _usernameForPassword;
    }

    function getUrl (uint _passId) public view returns (string memory _url) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        _url = _passwordDataBase.getUrl(_userId, _passId);
        return _url;
    }
}