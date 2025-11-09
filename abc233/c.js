const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const [, X] = input[0].split(' ').map(BigInt);
const A = [];
for (let i = 0; i < N; i++) {
  const [, ...a] = input[i + 1].split(' ').map(BigInt);
  A[i] = a;
}

let cnt = 0;
const dfs = (i, acc) => {
  if (i === A.length) {
    if (acc === X) cnt++;
    return;
  }
  for (const cur of A[i]) {
    dfs(i + 1, acc * cur);
  }
};
dfs(0, 1n);
console.log(cnt);
