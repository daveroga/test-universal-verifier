# Test Privado ID Universal Verifier

This project tests submitResponse for Universal Verifier.

## Configuration
1. Install dependencies
  ```shell
  npm ci
  ```
2. Copy `.env.example` into `.env`
3. Fill your configuration for the different parameters
  ```
  PRIVATE_KEY=<your_ethereum_account_private_key>
  AURORA_TESTNET_RPC_URL="https://testnet.aurora.dev"
  ```
## Test for Aurora Testnet
You can test directly in Aurora Testnet with this command
```shell
npx hardhat run scripts/submitResponse.ts --network aurora-testnet
```
## Test for Aurora Testnet in localhost with a fork
1. Fork the network in your local executing this command in a terminal
  ```shell
  npx hardhat node
  ```
2. Run the following command in another terminal
```shell
npx hardhat run scripts/submitResponse.ts --network localhost 
```