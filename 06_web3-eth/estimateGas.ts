import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

//make sure to copy the private key from ganache
const value = web3.utils.toWei("1", "ether");

async function test() {
  const accounts = await web3.eth.getAccounts();
  const fromAddress = accounts[0];

  // Create a new transaction object
  const tx = {
    from: fromAddress,
    to: "0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab",
    value: value,
  };

  const estimatedGas = await web3.eth.estimateGas(tx);
  console.log("Estimated gas:", estimatedGas);
}
(async () => {
  await test();
})();
