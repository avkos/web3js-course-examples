import {Web3} from "web3";
import {ALL_EVENTS} from "web3-eth";
import {abi} from "../8_contract/contractData";

const web3 = new Web3("ws://localhost:8545");
const contractAddress = "0x6cf14c3BE1514b3437fAc4fE7eB6A17c9C369449";

async function test() {
    const acc = web3.eth.accounts.privateKeyToAccount(
        "0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9"
    );
    web3.eth.accounts.wallet.add(acc);

    const receiver = web3.eth.accounts.create();

    const getPastLogs = await web3.eth.getPastLogs({
        address: contractAddress,
        fromBlock: "earliest",
    });
    console.log("getPastLogs", getPastLogs);

    const logsSupscription = await web3.eth.subscribe("logs", {
        address: contractAddress,
    });
    logsSupscription.on("data", (data) => {
        console.log("logsSupscription data", data);
    });
    logsSupscription.on("error", (error) => {
        console.log("logsSupscription error", error);
    });

    const newHeadsSupscription = await web3.eth.subscribe("newHeads", {
        address: acc.address,
    });
    newHeadsSupscription.on("data", (data) => {
        console.log("newHeadsSupscription data", data);
    });

    const newPendingTxSupscription = await web3.eth.subscribe(
        "newPendingTransactions",
        {address: acc.address}
    );
    newPendingTxSupscription.on("data", async (data) => {
        console.log("newPendingTxSupscription hash", data);
    });

    const contract = new web3.eth.Contract(
        abi,
        contractAddress,
        web3.getContextObject()
    );

    for (let i = 0; i < 10; i++) {
        await web3.eth.sendTransaction({
            from: acc.address,
            to: receiver.address,
            value: BigInt(1),
        });
        await contract.methods
            .transfer(receiver.address, BigInt(1))
            .send({from: acc.address});
    }
}

test().catch(console.error);
