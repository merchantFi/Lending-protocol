require("@nomicfoundation/hardhat-toolbox");
const { PRIVATEKEY, apiKey } = require("./config.js");
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {

  // defaultNetwork: "merlin",
  networks: {
    merlin: {
      url: "https://rpc.merlinchain.io",
      accounts: [PRIVATEKEY.owner],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: {
      "merlin": "no-api-key-needed"
     },
     customChains: [
      {
        network: "merlin",
        chainId: 4200,
        urls: {
          apiURL: "https://scan.merlinchain.io/api",
          browserURL: "https://scan.merlinchain.io"
        }
      }
    ]
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },



};


