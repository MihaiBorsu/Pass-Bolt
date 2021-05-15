pragma solidity ^0.4.19;

import './Owner.sol';

contract ManagerParent is Owner {
    address dispatcherAddress;

    function setDispatcherAddress(address _dispatcherAddress) public onlyOwner {
        dispatcherAddress =_dispatcherAddress;
    }
}