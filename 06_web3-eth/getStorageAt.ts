import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const contractAddress = "0xEf58954D89174b80320304aD00e162cCA09bB5dd";
  const storage = await web3.eth.getStorageAt(contractAddress, 1);
  console.log("Storage:", storage);
  // Storage: 0x7374720000000000000000000000000000000000000000000000000000000006
}
(async () => {
  await test();
})();
