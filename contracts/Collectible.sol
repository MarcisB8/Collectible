pragma solidity ^0.6.0;

import './openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract Collectible is ERC721 {
  constructor() ERC721("Collectible", "COL") public {}

  string[] tokens;

  function mint(string memory link) public returns (uint) {

    tokens.push(link);
    uint _id = tokens.length - 1;
    _mint(msg.sender, _id);
    return _id;
  }

  function viewCollectible(uint id) public view returns(string memory) {

    return tokens[id];
  }
}
