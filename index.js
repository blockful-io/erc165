
async function test(object) {  
  const prepareData = e => `${e.name}(${e.inputs.map(e => e.type)})`
  // Encode function selector (assume web3 is globally available)
  const encodeSelector = f => ethers.utils.id(f).slice(0,10);
  // Parse ABI and encode its functions
  const output = object
    .filter(e => e.type === "function")
    .flatMap(e => `${encodeSelector(prepareData(e))}`);
  // Xor the output values and convert to hex
  console.log(ethers.utils.hexlify(output.reduce((prev, cur) => prev ^ cur)));
}