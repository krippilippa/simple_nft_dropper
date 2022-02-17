// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract basicNFTdropper is ERC721Enumerable, Ownable {

    bool public mintingActive = true;
    uint public idCount = 1;

    address private CNR;

    constructor (address _CNR) ERC721 ("NAME", "TICKER") Ownable(){
        CNR = _CNR;
    }

    function mintMany(address[] calldata _addresses) public onlyOwner(){
        require(mintingActive);
        for (uint256 index = 0; index < _addresses.length; index++) {
            _safeMint(_addresses[index], idCount);
            idCount++;
        }
    }

    function endMint() public onlyOwner(){
        mintingActive = false;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return IChromiaNetResolver(CNR).getNFTURI(address(this), tokenId);
    }
}

interface IChromiaNetResolver {
     function getNFTURI(address contractAddress, uint id) external view returns (string memory);
}