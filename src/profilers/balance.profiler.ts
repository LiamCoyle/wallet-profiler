import Web3 from "web3";
import * as dotenv from "dotenv";
dotenv.config();

const infuraNodeUrl = process.env.INFURA_LINK;

const web3 = new Web3(infuraNodeUrl!); // Connect to an Ethereum node

const balanceProfiler = {
  async getWalletInfo(walletAddress: string) {
    const balance = await web3.eth.getBalance(walletAddress);

    const txCount = await web3.eth.getTransactionCount(walletAddress);

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
