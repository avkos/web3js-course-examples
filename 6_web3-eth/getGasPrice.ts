import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const gasPrice = await web3.eth.getGasPrice();
  console.log("GasPrice:", gasPrice);
  // GasPrice: 20000000000n
}
(async () => {
  await test();
})();
