import {Web3} from "web3";

const test = async () => {
    const web3 = new Web3("http://127.0.01:8545");

    const acc = web3.eth.accounts.privateKeyToAccount(
        "0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9"
    );
    console.log("address", acc.address);
    console.log("pk", acc.privateKey);

    console.log("balance before", await web3.eth.getBalance(acc.address));
    console.log("accounts", await web3.eth.getAccounts());
    const coinbase = await web3.eth.getCoinbase();
    console.log("coinbase", coinbase);
    console.log("coinbase balance", await web3.eth.getBalance(coinbase));

    await web3.eth.sendTransaction({
        from: coinbase,
        to: acc.address,
        value: BigInt(100_000000_000000_000000),
    });

    console.log("balance after", await web3.eth.getBalance(acc.address));
};

test().catch(console.error);
