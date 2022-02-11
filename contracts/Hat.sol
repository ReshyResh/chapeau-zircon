// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Hat is ERC721, ERC721URIStorage, Ownable {

    struct HatAttributes {
        string name;
        string color;
    }

    using Counters for Counters.Counter;

    mapping(string => uint8) existingNames;
    mapping(uint256 => HatAttributes) public attributes;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Hat", "HAT") {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingNames[uri] == 1;
    }

    function mint(
        address to,
        uint256 tokenId,
        string memory _name,
        string memory _color
    )
    public onlyOwner {
        _safeMint(to, tokenId);
        attributes[tokenId] = HatAttributes(_name, _color);
    }

    function payToPlay(
        address recipient
    ) public payable {}

}