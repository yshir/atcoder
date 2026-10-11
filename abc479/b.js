const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const ans = [0];
for (let i = 0; i < N; i++) {
  if (S[i] === 'R') {
    ans[ans.length - 1]++;
  } else {
    ans.push(0);
  }
}
console.log(Math.max(...ans));
