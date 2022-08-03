"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceIdFromABI = void 0;
var js_sha3_1 = require("js-sha3");
var interfaceIdFromABI = function (abi) {
    try {
        var prepareData_1 = function (e) { return "".concat(e.name, "(").concat(e.inputs.map(function (e) { return e.type; }), ")"); };
        var encodeSelector_1 = function (f) { return "0x" + (0, js_sha3_1.keccak256)(f).slice(0, 8); };
        // Parse ABI and encode its functions
        var functionSelectors = abi
            .filter(function (e) { return e.type === "function"; })
            .flatMap(function (e) { return "".concat(encodeSelector_1(prepareData_1(e))); });
        // Xor the output values and convert to hex
        var interfaceId = "0x" + functionSelectors.reduce(function (prev, cur) { return (prev ^ cur) >>> 0; }).toString(16);
        return interfaceId;
    }
    catch (err) {
        throw (err);
    }
};
exports.interfaceIdFromABI = interfaceIdFromABI;
