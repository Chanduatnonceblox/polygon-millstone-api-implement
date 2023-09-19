import { ethers } from "ethers";
import ABI from "./abi.json";
import "dotenv/config";
import fs from "fs";

async function main() {
  const contractAddress = "0x1AB83AC3d7ed09f5d9a35712710D04F325db90fF" // add the erc20 token contract;
  const waitNumber = 12;
  const providerUrl =process.env.MUMBAI_RPC;
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const erc20Contract = new ethers.Contract(contractAddress, ABI, provider);

  try {
    erc20Contract.on(
      "Transfer",
      async (from: string, to: string, value: number, event: any) => {
        let blockNumber = await provider.getBlockNumber();

        do {
          blockNumber = await provider.getBlockNumber();

          if (blockNumber - event.log.blockNumber >= waitNumber) {
            console.log("checking block", blockNumber);
            console.log(
              `diffrence number ${blockNumber - event.log.blockNumber}`
            );
            console.log(
              `latest block ${blockNumber} tx block ${event.log.blockNumber}`
            );
            console.log(
              `Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`
            );

            let data = { from: from, to: to, value: value.toString() };

            fs.writeFileSync("data.json", JSON.stringify(data));
          }
        } while (blockNumber - event.log.blockNumber < waitNumber);
      }
    );

    console.log(
      `Listening for ERC-20 Transfer events on contract: ${contractAddress}`
    );
  } catch (error) {
    console.log(error);
  }
}

main().catch((error) => {
  console.error(error);
});
