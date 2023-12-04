export const abi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "total",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numTokens",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numTokens",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
] as const

export const bytecode = '60a060405234801561001057600080fd5b50604051610a8b380380610a8b833981810160405281019061003291906100be565b8060808181525050806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550506100eb565b600080fd5b6000819050919050565b61009b81610088565b81146100a657600080fd5b50565b6000815190506100b881610092565b92915050565b6000602082840312156100d4576100d3610083565b5b60006100e2848285016100a9565b91505092915050565b60805161098561010660003960006101c501526109856000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063313ce5671161005b578063313ce567146100ee57806370a082311461010c57806395d89b411461013c578063a9059cbb1461015a5761007d565b806306fdde031461008257806318160ddd146100a057806323b872dd146100be575b600080fd5b61008a61018a565b60405161009791906106a6565b60405180910390f35b6100a86101c3565b6040516100b591906106e1565b60405180910390f35b6100d860048036038101906100d3919061078b565b6101e7565b6040516100e591906107f9565b60405180910390f35b6100f66103bc565b6040516101039190610830565b60405180910390f35b6101266004803603810190610121919061084b565b6103c1565b60405161013391906106e1565b60405180910390f35b610144610409565b60405161015191906106a6565b60405180910390f35b610174600480360381019061016f9190610878565b610442565b60405161018191906107f9565b60405180910390f35b6040518060400160405280600881526020017f4d7920746f6b656e00000000000000000000000000000000000000000000000081525081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561023457600080fd5b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461027e91906108e7565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461030a919061091b565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516103a991906106e1565b60405180910390a3600190509392505050565b601281565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040518060400160405280600481526020017f4d544b4e0000000000000000000000000000000000000000000000000000000081525081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561048f57600080fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d991906108e7565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610565919061091b565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161060491906106e1565b60405180910390a36001905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610650578082015181840152602081019050610635565b60008484015250505050565b6000601f19601f8301169050919050565b600061067882610616565b6106828185610621565b9350610692818560208601610632565b61069b8161065c565b840191505092915050565b600060208201905081810360008301526106c0818461066d565b905092915050565b6000819050919050565b6106db816106c8565b82525050565b60006020820190506106f660008301846106d2565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061072c82610701565b9050919050565b61073c81610721565b811461074757600080fd5b50565b60008135905061075981610733565b92915050565b610768816106c8565b811461077357600080fd5b50565b6000813590506107858161075f565b92915050565b6000806000606084860312156107a4576107a36106fc565b5b60006107b28682870161074a565b93505060206107c38682870161074a565b92505060406107d486828701610776565b9150509250925092565b60008115159050919050565b6107f3816107de565b82525050565b600060208201905061080e60008301846107ea565b92915050565b600060ff82169050919050565b61082a81610814565b82525050565b60006020820190506108456000830184610821565b92915050565b600060208284031215610861576108606106fc565b5b600061086f8482850161074a565b91505092915050565b6000806040838503121561088f5761088e6106fc565b5b600061089d8582860161074a565b92505060206108ae85828601610776565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108f2826106c8565b91506108fd836106c8565b9250828203905081811115610915576109146108b8565b5b92915050565b6000610926826106c8565b9150610931836106c8565b9250828201905080821115610949576109486108b8565b5b9291505056fea2646970667358221220c4d4ccf06535e1623b716bf10bef976a5da27536f598d245162046ec10a4c8a064736f6c63430008170033'
