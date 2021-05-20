pragma solidity ^0.5.10;

import './Helpers/Owner.sol';

contract Dispatcher is Owner {
    mapping (string => address) addresses;

    function setAddress(string _name, address _address) public { //onlyOwner{ 
        addresses[_name] = _address;
    }

    function getAddress(string _name) public view returns (address) {
        return addresses[_name];
    }

    function deleteAddress(string _name) public { //onlyOwneronlyOwner{
        addresses[_name] = address(0);
    }
}