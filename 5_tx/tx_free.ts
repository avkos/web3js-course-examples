import {Web3} from 'web3'

const test = async()=>{
  const web3 = new Web3('http://127.0.0.1:8545')

  console.log('getBalance', await web3.eth.getBalance('0x0b89D667fDa46570d6294cec4cE39349Ac0eAE8D'))

  console.log('getBlockNumber', await web3.eth.getBlockNumber())

  console.log('nonce', await web3.eth.getTransactionCount('0x0b89D667fDa46570d6294cec4cE39349Ac0eAE8D'))

}

test().catch(console.error)
