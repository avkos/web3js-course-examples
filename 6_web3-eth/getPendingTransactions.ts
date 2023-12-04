import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const pendingTransactions = await web3.eth.getPendingTransactions();
  console.log("Pending transactions:", pendingTransactions);
  // Pending transactions: []
}
(async () => {
  await test();
})();
