import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const version = await web3.eth.getProtocolVersion();
  console.log("Version:", version);
  // Version: 63
}
(async () => {
  await test();
})();
