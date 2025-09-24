const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);

const X = [
  [1, 2], //
  [2, 3],
  [4, 5],
  [5, 6],
  [7, 8],
  [8, 9],
];

for (const [a, b] of X) {
  if (A === a && B === b) {
    console.log('Yes');
    return;
  }
}
console.log('No');
