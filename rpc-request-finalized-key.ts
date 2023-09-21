import { ethers } from "ethers";
import ABI from "./abi.json";
import "dotenv/config";
import fs from "fs";
import axios from "axios";

async function getBlockByNumber(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: ["finalized", true],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getBalance(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getTransactionCount(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getTransactionCount",
      params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getBlockTransactionCountByNumber(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getBlockTransactionCountByNumber",
      params: ["finalized"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getUncleCountByBlockNumber(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getUncleCountByBlockNumber",
      params: ["finalized"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getCode(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getCode",
      params: ["0xa4A6dBbeE251947C35c925dB1A4D489C78aaf8af", "finalized"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
async function ethCall(rpc: string) {
  try {
    let response = await axios.post(rpc, {
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
  } catch (error) {
    console.log(error);
  }
}
async function getTransactionByBlockNumberAndIndex(rpc: string) {
  try {
    let response = await axios.post(rpc, {
      jsonrpc: "2.0",
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: ["finalized", "0x0"],
      id: 1,
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
const argument = process.argv.slice(2);

if (argument[1] == "1") {
  getBlockByNumber(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "2") {
  getBalance(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "3") {
  getTransactionCount(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "4") {
  getBlockTransactionCountByNumber(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "5") {
  getUncleCountByBlockNumber(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "6") {
  getCode(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "7") {
  ethCall(argument[0]).catch((error) => {
    console.error(error);
  });
} else if (argument[1] == "8") {
  getTransactionByBlockNumberAndIndex(argument[0]).catch((error) => {
    console.error(error);
  });
}
