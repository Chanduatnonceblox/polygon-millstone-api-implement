"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const abi_json_1 = __importDefault(require("./abi.json"));
require("dotenv/config");
const axios_1 = __importDefault(require("axios"));
const promises_1 = require("timers/promises");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const contractAddress = "0x1AB83AC3d7ed09f5d9a35712710D04F325db90fF"; // add the erc20 token contract;
        const waitNumber = 2;
        const providerUrl = process.env.MUMBAI_RPC;
        const provider = new ethers_1.ethers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
        const contract = new ethers_1.ethers.Contract(contractAddress, abi_json_1.default, provider);
        try {
            contract.on("Transfer", (from, to, value, event) => __awaiter(this, void 0, void 0, function* () {
                // let blockNumber = await provider.getBlockNumber();
                let finalized = yield axios_1.default.post("https://rpc-mumbai.maticvigil.com", {
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
                    finalized = yield axios_1.default.post("https://rpc-mumbai.maticvigil.com", {
                        jsonrpc: "2.0",
                        method: "eth_getBlockByNumber",
                        params: ["finalized", true],
                        id: 1,
                        headers: { "Content-Type": "application/json" },
                    });
                    if (parseInt(finalized.data.result.number, 16) >= event.log.blockNumber) {
                        console.log("finalized block", parseInt(finalized.data.result.number, 16));
                        console.log("event block", event.log.blockNumber);
                        console.log(`Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`);
                    }
                    else {
                        console.log(`diffrence number ${parseInt(finalized.data.result.number, 16) - event.log.blockNumber}`);
                        console.log("finalized block from API ", parseInt(finalized.data.result.number, 16));
                        console.log("event block from tx hash ", event.log.blockNumber);
                        console.log(`Transfer from ${from} to ${to}, Value: ${value.toString()} not confirmed`);
                        yield (0, promises_1.setTimeout)(5000);
                        console.log("Waited an additional 5s");
                    }
                } while (parseInt(finalized.data.result.number, 16) < event.log.blockNumber);
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
            }));
            console.log(`Listening for ERC-20 Transfer events on contract: ${contractAddress}`);
            let finalized = yield axios_1.default.post("https://rpc-mumbai.maticvigil.com", {
                jsonrpc: "2.0",
                method: "eth_getBlockByNumber",
                params: ["finalized", true],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(finalized.data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
main().catch((error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map