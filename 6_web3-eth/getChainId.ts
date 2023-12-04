import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const chainId = await web3.eth.getChainId();
  console.log("Chain Id:", chainId);
  // Chain Id: 1337n
}
(async () => {
  await test();
})();
