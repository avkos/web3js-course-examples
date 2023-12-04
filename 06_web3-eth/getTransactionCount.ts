import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const address = await web3.eth.getCoinbase();

  const txCount = await web3.eth.getTransactionCount(address);
  console.log("Transaction count:", txCount);
  // Transaction count: 1n
}
(async () => {
  await test();
})();
