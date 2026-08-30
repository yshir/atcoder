const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const ans = [];

const A = [];

const dfs = (idx, rem) => {
  const i = idx + 1;
  const max = Math.floor(rem / i);
  if (idx === N - 1) {
    if (rem % i === 0) {
      A[idx] = rem / i;
      ans.push(A.join(' '));
    }
    return;
  }
  for (let j = 0; j <= max; j++) {
    A[idx] = j;
    dfs(idx + 1, rem - j * i);
  }
};

dfs(0, K);

console.log(ans.join('\n'));
