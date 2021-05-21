pragma solidity ^0.4.23;

contract Owner {
    address public ownerAddress;

    function Owner() internal {
        ownerAddress = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddress);
        _;
    }

    function setNewOwner(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));
        ownerAddress = _newOwner;
    }
}