const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);

const A = Array(N)
  .fill(0)
  .map((_, i) => i + 1);

console.log([...A.slice(0, L - 1), ...A.slice(L - 1, R).reverse(), ...A.slice(R)].join(' '));
