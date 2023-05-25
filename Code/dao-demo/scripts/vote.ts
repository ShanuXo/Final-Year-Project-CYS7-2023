import { ethers, network } from "hardhat";
import { developmentChains, PROPOSAL_FILE, VOTING_DELAY, VOTING_PERIOD } from "../hardhat-helper-config";
import * as fs from "fs";
import { moveBlocks } from "../helpers";

//3 types of vote yes,no,absitence

const VOTE_NO=0;
const VOTE_YES=1;
const VOTE_ABSTAIN=2;
export async function vote(proposalId){
    console.log("Voting...");
    const governor=await ethers.getContract("GovernorContract");
    const voteTx=await governor.castVoteWithReason(proposalId, VOTE_YES,"Cause we like 100");
    await voteTx.wait(1);
    let proposalState=await governor.state(proposalId);
    console.log("Proposal state before voting is: ",proposalState);

    //jump time
    if(developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD+1);
    }

    proposalState=await governor.state(proposalId);
    console.log("Proposal state after voting is: ",proposalState);


}
const proposals=JSON.parse(fs.readFileSync(PROPOSAL_FILE,"utf-8"));
const proposalId= proposals[network.config.chainId!][0];

vote(proposalId).then(()=>process.exit(0)).catch(err=>{
    console.log(err),
    process.exit(1);
});