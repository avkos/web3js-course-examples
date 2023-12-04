import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const blockNumber = await web3.eth.getBlockNumber();
  console.log("Block number:", blockNumber);
  // Block number: 0n
}
(async () => {
  await test();
})();
