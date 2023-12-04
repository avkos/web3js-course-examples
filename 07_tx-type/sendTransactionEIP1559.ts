import {Web3} from 'web3';

const web3 = new Web3('http://localhost:8545');

async function test() {
    const privateKey = '0x1f953dc9b6437fb94fcafa5dabe3faa0c34315b954dd66f41bf53273339c6d26';
    // add private key to wallet to have auto-signing transactions feature
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    web3.eth.accounts.wallet.add(account)

    // create transaction object
    const tx = {
        from: account.address,
        to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
        value: '0x1',
        gasLimit: BigInt(21000),
        type: BigInt(2) // <- specify type
        // maxFeePerGas - you can specify this property directly or web3js will fill this field automatically
        // maxPriorityFeePerGas - you can specify this property directly or web3js will fill this field automatically
    }

    // send transaction
    const receipt = await web3.eth.sendTransaction(tx);

    console.log('Receipt:', receipt);
    // Receipt: {
    //   blockHash: '0xfe472084d1471720b6887071d32a793f7c4576a489098e7d2a89aef205c977fb',
    //   blockNumber: 23n,
    //   cumulativeGasUsed: 21000n,
    //   effectiveGasPrice: 2546893579n,
    //   from: '0xe2597eb05cf9a87eb1309e86750c903ec38e527e',
    //   gasUsed: 21000n,
    //   logs: [],
    //   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    //   status: 1n,
    //   to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
    //   transactionHash: '0x5c7a3d2965b426a5776e55f049ee379add44652322fb0b9fc2f7f57b38fafa2a',
    //   transactionIndex: 0n,
    //   type: 2n
    // }
}

(async () => {
    await test();
})();
