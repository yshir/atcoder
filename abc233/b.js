const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R] = input[0].split(' ').map(Number);
const S = input[1].split('');

console.log(
  [
    ...S.slice(0, L - 1), //
    ...S.slice(L - 1, R).reverse(),
    ...S.slice(R),
  ].join('')
);
