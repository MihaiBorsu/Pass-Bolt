pragma solidity ^0.4.23;

import './Owner.sol';

contract DataBaseParent is Owner {
    address public managerAddress;

    modifier onlyManager() {
        require(msg.sender == managerAddress);
        _;
    }

    function setManagerAdress(address _managerAdresss) public onlyOwner { 
        managerAddress = _managerAdresss;
    }
}