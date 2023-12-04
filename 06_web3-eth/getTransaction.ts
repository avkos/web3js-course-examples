import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const tx = await web3.eth.getTransaction(
    "0xef602804f745ce03c5fbb7431487e4e436be094587c14675d9407f5444c7fa3f"
  );
  console.log("Transaction:", tx);
  // Transaction: {
  //     blockHash: '0x91be71e76099d51fed70fca3f80dc9a52ebf027a1330455ff7cb8a7481190960',
  //     blockNumber: 62n,
  //     from: '0xc8fae455deaf7cd62c3eb57cccd544eb3009ce07',
  //     gas: 300000n,
  //     gasPrice: 2500290802n,
  //     maxFeePerGas: 2500655484n,
  //     maxPriorityFeePerGas: 2500000000n,
  //     hash: '0xef602804f745ce03c5fbb7431487e4e436be094587c14675d9407f5444c7fa3f',
  //     input: '0x',
  //     nonce: 7n,
  //     to: '0x1a5c923e760076ed8ce1cd1690e2c7bc1a8b1913',
  //     transactionIndex: 0n,
  //     value: 1n,
  //     type: 2n,
  //     accessList: [],
  //     chainId: 1337n,
  //     v: 1n,
  //     r: '0xa0a4fb6da46cb8816a80ee566d46c7621a3e44d753e1c24454f90df192827cbb',
  //     s: '0x770e5726202603312d6bcb0236bbbc303e2a34448b288ae26078c15e5513728c',
  //     data: '0x'
  // }
}
(async () => {
  await test();
})();
