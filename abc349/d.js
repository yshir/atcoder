const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R_] = input[0].split(' ').map(BigInt);
const R = R_ - 1n;

const ans = [];

const stack = [[60n, 1n]];
while (stack.length > 0) {
  const [i, j] = stack.pop();
  const l = (1n << i) * (j - 1n);
  const r = (1n << i) * j - 1n;

  if (L <= l && r <= R) {
    ans.push([l, r + 1n]);
    continue;
  }

  if (r < L || R < l) {
    continue;
  }

  stack.push([i - 1n, j * 2n]);
  stack.push([i - 1n, j * 2n - 1n]);
}

console.log(ans.length);
console.log(ans.map((x) => x.join(' ')).join('\n'));
