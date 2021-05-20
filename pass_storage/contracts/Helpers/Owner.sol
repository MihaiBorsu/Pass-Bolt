pragma solidity ^0.5.10;

contract Owner {
    address public ownerAddress;

    function Owned() internal {
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