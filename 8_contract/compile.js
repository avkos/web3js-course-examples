const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "erc20.sol");

const source = fs.readFileSync(contractPath, "UTF-8");

const input = {
	language: "Solidity",
	sources: {
		"erc20.sol": {
			content: source,
		},
	},
	settings: {
		outputSelection: {"*": {"*": ["abi", "evm.bytecode.object"]}},
		evmVersion: "paris",
	},
};

const res = solc.compile(JSON.stringify(input));

const data = JSON.parse(res);

fs.writeFileSync(
	path.resolve(__dirname, "compiled.json"),
	JSON.stringify(data.contracts["erc20.sol"]["MTKN"])
);
