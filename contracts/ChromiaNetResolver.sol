// SPDX-License-Identifier: MIT

// THIS IS NOT THE CORRECT CONTRACT CHECK DEPLOY FOR INFO

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract ChromiaNetResolver is Ownable {
    using Strings for uint256;

    string baseURI;

    constructor () {
        baseURI = "https://chromia.net/oe/eth/";
    }

    function changeBaseURI(string calldata newBaseURI) external onlyOwner {
        baseURI = newBaseURI;
    }

    function getNFTURI(address contractAddress, uint id) external view returns (string memory) {
        return string(abi.encodePacked(baseURI, uint256(uint160(address(contractAddress))).toHexString(20), "/", id.toString()));
    }
}
