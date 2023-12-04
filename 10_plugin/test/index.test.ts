import { Web3, core } from "web3";
import { Web3Account } from "web3-eth-accounts";
import { MtknPlugin } from "../src";

const contractAddress = "0x6cf14c3BE1514b3437fAc4fE7eB6A17c9C369449";

describe("MtknPlugin Tests", () => {
  it("should register MtknPlugin plugin on Web3Context instance", () => {
    const web3Context = new core.Web3Context("http://127.0.0.1:8545");
    web3Context.registerPlugin(new MtknPlugin(contractAddress));
    expect(web3Context.mtkn).toBeDefined();
  });

  describe("MtknPlugin method tests", () => {
    let web3: Web3;
    let acc: Web3Account;

    beforeAll(() => {
      web3 = new Web3("http://127.0.0.1:8545");
      acc = web3.eth.accounts.privateKeyToAccount(
        "0xcc846cb3721dafa43f06e50bc9edda4ef14967b2d9670e3951eb8cce4acd4aa9"
      );
      web3.eth.accounts.wallet.add(acc);
      web3.registerPlugin(new MtknPlugin(contractAddress));
      web3.mtkn.link(web3);
    });

    it("balance of", async () => {
      const balance = await web3.mtkn.balanceOf(acc.address);
      expect(Number(balance)).toBeGreaterThan(0);
    });

    it("transfer", async () => {
      const secondAccount = web3.eth.accounts.create();
      const tx = await web3.mtkn.transfer(
        acc.address,
        secondAccount.address,
        BigInt(1)
      );
      expect(tx.transactionHash).toBeDefined();
      const balance = await web3.mtkn.balanceOf(secondAccount.address);
      expect(Number(balance)).toBe(1);
    });
  });
});
