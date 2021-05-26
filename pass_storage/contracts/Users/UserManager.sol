pragma solidity ^0.4.23;

import '../Helpers/ManagerParent.sol';
import '../Dispatcher.sol';
import './UserDataBase.sol';

contract UserManager is ManagerParent {
    function createUser (string _username, string _givenName, string _familyName) public returns(uint _newUserId) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _dataBase = UserDataBase(_userDataBaseAddress);

        require(_dataBase.addresses(msg.sender) == 0);
        // require(_dataBase.usernames(super.stringToHex32(_username)) == 0);

        return _dataBase.createUser(msg.sender, super.stringToHex32(_username), stringToHex32(_givenName), stringToHex32(_familyName));
    }

    function getUsername () public view returns(bytes32) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        return _userDataBase.getUsername(_userId);
    }

    function getGivenName () public view returns (bytes32) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        return _userDataBase.getGivenName(_userId);
    }

    function getFamilyName() public view returns (bytes32) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        return _userDataBase.getFamilyName(_userId);
    }
} 