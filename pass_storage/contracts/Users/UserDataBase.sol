pragma solidity ^0.4.23;

import '../Helpers/DataBaseParent.sol';

contract UserDataBase is DataBaseParent {

    mapping(uint => Profile) private profiles;
    mapping (address => uint) private addresses;
    mapping (bytes32 => uint) private usernames; 

    struct Profile {
        uint id;
        bytes32 username;
        bytes32 givenName;
        bytes32 familyName;
    }

    uint latestUserId = 0;

    function createUser (address _address, bytes32 _username, bytes32 _givenName, bytes32 _familyName) public onlyManager returns(uint _newUserId) {
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

    function getUsername(uint userId) public view onlyManager returns (bytes32) {
        return profiles[userId].username;
    }

    function getGivenName(uint userId) public view onlyManager returns (bytes32) {
        return profiles[userId].givenName;
    }

    function getFamilyName(uint userId) public view onlyManager returns (bytes32) {
        return profiles[userId].familyName;
    }
}