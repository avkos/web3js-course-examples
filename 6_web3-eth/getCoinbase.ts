import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const coinbase = await web3.eth.getCoinbase();
  console.log("Coinbase:", coinbase);
  // Coinbase: 0x8020b965731933170a83e2aea7b50afbc66ce0af
}
(async () => {
  await test();
})();
