const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);
const [Q] = input[2].split(' ').map(Number);

let X = [...A];
let Y = 0n;

for (let i = 0; i < Q; i++) {
  const [a, ...rest] = input[i + 3].split(' ').map(BigInt);
  if (a === 1n) {
    const [x] = rest;
    X = [];
    Y = x;
  }
  if (a === 2n) {
    const [_i, x] = rest;
    const i = Number(_i) - 1;
    X[i] = X[i] !== undefined ? X[i] : Y;
    X[i] += x;
  }
  if (a === 3n) {
    const [_i] = rest;
    const i = Number(_i) - 1;
    console.log((X[i] !== undefined ? X[i] : Y).toString());
  }
}
