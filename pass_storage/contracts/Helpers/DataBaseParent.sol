pragma solidity ^0.4.19;

import './Owner.sol';

contract DataBaseParent is Owner {
    address public managerAddress;

    modifier onlyManager() {
        require(msg.sender == managerAddress);
        _;
    }

    function setmanagerAdress(address _managerAdresss) public onlyManager {
        managerAddress = _managerAdresss;
    }
}