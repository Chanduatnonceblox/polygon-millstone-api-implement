import axios from "axios";

import fs from "fs";
import moment from "moment";

async function main() {
  const milstoneAPI =
    "https://heimdall-api-testnet.polygon.technology/milestone/latest";

  const blocksArray = [];
  const milstoneData = [];

  for (let i = 0; i <= 50; i++) {
    do {
      try {
        let response1 = await axios.post(
          "https://empty-long-lake.matic-testnet.discover.quiknode.pro/cb3a272c1e89a595b28293673ea3354048c64d0c/",
          {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: ["finalized", true],
            id: 1,
            headers: { "Content-Type": "application/json" },
          }
        );
        let response2 = await axios.post(
          "https://polygon-mumbai.infura.io/v3/16935940235147d09d8c5224ab7daed8",
          {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: ["finalized", true],
            id: 1,
            headers: { "Content-Type": "application/json" },
          }
        );

        let response3 = await axios.get(milstoneAPI, {
          headers: { "Content-Type": "application/json" },
        });

        let data = {
          quicknode: {
            blocknumber: parseInt(response1.data.result.number, 16),
            time: moment
              .unix(parseInt(response1.data.result.timestamp, 16))
              .format("MMMM Do YYYY, h:mm:ss a"),

            APIHitTime: `${new Date(Date.now())}`,
          },
          infura: {
            blocknumber: parseInt(response2.data.result.number, 16),
            time: moment
              .unix(parseInt(response2.data.result.timestamp, 16))
              .format("MMMM Do YYYY, h:mm:ss a"),
            APIHitTime: `${new Date(Date.now())}`,
          
          },
          heimdallApi: {
            blocknumber: response3.data.result.end_block,
            time: moment
              .unix(response3.data.result.timestamp)
              .format("MMMM Do YYYY, h:mm:ss a"),

            APIHitTime: `${new Date(Date.now())}`,
          },
        };

        if (!blocksArray.includes(parseInt(response1.data.result.number, 16))) {
          blocksArray.push(parseInt(response1.data.result.number, 16));
          milstoneData.push(data);

          if (milstoneData.length == 50) {
            fs.writeFileSync("data.json", JSON.stringify(milstoneData));
          }
        }

        console.log(milstoneData);
      } catch (error) {
        console.log(error.data);
      }
    } while (blocksArray.length < 50);
  }
}

main();
