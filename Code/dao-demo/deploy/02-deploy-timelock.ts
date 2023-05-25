import { HardhatRuntimeEnvironment } from "hardhat/types";
import{DeployFunction} from "hardhat-deploy/types";
import { ethers } from "hardhat";
import{MIN_DELAY,EXECUTORS,PROPOSERS} from "../hardhat-helper-config";

const deployTimeLock: DeployFunction= async(hre: HardhatRuntimeEnvironment)=>{
    const{getNamedAccounts, deployments, network}= hre;
    const{deployer}= await getNamedAccounts();
    const {deploy,log} =deployments;

    log("Deploying TimeLock contract...");
    const timelock=await deploy("TimeLock",{
        from: deployer,
        args:[MIN_DELAY, PROPOSERS,EXECUTORS,deployer],
        log:true
    });

    log(`02- 'TimeLock' contract deployed at ${timelock.address}`);
};

export default deployTimeLock;
deployTimeLock.tags=["all","timelock"];
