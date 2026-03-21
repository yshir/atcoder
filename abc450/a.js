const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const ans = [];
for (let i = N; i >= 1; i--) {
  ans.push(i);
}
console.log(ans.join(','));
