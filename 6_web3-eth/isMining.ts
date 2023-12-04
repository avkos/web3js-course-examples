import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const isMining = await web3.eth.isMining();
  console.log("Is mining:", isMining);
  // Is mining: true
}
(async () => {
  await test();
})();
