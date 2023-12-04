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
        gas: BigInt(21000),
        gasPrice: await web3.eth.getGasPrice(),
        type: BigInt(0) // <- specify type
    }

    // send transaction
    const receipt = await web3.eth.sendTransaction(tx);

    console.log('Receipt:', receipt);
    // Receipt: {
    //   blockHash: '0xc0f2fea359233b0843fb53255b8a7f42aa7b1aff53da7cbe78c45b5bac187ad4',
    //   blockNumber: 21n,
    //   cumulativeGasUsed: 21000n,
    //   effectiveGasPrice: 2569891347n,
    //   from: '0xe2597eb05cf9a87eb1309e86750c903ec38e527e',
    //   gasUsed: 21000n,
    //   logs: [],
    //   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    //   status: 1n,
    //   to: '0x27aa427c1d668ddefd7bc93f8857e7599ffd16ab',
    //   transactionHash: '0x0ffe880776f5631e4b64caf521bd01cd816dd2cc29e533bc56f392211856cf9a',
    //   transactionIndex: 0n,
    //   type: 0n
    // }
}

(async () => {
    await test();
})();
