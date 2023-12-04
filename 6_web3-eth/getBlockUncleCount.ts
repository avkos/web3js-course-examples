import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const blockUncleCount = await web3.eth.getBlockUncleCount("latest");
  console.log("Block uncle count:", blockUncleCount);
  // Block uncle count: 0n
}
(async () => {
  await test();
})();
