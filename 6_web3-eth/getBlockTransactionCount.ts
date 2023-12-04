import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const blockTransactionCount = await web3.eth.getBlockTransactionCount(
    "latest"
  );
  console.log("Block transaction count:", blockTransactionCount);
  // Block transaction count: 0n
}
(async () => {
  await test();
})();
