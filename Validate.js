"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValid = void 0;
function getValid(args) {
    const { length } = args;
    const isError = length < 3 || length % 2 === 0 || new Set(args).size !== length;
    if (isError) {
        console.error('Invalid arguments! Please provide an odd number of unique moves.');
        console.log('Example: node rcs.js rock paper scissors');
    }
    return !isError;
}
exports.getValid = getValid;
