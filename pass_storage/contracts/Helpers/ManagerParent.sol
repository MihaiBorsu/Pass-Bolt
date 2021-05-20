pragma solidity ^0.5.10;

import './Owner.sol';

contract ManagerParent is Owner {
    address dispatcherAddress;

    function setDispatcherAddress(address _dispatcherAddress) public onlyOwner {
        dispatcherAddress =_dispatcherAddress;
    }

    function stringToHex32(string memory asString) internal pure returns ( bytes32 asHex) {
        bytes memory buffer = bytes(asString);
        if ( buffer.length == 0) {
            return 0x0;
        }

        assembly {
            asHex := mload(add(asString,32))
        }

    }
}