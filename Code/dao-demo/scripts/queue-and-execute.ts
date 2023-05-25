import { ethers, network } from "hardhat";
import { FUNC, FUNC_ARGS, DESCRIPTION, developmentChains, VOTING_PERIOD, MIN_DELAY } from "../hardhat-helper-config";
import { moveBlocks, moveTime } from "../helpers";

export async function queueAndExecute(
    functionToCall: string,
    args: number[], 
    proposalDescription: string
){
    const box=await ethers.getContract("Box");
    const encodedFunctionCall=box.interface.encodeFunctionData(
        functionToCall,
        args
    );
    const descpritionHash=ethers.utils.keccak256(ethers.utils.toUtf8Bytes(proposalDescription));
    //queue proposal into timelock
    const governor=await ethers.getContract("GovernorContract");
    const queueTx=await governor.queue([box.address],
        [0],
        [encodedFunctionCall],
        descpritionHash);
    await queueTx.wait(1);
    console.log("Queued proposal..");
    //jump in terms of time and block
    if(developmentChains.includes(network.name)) {
        await moveTime(MIN_DELAY+1);
        await moveBlocks(VOTING_PERIOD+1);
    }   

    //execute the proposal
    const executeTx=await governor.execute([box.address],
        [0],
        [encodedFunctionCall],
        descpritionHash);
    await executeTx.wait(1);
    console.log("Executed..");
    console.log(`Box value is ${await box.retrieve()}`)
}
queueAndExecute(FUNC,[FUNC_ARGS],DESCRIPTION).then(()=>process.exit(0)).catch(err=>{
    console.log(err),
    process.exit(1);
});