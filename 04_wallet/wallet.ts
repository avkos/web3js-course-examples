import {Web3} from 'web3'

const test = async()=>{
  const web3 = new Web3('http://127.0.0.1:8545')


  const account = web3.eth.accounts.privateKeyToAccount('0xff527b540a41a8503ba89b44adaaae6a9d937829cce75ec811d7c4b9f30567b9')
  // web3.eth.accounts.wallet.add('0xff527b540a41a8503ba89b44adaaae6a9d937829cce75ec811d7c4b9f30567b9')
  web3.eth.accounts.wallet.add(account)

  console.log('account index 0', web3.eth.accounts.wallet.get(0))
  console.log('account with address 0xf00D4395A183800F4BeAB0C5f84FF06599808EA5', web3.eth.accounts.wallet.get('0xf00D4395A183800F4BeAB0C5f84FF06599808EA5'))

  web3.eth.accounts.wallet.clear()
  console.log('clear')
  console.log('account index 0', web3.eth.accounts.wallet.get(0))


  console.log('created inside the wallet', web3.eth.accounts.wallet.create(3))
  console.log('account index 0', web3.eth.accounts.wallet.get(0))
  console.log('account index 1', web3.eth.accounts.wallet.get(1))
  console.log('account index 2', web3.eth.accounts.wallet.get(2))
  console.log('account index 3', web3.eth.accounts.wallet.get(3))

  const encrypted = await web3.eth.accounts.wallet.encrypt("abc")
  console.log('encrypted', encrypted[0])


  const decrypted = await web3.eth.accounts.wallet.decrypt(encrypted, "abc")
  console.log('decrypted',decrypted[0])

//   web3.eth.accounts.wallet.save('new_pass') -- only for browser

//   web3.eth.accounts.wallet.load('new_pass') -- only for browser
  console.log('remove 1 and 0')
  const accToRemove = web3.eth.accounts.wallet.get(0)
  web3.eth.accounts.wallet.remove(accToRemove!.address)
  web3.eth.accounts.wallet.remove(1)
  console.log('account index 0', web3.eth.accounts.wallet.get(0))
  console.log('account index 1', web3.eth.accounts.wallet.get(1))
  console.log('account index 2', web3.eth.accounts.wallet.get(2))
  console.log('account index 3', web3.eth.accounts.wallet.get(3))

}

test().catch(console.error)
