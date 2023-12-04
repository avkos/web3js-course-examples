import {Web3} from "web3";
import {abi} from "./contractData";

const contractAddress = "0xc31220715C176C325fb68F7F45C4533b30fC5B9a";
const web3 = new Web3("http://localhost:8545");

async function test() {
    const acc = web3.eth.accounts.privateKeyToAccount(
        "0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9"
    );
    web3.eth.accounts.wallet.add(acc);

    console.log("web3", web3.getContextObject().wallet);
    const contract = new web3.eth.Contract(abi, contractAddress);

    console.log("contract", contract.getContextObject().wallet);

    const name = await contract.methods.name().call();
    const decimals = await contract.methods.decimals().call();
    const symbol = await contract.methods.symbol().call();
    const totalSupply = await contract.methods.totalSupply().call();
    const balanceOf = await contract.methods.balanceOf(acc.address).call();

    console.log("name", name);
    console.log("decimals", decimals);
    console.log("symbol", symbol);
    console.log("totalSupply", totalSupply);
    console.log("balanceOf", balanceOf);

    const receiver = web3.eth.accounts.create();

    const res = await contract.methods
        .transfer(receiver.address, web3.utils.toWei(2, "ether"))
        .send({
            from: acc.address,
        });

    console.log("transfer result", res);

    console.log(
        "receiver balance",
        await contract.methods.balanceOf(receiver.address).call()
    );
}

test().catch(console.error);
