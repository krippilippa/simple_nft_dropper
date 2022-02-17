require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const LIVE_ALCHEMY_API_KEY = process.env.LIVE_ALCHEMY_API_KEY;
const MORALIS = process.env.MORALIS;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const MORALIS_MAINNET = process.env.MORALIS_MAINNET;

module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      url: `http://127.0.0.1:8545/`
    },
    // mainnet: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${LIVE_ALCHEMY_API_KEY}`,
    //   accounts: [`0x${MAINNET_PRIVATE_KEY}`],
    // },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
    BSCMainnet: {
      url: `${MORALIS_MAINNET}`,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
    BSCTestnet: {
      url: `${MORALIS}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY
  },
};