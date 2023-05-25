import"@typechain/hardhat";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/types/config";


/** @type import('hardhat/config').HardhatUserConfig */
const config:HardhatUserConfig = {
  solidity:{
    version: "0.8.17",
    settings:{
      optimizer:{
        enabled:true, 
        runs:100,
      },
    },
  } ,
  //networks
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:31337,
    },
    localhost:{
      chainId:31337,
    },
  },
  namedAccounts:{
    deployer:{
      default:0, //index for account free between 0-19(20accounts)
    },
  },
};

export default config;
