import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const DEFAULT_MNEMONIC =
  "test test test test test test test test test test test junk";
const DEFAULT_ACCOUNTS: any = {
  mnemonic: DEFAULT_MNEMONIC,
  path: "m/44'/60'/0'/0",
  initialIndex: 0,
  count: 20,
};

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    "aurora-testnet": {
      chainId: 1313161555,
      url: `${process.env.AURORA_TESTNET_RPC_URL}`,
      accounts: process.env.PRIVATE_KEY
        ? [`0x${process.env.PRIVATE_KEY}`]
        : DEFAULT_ACCOUNTS,
    },
    hardhat: {
      chainId: 1313161555,
      forking: {
        url: `${process.env.AURORA_TESTNET_RPC_URL}`,
      },
      chains: {
        1313161555: {
          hardforkHistory: {
            london: 100000,
          },
        },
      },
      accounts: [
        {
          privateKey: process.env.PRIVATE_KEY as string,
          balance: "1000000000000000000000000",
        },
      ],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      timeout: 100000000,
    },
  },
};

export default config;
