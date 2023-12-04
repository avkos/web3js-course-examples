import {Web3} from 'web3';

import {abi, bytecode} from './contractData'

const web3 = new Web3('http://localhost:8545');

async function test() {

    const acc = web3.eth.accounts.privateKeyToAccount('0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9')
    web3.eth.accounts.wallet.add(acc)

    const contract = new web3.eth.Contract(abi)

    const deployedContract = await contract.deploy({
        data: bytecode,
        arguments: [BigInt(1000000_000000_000000_000000)]
    }).send({
        from: acc.address
    })
    console.log('deployedContract address', deployedContract.options.address)
}

test().catch(console.error)