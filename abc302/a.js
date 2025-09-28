const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [A, B] = input[0].split(' ').map(BigInt);

const ceil = (x, y) => {
  return x % y === 0n ? x / y : x / y + 1n;
};

console.log(ceil(A, B).toString());
