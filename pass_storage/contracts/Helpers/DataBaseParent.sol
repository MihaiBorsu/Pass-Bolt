pragma solidity ^0.5.10;

import './Owner.sol';

contract DataBaseParent is Owner {
    address public managerAddress;

    modifier onlyManager() {
        require(msg.sender == managerAddress);
        _;
    }

    function setManagerAdress(address _managerAdresss) public payable { //onlyManager { 
        managerAddress = _managerAdresss;
    }
}