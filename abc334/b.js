const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [A, M, L, R] = input[0].split(' ').map(BigInt);

L -= A;
R -= A;

const C = 10 ** 18 * M;
L += C;
R += C;

const f = (X) => {
  return X / M + 1n;
};

console.log((f(R) - f(L - 1)).toString());
