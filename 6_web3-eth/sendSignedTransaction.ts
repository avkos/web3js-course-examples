import { Web3 } from "web3";

const web3 = new Web3("http://localhost:8545");

async function test() {
  const from = await web3.eth.getCoinbase();
  const tx = {
    from,
    to: "0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab",
    value: "0x1",
    gas: BigInt(21000),
    nonce: await web3.eth.getTransactionCount(from),
    gasPrice: await web3.eth.getGasPrice(),
  };
  const signedTransaction = await web3.eth.signTransaction(tx);
  const receipt = await web3.eth.sendSignedTransaction(signedTransaction.raw);
  console.log("Signed transaction receipt:", receipt);
  // Signed transaction receipt: {
  //     blockHash: '0x8ea85e1563e023ff6523474452bd1d0543be9b64509d854a91394b7d7784e8e0',
  //     blockNumber: 121n,
  //     cumulativeGasUsed: 21000n,
  //     effectiveGasPrice: 2500000148n,
  //     from: '0xf1e4df637e764eb7bd9b9f2aab391cc757b875a0',
  //     gasUsed: 21000n,
  //     logs: [],
  //     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  //     status: 1n,
  //     to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
  //     transactionHash: '0xecadf379c96fe30faeb586a35d2631e5c0651abf9ac31ce50b212beb52d2d635',
  //     transactionIndex: 0n,
  //     type: 0n
  // }
}
(async () => {
  await test();
})();
