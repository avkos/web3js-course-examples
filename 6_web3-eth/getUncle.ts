import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const uncle = await web3.eth.getUncle("latest", 0);
  console.log("Uncle:", uncle);
  // Uncle: {}
}
(async () => {
  await test();
})();
