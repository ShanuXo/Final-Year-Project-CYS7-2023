import {ethers, network} from "hardhat";
import { DESCRIPTION, developmentChains, FUNC, FUNC_ARGS, PROPOSAL_FILE, VOTING_DELAY } from "../hardhat-helper-config";
import { moveBlocks } from "../helpers";
import * as fs from "fs";
export async function makeProposal(functionToCall: string,args: any[],  proposalDescription: string) {
    const governor = await ethers.getContract("GovernorContract");
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args);
    console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`);
    console.log(`Proposal Description:\n  ${proposalDescription}`);
    const proposeTx = await governor.propose(
      [box.address],
      [0],
      [encodedFunctionCall],
      proposalDescription
    );
    
    const proposeReceipt = await proposeTx.wait(1)
    //  JUMP
    if(developmentChains.includes(network.name)){
      await moveBlocks(VOTING_DELAY+1);
    }
    
    const proposalId = proposeReceipt.events[0].args.proposalId;
    console.log(`Proposed with proposal ID:\n  ${proposalId}`);
    //save to file
    fs.writeFileSync(
      PROPOSAL_FILE,
      JSON.stringify({ 
        [network.config.chainId!.toString()]: [proposalId.toString()],
      })
    );
   
  }
  
  
  
  makeProposal(FUNC,[FUNC_ARGS], DESCRIPTION)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error),
      process.exit(1)
    });

//make a proposal 
//address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description
//targets -- array of contracts subject to governnace here box
//values -- ethers sent for each contract(not sending any)
//calldata -- signatures 
//description-- human readable description of what we propose
