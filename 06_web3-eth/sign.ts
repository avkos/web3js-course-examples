import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const address = await web3.eth.getCoinbase();
  const signedData = await web3.eth.sign("0x123123", address);
  console.log("SignedData:", signedData);
  // SignedData: 0x4f2a46f6e087ac4bba79a19e5ee45fb1c53a0326cc9e5ba79e512f851e2ca75809f407e46c07dde25a0b34b7fb475e4d2d449dd620cf69d4784239c60447d94c1c
}
(async () => {
  await test();
})();
