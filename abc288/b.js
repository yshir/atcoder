const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);

const ans = [];
for (let i = 0; i < K; i++) {
  ans.push(input[i + 1]);
}

ans.sort();
for (let i = 0; i < K; i++) {
  console.log(ans[i]);
}
