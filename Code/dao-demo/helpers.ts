import { network } from "hardhat"
//mibe one at a time till we reach the amount we want to mine
export const moveBlocks=async(amount: number)=>{
    for(let i=0;i<amount;i++){
        await network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
    console.log(`Moved ${amount} blocks`);
}
//move in time
export const moveTime=async(amount: number)=>{
    await network.provider.send("evm_increaseTime",[amount]);
    console.log(`Moved ${amount} seconds`);
}