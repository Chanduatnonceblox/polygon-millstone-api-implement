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
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const milstoneAPI = "https://heimdall-api-testnet.polygon.technology/milestone/latest";
        const blocksArray = [];
        const milstoneData = [];
        for (let i = 0; i <= 50; i++) {
            do {
                try {
                    let response1 = yield axios_1.default.post("https://empty-long-lake.matic-testnet.discover.quiknode.pro/cb3a272c1e89a595b28293673ea3354048c64d0c/", {
                        jsonrpc: "2.0",
                        method: "eth_getBlockByNumber",
                        params: ["finalized", true],
                        id: 1,
                        headers: { "Content-Type": "application/json" },
                    });
                    let response2 = yield axios_1.default.post("https://polygon-mumbai.infura.io/v3/16935940235147d09d8c5224ab7daed8", {
                        jsonrpc: "2.0",
                        method: "eth_getBlockByNumber",
                        params: ["finalized", true],
                        id: 1,
                        headers: { "Content-Type": "application/json" },
                    });
                    let response3 = yield axios_1.default.get(milstoneAPI, {
                        headers: { "Content-Type": "application/json" },
                    });
                    let data = {
                        quicknode: {
                            blocknumber: parseInt(response1.data.result.number, 16),
                            time: moment_1.default
                                .unix(parseInt(response1.data.result.timestamp, 16))
                                .format("MMMM Do YYYY, h:mm:ss a"),
                            APIHitTime: `${new Date(Date.now())}`,
                        },
                        infura: {
                            blocknumber: parseInt(response2.data.result.number, 16),
                            time: moment_1.default
                                .unix(parseInt(response2.data.result.timestamp, 16))
                                .format("MMMM Do YYYY, h:mm:ss a"),
                            APIHitTime: `${new Date(Date.now())}`,
                        },
                        heimdallApi: {
                            blocknumber: response3.data.result.end_block,
                            time: moment_1.default
                                .unix(response3.data.result.timestamp)
                                .format("MMMM Do YYYY, h:mm:ss a"),
                            APIHitTime: `${new Date(Date.now())}`,
                        },
                    };
                    if (!blocksArray.includes(parseInt(response1.data.result.number, 16))) {
                        blocksArray.push(parseInt(response1.data.result.number, 16));
                        milstoneData.push(data);
                        if (milstoneData.length == 50) {
                            fs_1.default.writeFileSync("data.json", JSON.stringify(milstoneData));
                        }
                    }
                    console.log(milstoneData);
                }
                catch (error) {
                    console.log(error.data);
                }
            } while (blocksArray.length < 50);
        }
    });
}
main();
//# sourceMappingURL=milstone-time-diffrence.js.map