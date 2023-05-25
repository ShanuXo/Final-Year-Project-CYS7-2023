// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes{
    uint256 public s_maxSupply= 1000000000000000000000000;
    constructor()
    ERC20("KanoonToken","KT")  /*governance token */ 
    ERC20Permit("KanoonToken")
    {
        _mint(msg.sender,s_maxSupply);
    }

    //Function below overrides required by Solidity 
    //afterTokenTransfer--->how many tokens are sent, what are the total suppy, update snapshot
    //state changes
    function _afterTokenTransfer(
        address from, 
        address to,
        uint256 amount
        ) internal override(ERC20Votes){
            super._afterTokenTransfer(from,to,amount);
    }
    //_mint-->how much we send , add from total supply to real world
    function _mint(address to, uint256 amount) internal override(ERC20Votes){
        super._mint(to,amount);
    }
    //burn--> take them out of total supply
    function _burn(address account, uint256 amount) internal override(ERC20Votes){
        super._burn(account,amount);
    }
}