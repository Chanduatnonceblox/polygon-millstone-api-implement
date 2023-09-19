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
const fs_1 = __importDefault(require("fs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const contractAddress = "0x1AB83AC3d7ed09f5d9a35712710D04F325db90fF";
        const waitNumber = 12;
        const providerUrl = "https://polygon-mumbai.g.alchemy.com/v2/CrIMX1vhpKhskXca14Dnb1GJfuS69OMi";
        const provider = new ethers_1.ethers.JsonRpcProvider(providerUrl);
        const erc20Contract = new ethers_1.ethers.Contract(contractAddress, abi_json_1.default, provider);
        try {
            erc20Contract.on("Transfer", (from, to, value, event) => __awaiter(this, void 0, void 0, function* () {
                let blockNumber = yield provider.getBlockNumber();
                do {
                    blockNumber = yield provider.getBlockNumber();
                    console.log("checking block", blockNumber);
                    if (blockNumber - event.log.blockNumber >= waitNumber) {
                        console.log(`diffrence number ${blockNumber - event.log.blockNumber}`);
                        console.log(`latest block ${blockNumber} tx block ${event.log.blockNumber}`);
                        console.log(`Transfer from ${from} to ${to}, Value: ${value.toString()} confirmed`);
                        let data = { "from": from, "to": to, "value": value.toString() };
                        fs_1.default.writeFileSync("data.json", JSON.stringify(data));
                    }
                } while (blockNumber - event.log.blockNumber < waitNumber);
            }));
            console.log(`Listening for ERC-20 Transfer events on contract: ${contractAddress}`);
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