import { Web3 } from "web3";

const web3 = new Web3("http://localhost:8545");

async function test() {
  const from = await web3.eth.getCoinbase();

  const tx = {
    from,
    to: "0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab",
    value: BigInt(1),
    gas: BigInt(21000),
    nonce: await web3.eth.getTransactionCount(from),
    gasPrice: await web3.eth.getGasPrice(),
  };
  const signedTransaction = await web3.eth.signTransaction(tx);
  console.log("Signed transaction:", signedTransaction);
  // Signed transaction: {
  //     raw: '0xf86514849502f9948252089427aa427c1d668ddefd7bc93f8857e7599ffd16ab0180820a96a0b9f6257bcf97ff1e868732f0479ae38d6e4f6c6ffaa1600bae08340923e665e5a07067d17e148775d97adc3cea4a4a5277fb255494370356cc8c59da29bdc99088',
  //         tx: {
  //         type: 0n,
  //             chainId: 1337n,
  //             nonce: 20n,
  //             to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
  //             gas: 21000n,
  //             gasPrice: 2500000148n,
  //             value: 1n,
  //             input: '0x',
  //             v: 2710n,
  //             r: '0xb9f6257bcf97ff1e868732f0479ae38d6e4f6c6ffaa1600bae08340923e665e5',
  //             s: '0x7067d17e148775d97adc3cea4a4a5277fb255494370356cc8c59da29bdc99088',
  //             data: '0x'
  //     }
  // }
}

(async () => {
  await test();
})();
