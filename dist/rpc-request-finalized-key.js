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
const ethers_1 = require("ethers");
const providerUrl = process.env.MUMBAI_RPC;
function getBlockByNumber(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getBlockByNumber",
                    params: ["finalized", true],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i], "method : eth_getBlockByNumber");
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getBalance(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getBalance",
                    params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getTransactionCount(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getTransactionCount",
                    params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getBlockTransactionCountByNumber(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getBlockTransactionCountByNumber",
                    params: ["finalized"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getUncleCountByBlockNumber(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getUncleCountByBlockNumber",
                    params: ["finalized"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getCode(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getCode",
                    params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function ethCall(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [
                        {
                            from: "0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af",
                            to: "0xda39a600F52824E24215A956A7dc24BC89B2087C",
                            data: "0x",
                        },
                        "finalized",
                    ],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getTransactionByBlockNumberAndIndex(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getTransactionByBlockNumberAndIndex",
                    params: ["finalized", "0x0"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function getUncleByBlockNumberAndIndex(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_getUncleByBlockNumberAndIndex",
                    params: ["finalized", "0x0"],
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
function ethnewFilter(rpcs) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
        let blockNumber = yield provider.getBlockNumber();
        console.log(blockNumber, "blockNumber");
        let params = [
            {
                fromBlock: "finalized",
                toBlock: ethers_1.ethers.toBeHex(blockNumber.toString()),
                address: "0x1AB83AC3d7ed09f5d9a35712710D04F325db90fF",
                topics: [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                ],
            },
        ];
        for (let i = 0; i < rpcs.length; i++) {
            try {
                let response = yield axios_1.default.post(rpcs[i], {
                    jsonrpc: "2.0",
                    method: "eth_newFilter",
                    params: params,
                    id: 1,
                    headers: { "Content-Type": "application/json" },
                });
                console.log(rpcs[i]);
                console.log(response.data);
            }
            catch (error) {
                console.log(rpcs[i], "failed");
                console.log(error.data);
            }
        }
    });
}
const argument = process.argv.slice(2);
const rpcs = [
    // providerUrl,
    "https://rpc-mumbai.maticvigil.com",
    "https://api.zan.top/node/v1/polygon/mumbai/public",
    "https://polygon-mumbai-bor.publicnode.com",
    "https://polygon-mumbai.g.alchemy.com/v2/demo",
    "https://polygon-mumbai.blockpi.network/v1/rpc/public",
    "https://polygon-testnet.public.blastapi.io",
    "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    "https://polygontestapi.terminet.io/rpc",
    "https://matic-mumbai.chainstacklabs.com",
    "https://matic-testnet-archive-rpc.bwarelabs.com",
    "https://rpc.ankr.com/polygon_mumbai",
    "https://g.w.lavanet.xyz:443/gateway/polygon1t/rpc-http/f7ee0000000000000000000000000000",
];
if (argument[1] == "1") {
    getBlockByNumber(rpcs);
}
else if (argument[1] == "2") {
    getBalance(rpcs);
}
else if (argument[1] == "3") {
    getTransactionCount(rpcs);
}
else if (argument[1] == "4") {
    getBlockTransactionCountByNumber(rpcs);
}
else if (argument[1] == "5") {
    getUncleCountByBlockNumber(rpcs).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "6") {
    getCode(rpcs);
}
else if (argument[1] == "7") {
    ethCall(rpcs);
}
else if (argument[1] == "8") {
    getTransactionByBlockNumberAndIndex(rpcs);
}
else if (argument[1] == "9") {
    getUncleByBlockNumberAndIndex(rpcs);
}
else if (argument[1] == "10") {
    ethnewFilter(rpcs);
}
// for (let i = 1; i < 9; i++) {
//   if (i.toString() == "1") {
//     getBlockByNumber(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "2") {
//     getBalance(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "3") {
//     getTransactionCount(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "4") {
//     getBlockTransactionCountByNumber(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "5") {
//     getUncleCountByBlockNumber(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "6") {
//     getCode(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "7") {
//     ethCall(rpcs).catch((error) => {
//       console.error(error);
//     });
//   } else if (i.toString() == "8") {
//     getTransactionByBlockNumberAndIndex(rpcs).catch((error) => {
//       console.error(error);
//     });
//   }
// }
//# sourceMappingURL=rpc-request-finalized-key.js.map