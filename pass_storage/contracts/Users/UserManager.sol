pragma solidity ^0.4.19;

import '../Helpers/ManagerParent.sol';
import '../Dispatcher.sol';
import './UserDataBase.sol';

contract UserManager is ManagerParent {
    function createUser (bytes32 _username, bytes32 _givenName, bytes32 _familyName) public returns(uint _newUserId) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _dataBase = UserDataBase(_userDataBaseAddress);

        require(_dataBase.addresses(msg.sender) == 0);
        require(_dataBase.usernames(_username) == 0);

        return _dataBase.createUser(msg.sender, _username, _givenName, _familyName);
    }
} 