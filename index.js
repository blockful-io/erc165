const { keccak256 } = require('js-sha3')

function interfaceIdFromABI(abi) {
  try {
    const prepareData = e => `${e.name}(${e.inputs.map(e => e.type)})`

    const encodeSelector = f => "0x" + keccak256(f).slice(0, 8);

    // Parse ABI and encode its functions
    const functionSelectors = abi
      .filter(e => e.type === "function")
      .flatMap(e => `${encodeSelector(prepareData(e))}`);

    // Xor the output values and convert to hex
    const interfaceId = "0x" + functionSelectors.reduce((prev, cur) => prev ^ cur).toString(16);

    return interfaceId;
  } catch (err) { console.log(err); }
}

module.exports.interfaceIdFromABI = interfaceIdFromABI
