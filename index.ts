import { ethers } from "ethers";
import ABI from "./abi.json";
import "dotenv/config";
import fs from "fs";
import axios from "axios";
import { setTimeout } from "timers/promises";
async function main() {
  const contractAddress = "0x1AB83AC3d7ed09f5d9a35712710D04F325db90fF"; // add the erc20 token contract;
  const waitNumber = 2;
  const providerUrl = process.env.MUMBAI_RPC;
  const provider = new ethers.JsonRpcProvider(
    "https://rpc-mumbai.maticvigil.com"
  );
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  try {
    contract.on(
      "Transfer",
      async (from: string, to: string, value: number, event: any) => {
        // let blockNumber = await provider.getBlockNumber();

        let finalized = await axios.post("https://rpc-mumbai.maticvigil.com", {
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: ["finalized", true],
          id: 1,
          headers: { "Content-Type": "application/json" },
        });

        // if (
        //   parseInt(finalized.data.result.number, 16) >= event.log.blockNumber
        // ) {
        //   console.log(
        //     "finalized block",
        //     parseInt(finalized.data.result.number, 16),
        //     "event block",
        //     event.log.blockNumber
        //   );
        //   console.log(
        //     `Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`
        //   );
        // } else {
        //   console.log(
        //     "finalized block",
        //     parseInt(finalized.data.result.number, 16),
        //     "event block",
        //     event.log.blockNumber
        //   );
        //   console.log(
        //     `Transfer from ${from} to ${to}, Value: ${value.toString()} not confirmed`
        //   );
        // }

        do {
          finalized = await axios.post("https://rpc-mumbai.maticvigil.com", {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: ["finalized", true],
            id: 1,
            headers: { "Content-Type": "application/json" },
          });

          if (
            parseInt(finalized.data.result.number, 16) >= event.log.blockNumber
          ) {
            console.log(
              "finalized block",
              parseInt(finalized.data.result.number, 16)
             
            );
            console.log( "event block",
            event.log.blockNumber)
            console.log(
              `Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`
            );
          } else {

            console.log(
                     `diffrence number ${ parseInt(finalized.data.result.number, 16) - event.log.blockNumber}`
                  );
            console.log(
              "finalized block from API ",
              parseInt(finalized.data.result.number, 16)
             
            );
            console.log( "event block from tx hash ",
            event.log.blockNumber)
            console.log(
              `Transfer from ${from} to ${to}, Value: ${value.toString()} not confirmed`
            );
            await setTimeout(5000);
            console.log("Waited an additional 5s");
          }
        } while (
          parseInt(finalized.data.result.number, 16) < event.log.blockNumber
        );

        // do {
        //   blockNumber = await provider.getBlockNumber();

        //   if (blockNumber - event.log.blockNumber >= waitNumber) {
        //     console.log("checking block", blockNumber);
        //     console.log(
        //       `diffrence number ${blockNumber - event.log.blockNumber}`
        //     );
        //     console.log(
        //       `latest block ${blockNumber} tx block ${event.log.blockNumber}`
        //     );
        //     console.log(
        //       `Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`
        //     );

        //   }
        // } while (blockNumber - event.log.blockNumber < waitNumber);
      }
    );

    console.log(
      `Listening for ERC-20 Transfer events on contract: ${contractAddress}`
    );
    let finalized = await axios.post("https://rpc-mumbai.maticvigil.com", {
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["finalized", true],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(finalized.data);
  } catch (error) {
    console.log(error);
  }
}

main().catch((error) => {
  console.error(error);
});
