import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const accounts = await web3.eth.getAccounts();

  const currentBalance = await web3.eth.getBalance(accounts[0]);

  console.log("Current balance:", currentBalance); // 100000000000000000000n
}
(async () => {
  await test();
})();
