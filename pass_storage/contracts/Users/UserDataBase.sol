pragma solidity ^0.5.10;

import '../Helpers/DataBaseParent.sol';

contract UserDataBase is DataBaseParent {

    mapping(uint => Profile) public profiles;
    mapping (address => uint) public addresses;
    mapping (bytes32 => uint) public usernames; 

    struct Profile {
        uint id;
        bytes32 username;
        bytes32 givenName;
        bytes32 familyName;
    }

    uint latestUserId = 0;

    function createUser (address _address, bytes32 _username, bytes32 _givenName, bytes32 _familyName) public payable returns(uint _newUserId) {
        latestUserId++;
        profiles[latestUserId] = Profile(
            latestUserId, 
            _username,
            _givenName,
            _familyName
        );

        addresses[_address] = latestUserId;
        usernames[_username] = latestUserId;

        return latestUserId;
    }
}