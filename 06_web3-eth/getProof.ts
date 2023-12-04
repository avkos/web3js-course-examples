import { Web3 } from "web3";
const web3 = new Web3("http://localhost:8545");

async function test() {
  const contractAddress = "0x9f61CE799EbA957503157191ec8794D02ab54D6A";
  const proof = await web3.eth.getProof(
    contractAddress,
    [new Uint8Array([0])],
    "latest"
  );
  console.log("Proof:", proof);
  // Proof: {
  //     accountProof: [
  //         '0xf901f1a0c4c526e227be3fdee81488f12fc52a58bfa6b52e23802123385708bdfb1d74c0a05127f4930f7a35382a870978e53e0a4cc8123fc2720a5bfde2aa7b5a5a424c87a0a90d2b672c284410b451cf739595a12bf1d3336fee770897adf5da52fd98510ba043658986f4f0e9df11ce83cab5a644f536ef27b200fcdc40774bb45bebcc6c1ea08a9777d7a1f633cabad7d680c9889a9681b4fdb736c75f4afdda8739af430331a0c15920b31f92dae4dace57555b5ae09c37897d0ef18fcf93e7c8e6755eac8180a013bdce56aa712761684d8b0d67623df11b9b39401f9eb8795c4fe6a3d334d1cca026f5f99c521337bb453cbd5c7ae7b6ab01df1f8fa7f3c37cf74ab0364678b4bba0e85117f7e14343fc497c3555cf9431090f1f9a06b8ae0b27c222e9f65c3ce474a0a8aa5eb13534eccaa8f97850cbff5a7abc6612404a25d25539ed7618ad1801bfa06301b39b2ea8a44df8b0356120db64b788e71f52e1d7a6309d0d2e5b86fee7cba048c1454205a3a7cf4070677cd6eeb80b0d78d5c6485a6ab36a4f40ba74a3d0b5a07cb1e4f6824f303c354ebd46981043da8c0dca746c3ff184c5407a60afcd8dc4a012545779ccbc84d85525bd7e61fe9e63757b8fae2bf6a5381c86648192b38f37a018e9e4e95467a98d9072fc39a286ea1c12f1a68b691591351a875752e4e1b6ef8080',
  //         '0xf869a03330b34465872051674cc07ce393e696b669a7c03f51c1e631d842de2fceb846b846f8440180a0645f5edbacf45fb4d3bb88bf93872c79a31c4943373709e5575586f3e4dca886a04a2bfcb239d51ace7af4b55ea5123f54aa6ed267e1b5d1b2cc53989357f5ab16'
  //     ],
  //         balance: 0n,
  //         codeHash: '0x4a2bfcb239d51ace7af4b55ea5123f54aa6ed267e1b5d1b2cc53989357f5ab16',
  //         nonce: 1n,
  //         storageHash: '0x645f5edbacf45fb4d3bb88bf93872c79a31c4943373709e5575586f3e4dca886',
  //         storageProof: [
  //         {
  //             key: '0x0000000000000000000000000000000000000000000000000000000000000000',
  //             value: 10n,
  //             proof: [Array]
  //         }
  //     ]
  // }
}
(async () => {
  await test();
})();
