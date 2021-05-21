pragma solidity ^0.4.23;

import '../Helpers/ManagerParent.sol';
import '../Dispatcher.sol';
import '../Users/UserDataBase.sol';
import './PasswordDataBase.sol';


contract PasswordManager is ManagerParent {
    function createPassword (string _passHash) public  returns(uint) {
        Dispatcher _dipatcher = Dispatcher(dispatcherAddress);

        address _userDataBaseAddress = _dipatcher.getAddress("UserDataBase");
        UserDataBase _userDataBase = UserDataBase(_userDataBaseAddress);
        uint _userId = _userDataBase.addresses(msg.sender);

        require(_userId != 0);

        address _passwordDataBaseAddress = _dipatcher.getAddress("PasswordDataBase");
        PasswordDataBase _passwordDataBase = PasswordDataBase(_passwordDataBaseAddress);

        return _passwordDataBase.createPassword(_userId, _passHash);
    }
}