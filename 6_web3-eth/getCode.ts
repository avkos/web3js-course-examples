import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const contractAddress = "0x7249bd0F383668Cc0871Ff578A4D1524d6e28C71";
  const code = await web3.eth.getCode(contractAddress, "latest");
  console.log("Code:", code);
  // Code: 0x
}
(async () => {
  await test();
})();
