import Web3 from "web3";

const coingeckoApi = require("../api/coingecko.api");
const zapperApi = require("../api/zapper.api");

const web3 = new Web3(process.env.INFURA_LINK!); // Connect to an Ethereum node

const balanceProfiler = {
  async getWalletInfo(walletAddress: string) {
    const balance = await web3.eth.getBalance(walletAddress);

    const txCount = await web3.eth.getTransactionCount(walletAddress);
    //const coinList = await coingeckoApi.getCoinList();

    const balances = await zapperApi.getBalances(walletAddress);

    console.log(balances);

    /*const contractCode = await web3.eth.getCode(walletAddress);
    if (contractCode !== "0x") {
      console.log(`Contract code for wallet ${walletAddress}: ${contractCode}`);
    } else {
      console.log(`${walletAddress} is not a contract`);
    }*/

    const tokens: string[] = [];
    return {
      balance,
      txCount,
      tokens,
    };
  },
};

module.exports = balanceProfiler;
