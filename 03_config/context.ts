import Web3Eth from "web3-eth";
import Contract from "web3-eth-contract";

const web3Eth = new Web3Eth({
    provider: "http://127.0.0.1:7545",
    config: {
        defaultTransactionType: "0x0",
    },
});

console.log(web3Eth.config);

web3Eth.setConfig({defaultTransactionType: "0x1"});

const contractDefault = new Contract([]);

const contract = new Contract([], web3Eth.getContextObject());

console.log("default contract config", contractDefault.config);

console.log("contract config context", contract.config);
