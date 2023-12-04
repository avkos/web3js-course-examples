import Web3Eth from 'web3-eth';

const eth = new Web3Eth('http://localhost:8545');

console.log('eth.config.defaultTransactionType before', eth.config.defaultTransactionType)
eth.setConfig({
    defaultTransactionType: '0x1',
})
console.log('eth.config.defaultTransactionType after', eth.config.defaultTransactionType)
