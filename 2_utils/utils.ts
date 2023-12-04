import {Web3} from "web3";
import {toWei, fromWei, toBigInt} from "web3-utils";

const web3 = new Web3("http://127.0.0.1:8545");

const hexText = web3.utils.toHex("some text");
console.log("toHex", hexText);

console.log("string", web3.utils.hexToString(hexText));

console.log("toBigInt", toBigInt(123));
console.log("toBigInt", toBigInt("0x1232"));
console.log("toBigInt", toBigInt(BigInt(22)));

const wei = toWei(5.1234, "ether");
console.log("toWei", wei);

console.log("fromWei", fromWei(wei, "ether"));
