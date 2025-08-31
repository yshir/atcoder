const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const ans = [];
for (let i = 1; i <= N; i++) {
  if (!A.includes(i)) {
    ans.push(i);
  }
}
console.log(ans.length);
console.log(ans.join(' '));
