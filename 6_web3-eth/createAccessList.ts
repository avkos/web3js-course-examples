import {Web3} from "web3";

const web3 = new Web3("http://localhost:8545");

async function test() {
    const transaction = {
        from: "0x2d085f612100e857c415ea6b4279aea20ed16155",
        to: "0xb82b0eff62906b20e3cec4436ed6f4b672b6e8b5",
        data: "0xcfae3217",
    };
    const result = await web3.eth.createAccessList(transaction, "latest");
    console.log("Result:", result);
    // Result: {
    //   accessList: [
    //      {
    //        address: '0xb82b0eff62906b20e3cec4436ed6f4b672b6e8b5',
    //        storageKeys: [
    //          '0x0000000000000000000000000000000000000000000000000000000000000000'
    //        ]
    //      }
    //   ],
    //   gasUsed: '0x68c5'
    // }
}

(async () => {
    await test();
})();
