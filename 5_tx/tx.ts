import {Web3} from 'web3'

const test = async () => {
    const web3 = new Web3('http://127.0.0.1:8545')

    const account = web3.eth.accounts.privateKeyToAccount('0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9')

    web3.eth.accounts.wallet.add(account)

    {
// Local accounts
        const toAccount = web3.eth.accounts.create()

        console.log('account balance', await web3.eth.getBalance(account.address))

        await web3.eth.sendTransaction({
            from: account.address,
            to: toAccount.address,
            value: BigInt(1_000000_000000_000000)
        })

        console.log('toAccount balance', await web3.eth.getBalance(toAccount.address))
    }

    {
// UNLOCK accounts
// Second step: add an account to the Ethereum node and unlock it
        const accountNode = {
            privateKey: '0xb45b02f408a0dd0996aab2b55a54f4ed7735f82b133c0786a9ff372ffaaf11bd',
            address: '0xe4beef667408b99053dc147ed19592ada0d77f59',
        };

        await web3.eth.sendTransaction({
            from: account.address,
            to: accountNode.address,
            value: BigInt(1_000000_000000_000000)
        })

// if you use geth backend, use a private key without 0x
        await web3.eth.personal.importRawKey(accountNode.privateKey.slice(2), '');
// unlock account
        await web3.eth.personal.unlockAccount(accountNode.address, '', 100000000);
// Make sure the account has enough eth on balance to send the transaction
        const receipt = await web3.eth.sendTransaction({
            from: accountNode.address,
            to: '0xe4beef667408b99053dc147ed19592ada0d77f59',
            value: '0x1',
            gas: '300000',
            // other transaction's params
        });

        console.log('receipt', receipt)
    }

    {
// Raw account signing
        const rawAcc = web3.eth.accounts.create()
        await web3.eth.sendTransaction({
            from: account.address,
            to: rawAcc.address,
            value: BigInt(1_000000_000000_000000)
        })

        const txObj = {
            from: rawAcc.address,
            gasPrice: 1000000001,
            gas: 21000,
            nonce: BigInt(0),
            to: account.address,
            value: BigInt(1)
        }

        const raw = await rawAcc.signTransaction(txObj)
        console.log('raw', raw)
        const res = await web3.eth.sendSignedTransaction(raw.rawTransaction)

        console.log('res', res)
    }
}

test().catch(console.error)
