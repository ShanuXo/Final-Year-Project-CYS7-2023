// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/governance/TimelockController.sol";

//queueing proposals
//access controls, allotment of roles
//admin--adminstrators, proposers-- who can propose, executers-- after time gap over who executes
contract TimeLock is TimelockController{
    
    constructor(
        uint256 minDelay , 
        address[] memory proposers, 
        address[] memory executors,
        address admin
    )TimelockController(minDelay, proposers, executors,admin){}
}