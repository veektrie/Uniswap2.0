import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x49B5284029606D44751D8da1b06DE4048E55BF86"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:"https://eth-goerli.g.alchemy.com/v2/UmhVACLs-iHuTUiJNR5SmIQ8mUa24dc7",
  },
};