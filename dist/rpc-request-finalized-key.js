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
require("dotenv/config");
const axios_1 = __importDefault(require("axios"));
function getBlockByNumber(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getBlockByNumber",
                params: ["finalized", true],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getBalance(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getTransactionCount(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getTransactionCount",
                params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getBlockTransactionCountByNumber(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getBlockTransactionCountByNumber",
                params: ["finalized"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getUncleCountByBlockNumber(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getUncleCountByBlockNumber",
                params: ["finalized"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getCode(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getCode",
                params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function ethCall(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
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
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getTransactionByBlockNumberAndIndex(rpc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield axios_1.default.post(rpc, {
                jsonrpc: "2.0",
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: ["finalized", "0x0"],
                id: 1,
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
const argument = process.argv.slice(2);
if (argument[1] == "1") {
    getBlockByNumber(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "2") {
    getBalance(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "3") {
    getTransactionCount(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "4") {
    getBlockTransactionCountByNumber(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "5") {
    getUncleCountByBlockNumber(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "6") {
    getCode(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "7") {
    ethCall(argument[0]).catch((error) => {
        console.error(error);
    });
}
else if (argument[1] == "8") {
    getTransactionByBlockNumberAndIndex(argument[0]).catch((error) => {
        console.error(error);
    });
}
//# sourceMappingURL=rpc-request-finalized-key.js.map