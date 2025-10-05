const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const alpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

let sum = 0n;
for (let i = 0; i < S.length; i++) {
  const idx = S.length - 1 - i;
  sum += BigInt(alpha.indexOf([S[idx]]) + 1) * BigInt(alpha.length) ** BigInt(i);
}
console.log(sum.toString());
