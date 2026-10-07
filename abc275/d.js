const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const memo = new Map();

const f = (x) => {
  if (memo.get(x) !== undefined) return memo.get(x);
  if (x === 0n) return 1n;
  const v = f(x / 2n) + f(x / 3n);
  memo.set(x, v);
  return v;
};

console.log(f(N).toString());
