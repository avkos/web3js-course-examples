import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const tx = {
    from: "0xf1e4df637e764eb7bd9b9f2aab391cc757b875a0",
    value: "0x1",
    maxPriorityFeePerGas: BigInt(500000000),
    maxFeePerGas: BigInt(500000000),
    to: "0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab",
    type: BigInt(1),
  };

  const receipt = await web3.eth.sendTransaction(tx);
  console.log("Receipt:", receipt);
  // Receipt: {
  //   blockHash: '0x50cc6c50e4ea0a2e900eebe8a8883e68c4cc33d1cfdb66da65fa0b7fa3110a4f',
  //   blockNumber: 120n,
  //   cumulativeGasUsed: 21000n,
  //   effectiveGasPrice: 500000000n,
  //   from: '0xf1e4df637e764eb7bd9b9f2aab391cc757b875a0',
  //   gasUsed: 21000n,
  //   logs: [],
  //   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  //   status: 1n,
  //   to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
  //   transactionHash: '0x1b05c073e8593a928cdb689fd3c620f252fb2969d33710f297e909ef69dc56c6',
  //   transactionIndex: 0n,
  //   type: 2n
  // }
}
(async () => {
  await test();
})();
