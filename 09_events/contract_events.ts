import {Web3} from "web3";
import {abi} from "../08_contract/contractData";
import {ALL_EVENTS} from "web3-eth";

const contractAddress = "0x6cf14c3BE1514b3437fAc4fE7eB6A17c9C369449";
const web3 = new Web3("ws://localhost:8545");

async function test() {
    const acc = web3.eth.accounts.privateKeyToAccount(
        "0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9"
    );
    web3.eth.accounts.wallet.add(acc);

    const contract = new web3.eth.Contract(
        abi,
        contractAddress,
        web3.getContextObject()
    );
    const receiver1 = web3.eth.accounts.create();
    const receiver2 = web3.eth.accounts.create();

    const getTransferPastEvents = await contract.getPastEvents("Transfer", {
        fromBlock: "earliest",
    });

    console.log("getTransferPastEvents", getTransferPastEvents);

    const getPastEvents = await contract.getPastEvents(ALL_EVENTS, {
        fromBlock: "earliest",
    });

    console.log("getPastEvents", getPastEvents);

    const transferEvent = await contract.events.Transfer({
        filter: {
            to: receiver1.address,
        },
    });

    transferEvent.on("data", (data) => {
        console.log("transferEvent data", data);
    });

    transferEvent.on("error", (error) => {
        console.log("transferEvent error", error);
    });

    const allEvent = await contract.events.allEvents({
        filter: {
            to: receiver1.address,
        },
    });

    allEvent.on("data", (data) => {
        console.log("allEvent data", data);
    });

    allEvent.on("error", (error) => {
        console.log("allEvent error", error);
    });

    await contract.methods
        .transfer(receiver1.address, BigInt(1))
        .send({from: acc.address});
    await contract.methods
        .transfer(receiver2.address, BigInt(1))
        .send({from: acc.address});

    await new Promise((resolve) => setTimeout(resolve, 2000));

    web3.provider?.disconnect();
}

test().catch(console.error);
