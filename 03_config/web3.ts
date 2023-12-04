import {Web3} from "web3";

const web3 = new Web3({
    provider: "http://127.0.0.1:8545",
    config: {
        defaultTransactionType: "0x0",
    },
});

console.log("default config", web3.config);

web3.setConfig({
    defaultTransactionType: "0x1",
});

console.log("setConfig results", web3.config);

web3.eth
    .sendTransaction({
        from: "0x18532dF2Ab835d4E9D07a8b9B759bf5F8f890f49",
        to: "0xB2f70d8965e754cc07D343a9b5332876D3070155",
        value: 100,
        gasLimit: 21000,
        type: BigInt(2),
    })
    .then((res) => console.log(res));
