import Web3Eth from "web3-eth";

const eth = new Web3Eth("http://localhost:8545");

async function test() {
  const accounts = await eth.getAccounts();

  const currentBalance = await eth.getBalance(accounts[0]);

  console.log("Current balance:", currentBalance); // 115792089237316195423570985008687907853269984665640564039437613106102441895127n
}

(async () => {
  await test();
})();
