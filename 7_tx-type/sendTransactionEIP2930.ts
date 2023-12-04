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
        type: BigInt(1), // <- specify type
        accessList: [
            {
                address: account.address,
                storageKeys: ['0x20965255']
            }
        ]
        // gasPrice - you can specify this property directly or web3js will fill this field automatically
    }

    // send transaction
    const receipt = await web3.eth.sendTransaction(tx);

    console.log('Receipt:', receipt);
    // Receipt: {
    //   blockHash: '0xd8f6a3638112d17b476fd1b7c4369d473bc1a484408b6f39dbf64410df44adf6',
    //   blockNumber: 24n,
    //   cumulativeGasUsed: 21000n,
    //   effectiveGasPrice: 2546893579n,
    //   from: '0xe2597eb05cf9a87eb1309e86750c903ec38e527e',
    //   gasUsed: 21000n,
    //   logs: [],
    //   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    //   status: 1n,
    //   to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
    //   transactionHash: '0xd1d682b6f6467897db5b8f0a99a6be2fb788d32fbc1329b568b8f6b2c15e809a',
    //   transactionIndex: 0n,
    //   type: 1n
    // }
}

(async () => {
    await test();
})();
