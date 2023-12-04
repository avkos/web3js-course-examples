import {Web3} from 'web3';
import {GreeterAbi, GreeterBytecode} from '../06_web3-eth/fixture/Greeter';

const web3 = new Web3('http://localhost:8545');

async function test() {
    const privateKey = '0x1f953dc9b6437fb94fcafa5dabe3faa0c34315b954dd66f41bf53273339c6d26';
    // add private key to wallet to have auto-signing transactions feature
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    web3.eth.accounts.wallet.add(account)

    // deploy contract
    const contract = new web3.eth.Contract(GreeterAbi);
    const deployedContract = await contract.deploy({
        data: GreeterBytecode,
        arguments: ['My Greeting'],
    }).send({from: account.address});
    deployedContract.defaultAccount = account.address;

    const transaction = {
        from: account.address,
        to: deployedContract.options.address,
        data: '0xcfae3217'
    };
    const {accessList} = await web3.eth.createAccessList(transaction, 'latest');

    console.log('AccessList:', accessList)
    // AccessList: [
    //   {
    //     address: '0xce1f86f87bd3b8f32f0fb432f88e848f3a957ed7',
    //     storageKeys: [
    //       '0x0000000000000000000000000000000000000000000000000000000000000001'
    //     ]
    //   }
    // ]

    // create transaction object with accessList
    const tx = {
        from: account.address,
        to: deployedContract.options.address,
        gasLimit: BigInt(46000),
        type: BigInt(1), // <- specify type
        accessList,
        data: '0xcfae3217'
        // gasPrice - you can specify this property directly or web3js will fill this field automatically
    }

    // send transaction
    const receipt = await web3.eth.sendTransaction(tx);

    console.log('Receipt:', receipt);
    // Receipt: {
    //   blockHash: '0xc7b9561100c8ff6f1cde7a05916e86b7d037b2fdba86b0870e842d1814046e4b',
    //   blockNumber: 43n,
    //   cumulativeGasUsed: 26795n,
    //   effectiveGasPrice: 2504325716n,
    //   from: '0xe2597eb05cf9a87eb1309e86750c903ec38e527e',
    //   gasUsed: 26795n,
    //   logs: [],
    //   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    //   status: 1n,
    //   to: '0xce1f86f87bd3b8f32f0fb432f88e848f3a957ed7',
    //   transactionHash: '0xa49753be1e2bd22c2a8e2530726614c808838bb0ebbed72809bbcb34f178799a',
    //   transactionIndex: 0n,
    //   type: 1n
    // }
}

(async () => {
    await test();
})();
